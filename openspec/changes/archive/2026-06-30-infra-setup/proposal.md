# Proposal: Infrastructure Setup (infra-setup)

## Intent

Establish the foundational development infrastructure for the `ingenieriaencancun` project. This includes setting up the GitHub repository under the `iwantdeveverything` organization, enforcing code quality standards through branch protection and conventional commits, standardizing issue tracking, and configuring continuous deployment via Vercel.

## Scope

### In Scope
- Create and configure the GitHub repository (`iwantdeveverything/ingenieriaencancun`).
- Setup trunk-based development with branch protection on `main` (requiring at least 1 approval before merging).
- Setup basic GitHub Issue templates (Bugs and Features).
- Establish Conventional Commits as the commit message standard.
- Link the project to Vercel for automatic deployments on push to PRs and `main`.

### Out of Scope
- Writing application code or business logic.
- Setting up complex CI pipelines (e.g., custom GitHub Actions for advanced testing).
- Configuring custom domain names on Vercel.

## Capabilities

> This section is the CONTRACT between proposal and specs phases.
> The sdd-spec agent reads this to know exactly which spec files to create or update.
> Research `openspec/specs/` before filling this in.

### New Capabilities
None

### Modified Capabilities
None

## Approach

1.  **Repository Creation**: Push the local Git repository to the `iwantdeveverything/ingenieriaencancun` GitHub repository using the `gh` CLI.
2.  **Branch Protection**: Configure branch protection rules on `main` to require pull request reviews (at least 1 approval) using standard `gh` commands or GitHub settings.
3.  **Issue Templates**: Create `.github/ISSUE_TEMPLATE/bug.yml` and `.github/ISSUE_TEMPLATE/feature.yml` for standardized issue tracking.
4.  **Vercel Deployment**: Link the project to Vercel using `npx vercel link` and configure automatic deployments for production (`main`) and preview (PRs) environments.
5.  **Conventional Commits**: Document the requirement for conventional commits and optionally enforce it via a linter (e.g., `commitlint` with Husky) if deemed necessary during the apply phase.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `/.github/ISSUE_TEMPLATE/` | New | Issue templates for Bugs and Features |
| GitHub Settings | Modified | Repository creation and branch protection rules |
| Vercel Settings | Modified | Project linking and deployment configuration |
| Git Configuration | Modified | Adding remote origin |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Misconfigured branch protection blocking developers | Low | Test PR workflow immediately after setup and adjust rules if necessary. |
| Vercel deployment failing due to missing build settings | Low | Verify Vercel settings and deployment logs after the first push. |
| Insufficient GitHub Org permissions | Low | Ensure the user executing the setup has the required permissions in `iwantdeveverything`. |

## Rollback Plan

- Delete the GitHub repository if it was incorrectly created.
- Remove the `.github/` folder and issue templates from the local repository.
- Unlink the Vercel project by removing the `.vercel` directory and deleting the project from the Vercel dashboard.

## Dependencies

- Appropriate permissions in the `iwantdeveverything` GitHub organization.
- Vercel account authentication (already confirmed).
- `gh` CLI installed and authenticated (already confirmed).

## Success Criteria

- [ ] Repository exists at `https://github.com/iwantdeveverything/ingenieriaencancun`.
- [ ] Pull requests to `main` require at least 1 approval before they can be merged.
- [ ] Bug and Feature issue templates are available when creating a new issue on GitHub.
- [ ] Commits follow the Conventional Commits format.
- [ ] A push to `main` or a PR triggers an automatic deployment on Vercel.
