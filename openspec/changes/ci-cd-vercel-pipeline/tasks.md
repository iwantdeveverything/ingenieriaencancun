# Tasks: CI/CD Pipeline — GitHub Actions + Vercel

**Change**: ci-cd-vercel-pipeline
**Delivery**: single-pr
**Budget**: ~80–85 lines changed (4 files)
**Based on**: proposal.md, design.md

---

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~80–85 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Delivery strategy | single-pr |
| Chain strategy | size-exception |

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: size-exception
400-line budget risk: Low

---

## Phase 1: Foundation

- [x] 1.1 Add `"typecheck": "astro check"` to `scripts` in `package.json` (verify no existing key conflicts)
- [x] 1.2 Verify `pnpm typecheck` exits 0 with no type errors locally — fix any errors before proceeding

---

## Phase 2: Quality Gate Workflow

- [x] 2.1 Create `.github/workflows/` directory (`mkdir -p .github/workflows`)
- [x] 2.2 Create `.github/workflows/quality.yml`:
  - Trigger: `push` (main, develop, staging) + `pull_request` (same branches)
  - Job `quality` steps in order:
    1. `actions/checkout@v4`
    2. `pnpm/action-setup@v4` — version: 9, run-install: false
    3. `actions/setup-node@v4` — node-version: '22', cache: 'pnpm'
    4. `pnpm install --frozen-lockfile`
    5. `pnpm test`
    6. `pnpm typecheck`
    7. `pnpm build`
- [ ] 2.3 Verify: push test branch → confirm `quality` status check appears and passes on GitHub

---

## Phase 3: Lighthouse CI Workflow

- [x] 3.1 Create `.lighthouserc.json` at project root:
  - `categories:performance` → error, minScore: 0.9
  - `categories:accessibility` → error, minScore: 0.9
  - `categories:best-practices` → warn, minScore: 0.8
  - `categories:seo` → warn, minScore: 0.9
- [x] 3.2 Create `.github/workflows/lighthouse.yml`:
  - Trigger: `deployment_status`
  - Condition: `github.event.deployment_status.state == 'success'`
  - Job `lighthouse` steps:
    1. `actions/checkout@v4`
    2. `treosh/lighthouse-ci-action@v12` — urls: `${{ github.event.deployment_status.target_url }}`, configPath: `.lighthouserc.json`, uploadArtifacts: true, temporaryPublicStorage: true

---

## Phase 4: Operator Prerequisites (Non-code)

- [ ] 4.1 Enable Vercel GitHub Integration: Dashboard → Project Settings → Git → Connect GitHub repo
- [ ] 4.2 Confirm branch mapping in Vercel: `main` → Production, `develop`/`staging` → Preview/Staging
- [ ] 4.3 Confirm no GitHub Secrets are required — Vercel handles deploy tokens internally

---

## Phase 5: Verification

- [ ] 5.1 Open a test PR → confirm `quality` status check appears and passes
- [ ] 5.2 Merge to `develop`/`staging` → confirm Vercel preview URL generated + `lighthouse` workflow fires
- [ ] 5.3 Merge to `main` → confirm production deploy + Lighthouse audits production URL with passing scores
- [ ] 5.4 Introduce a failing test in a branch → confirm `quality` check blocks the PR with red status → revert
