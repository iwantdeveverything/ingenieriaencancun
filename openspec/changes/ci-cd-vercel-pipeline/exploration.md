## Exploration: CI/CD Vercel Pipeline

### Current State

**No CI/CD workflows exist.** The `.github/` directory contains only `ISSUE_TEMPLATE/` (bug.yml, feature.yml) — zero workflow YAML files.

**Vercel is already linked** via `.vercel/project.json`:
- `projectId`: `prj_jqzXgM2EHGZ33C3Eaartv15f771r`
- `orgId`: `team_PleGB42GNZ2qEvAGCNkiH5gw`
- `projectName`: `ingenieriaencancun`

**`.vercel/` is gitignored** — `project.json` is NOT committed. Intentional per Vercel's README.txt.

**No `vercel.json`** at project root — Vercel uses default Astro framework detection.

**Existing quality hooks (local only):**
- Husky `pre-commit` → runs `pnpm test` (vitest)
- Husky `commit-msg` → runs commitlint (conventional commits)

**Available scripts:** `pnpm test` (vitest run), `pnpm build` (astro build). No typecheck script.

**Testing capabilities:** Unit ✅ vitest | Type checker ✅ tsc | Integration ❌ | E2E ❌ | Coverage ❌

---

### Affected Areas

- `.github/workflows/` — must be created; CI workflow YAML files live here
- `package.json` — needs `typecheck` script
- `.lighthouserc.json` — new file at root for Lighthouse CI config
- `openspec/config.yaml` — update verify commands

---

### Approaches

1. **Vercel Native Integration + GH Actions quality gates** — Vercel handles all deploys; GH Actions runs quality gates only
   - Pros: No deploy secrets in GH, Vercel handles preview URLs automatically, lowest maintenance
   - Cons: Deploy and quality gates run in parallel (no sequential gate before deploy)
   - Effort: **Low**

2. **Vercel CLI in GH Actions** — full control, VERCEL_TOKEN + project IDs as GH Secrets
   - Pros: Sequential gates, deploy blocked on test failure
   - Cons: Contradicts secrets-only-in-Vercel-Dashboard preference; more YAML complexity
   - Effort: **Medium**

### Lighthouse CI: `treosh/lighthouse-ci-action` recommended over `lhci autorun`

---

### Recommendation

**Approach 1: Vercel Native Integration + GH Actions quality gates.**

Workflow structure:
- `.github/workflows/quality.yml` — push + PR triggers; runs pnpm install → pnpm test → astro check → pnpm build
- `.github/workflows/lighthouse.yml` — deployment_status trigger; runs treosh/lighthouse-ci-action against Vercel URL

---

### Risks

- Lighthouse CI only fires if Vercel GitHub Integration is enabled in Dashboard (must document)
- Use `astro check` not bare `tsc --noEmit` (avoids false-positives on .astro virtual modules)
- No coverage threshold; Lighthouse thresholds must be defined in .lighthouserc.json
- Single PR: if merged before enabling Vercel GitHub Integration, Lighthouse never runs

---

### Ready for Proposal

Yes. All information gathered. Recommend proceeding with Approach 1.
