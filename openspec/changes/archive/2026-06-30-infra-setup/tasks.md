# Tasks: infra-setup

## Review Workload Forecast

Decision needed before apply: No
Chained PRs recommended: No
Chain strategy: pending
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Infrastructure Setup | PR 1 | Base branch: main. All infra config. |

## Phase 1: GitHub Repository & Protection

- [x] 1.1 Create the GitHub repository `iwantdeveverything/ingenieriaencancun` and push local code using `gh repo create`.
- [x] 1.2 Configure branch protection on `main` to require at least 1 pull request review approval before merging.
- [x] 1.3 Add remote origin to local git configuration if not automatically added.

## Phase 2: Issue Templates

- [x] 2.1 Create `.github/ISSUE_TEMPLATE/bug.yml` for standardized bug tracking.
- [x] 2.2 Create `.github/ISSUE_TEMPLATE/feature.yml` for standardized feature tracking.

## Phase 3: Deployment (Vercel)

- [x] 3.1 Link the local project to Vercel using `npx vercel link`.
- [x] 3.2 Ensure automatic deployments are enabled for `main` (production) and PRs (preview).

## Phase 4: Commit Standards

- [x] 4.1 Document Conventional Commits requirement (e.g., in a `CONTRIBUTING.md` or `README.md`).
- [x] 4.2 (Optional) Setup Husky and commitlint to enforce Conventional Commits if decided during the apply phase.
