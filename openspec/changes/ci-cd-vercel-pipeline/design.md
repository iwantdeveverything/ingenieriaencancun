# Design: CI/CD Pipeline — GitHub Actions + Vercel

**Change**: ci-cd-vercel-pipeline
**Status**: Draft
**Based on**: proposal.md

---

## Overview

Two independent GitHub Actions workflows alongside Vercel's Native GitHub Integration. Quality gates run on push/PR; Lighthouse audits run after Vercel reports a successful deployment. No deploy secrets are stored in GitHub.

---

## Architecture

### Component Map

```
GitHub Repository
├── .github/workflows/
│   ├── quality.yml          ← push / pull_request trigger
│   └── lighthouse.yml       ← deployment_status trigger
├── .lighthouserc.json       ← Lighthouse threshold config
└── package.json             ← +typecheck script (astro check)

Vercel Dashboard (external)
└── GitHub Integration        ← auto-deploys on push, emits deployment_status
```

### Sequence Diagram

```
Developer                 GitHub                  Vercel               Lighthouse
    │                       │                       │                       │
    │──push / open PR──────▶│                       │                       │
    │                       │                       │                       │
    │             ┌─────────┴──────────┐            │                       │
    │             │  quality.yml fires │            │                       │
    │             │  pnpm install      │            │                       │
    │             │  pnpm test         │            │                       │
    │             │  pnpm typecheck    │            │                       │
    │             │  pnpm build        │            │                       │
    │             │  ✅ / ❌ status    │            │                       │
    │             └─────────┬──────────┘            │                       │
    │                       │                       │                       │
    │                       │──push event──────────▶│                       │
    │                       │                       │  build + deploy        │
    │                       │                       │  (automatic)          │
    │                       │◀──deployment_status───│                       │
    │                       │   state: success       │                       │
    │                       │   target_url: https://│                       │
    │             ┌─────────┴──────────┐            │                       │
    │             │ lighthouse.yml     │            │                       │
    │             │ fires on condition │            │                       │
    │             │ treosh/lhci-action │──audit────────────────────────────▶│
    │             │ checks thresholds  │◀──scores───────────────────────────│
    │             │ ✅ / ❌ status     │            │                       │
    │             └────────────────────┘            │                       │
```

---

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `.github/workflows/quality.yml` | Create | Quality gate: install → test → typecheck → build |
| `.github/workflows/lighthouse.yml` | Create | Lighthouse CI on deployment_status |
| `.lighthouserc.json` | Create | Score thresholds (performance ≥ 0.9, a11y ≥ 0.9) |
| `package.json` | Modify | Add `"typecheck": "astro check"` to scripts |

---

## Workflow Designs

### quality.yml

```yaml
# Trigger: push to main/develop/staging + PRs to same branches
# Job: quality
# Steps:
#   1. actions/checkout@v4
#   2. pnpm/action-setup@v4   (version: 9, run-install: false)
#   3. actions/setup-node@v4  (node-version: '22', cache: 'pnpm')
#   4. pnpm install --frozen-lockfile
#   5. pnpm test
#   6. pnpm typecheck
#   7. pnpm build
```

Key notes:
- `pnpm/action-setup@v4` handles pnpm without a `packageManager` field in `package.json`
- `actions/setup-node@v4` with `cache: 'pnpm'` caches the pnpm store automatically
- All three gates (test, typecheck, build) MUST pass for the status check to go green

### lighthouse.yml

```yaml
# Trigger: deployment_status
# Condition: github.event.deployment_status.state == 'success'
# Job: lighthouse
# Steps:
#   1. actions/checkout@v4
#   2. treosh/lighthouse-ci-action@v12
#        urls: ${{ github.event.deployment_status.target_url }}
#        configPath: .lighthouserc.json
#        uploadArtifacts: true
#        temporaryPublicStorage: true
```

Key notes:
- `deployment_status` fires for EVERY deployment (preview + production); `if` condition filters only successful ones
- `target_url` is the real Vercel URL — no URL construction needed
- Results uploaded to `temporary-public-storage` (free, no LHCI server needed)

### .lighthouserc.json

```json
{
  "ci": {
    "assert": {
      "assertions": {
        "categories:performance":    ["error", {"minScore": 0.9}],
        "categories:accessibility":  ["error", {"minScore": 0.9}],
        "categories:best-practices": ["warn",  {"minScore": 0.8}],
        "categories:seo":            ["warn",  {"minScore": 0.9}]
      }
    }
  }
}
```

`error` → workflow fails and blocks merge. `warn` → reported but non-blocking.

---

## Architecture Decisions

### Decision 1 — Deployment Approach

- **Choice**: Vercel Native GitHub Integration
- **Alternatives**: Vercel CLI in GH Actions (requires `VERCEL_TOKEN` + project IDs as GH Secrets)
- **Rationale**: Hard constraint — no deploy secrets in GitHub. Vercel Native Integration provides automatic preview URLs, branch-to-environment mapping, and `deployment_status` webhooks with zero secrets in GH.

### Decision 2 — TypeScript Checker

- **Choice**: `astro check` (via `pnpm typecheck`)
- **Alternatives**: `tsc --noEmit`
- **Rationale**: Astro generates virtual `.d.ts` modules (e.g., `astro:content`) that bare `tsc` cannot resolve, producing false-positive errors in CI. `astro check` has the Astro LSP context and handles these correctly.

### Decision 3 — Lighthouse CI Action

- **Choice**: `treosh/lighthouse-ci-action@v12`
- **Alternatives**: `lhci autorun` (global npm install required, manual URL construction)
- **Rationale**: Purpose-built GitHub Action; no global install, reads `target_url` directly from `deployment_status` event, composable with `uploadArtifacts`.

### Decision 4 — Lighthouse Trigger Event

- **Choice**: `deployment_status`
- **Alternatives**: `push` (hardcoded URL, audits stale or non-deployed code)
- **Rationale**: `deployment_status` provides the real, live Vercel URL for the exact commit being audited. Auditing a static URL on `push` misses preview deployments.

### Decision 5 — pnpm Setup

- **Choice**: `pnpm/action-setup@v4` + `actions/setup-node@v4` with `cache: 'pnpm'`
- **Alternatives**: Corepack via `enableCorepackEasing` (requires `packageManager` field in package.json, which is absent)
- **Rationale**: `package.json` has no `packageManager` field. `pnpm/action-setup` works without it. Pin `version: 9` for reproducibility.

---

## Known Tradeoffs

| Tradeoff | Impact | Status |
|----------|--------|--------|
| Quality and deploy run in parallel | A broken build can deploy before CI fails | Accepted — hard constraint (no secrets in GH) |
| Lighthouse only fires if Vercel Integration is enabled | Pipeline silently never audits if skipped | **Prerequisite** — documented in tasks |
| No coverage threshold enforcement | Low coverage goes undetected in CI | Out of scope |

---

## Testing Strategy

- **Unit**: `vitest run` via `pnpm test` (existing, unchanged)
- **Type**: `astro check` via `pnpm typecheck` (new script)
- **Build**: `astro build` via `pnpm build` (existing)
- **Performance/A11y**: Lighthouse CI via `treosh/lighthouse-ci-action` (new, post-deploy)
- **Workflow validation**: The PR that introduces these files is itself the first pipeline run

---

## Prerequisites (Operator Actions — Outside Code Change)

1. Vercel Dashboard → Project Settings → Git → Enable GitHub Integration
2. Verify branch mapping: `main` → Production, `develop`/`staging` → Staging
3. No GitHub Secrets needed — confirm none are required before merge

---

## Open Questions

None. All decisions documented above.
