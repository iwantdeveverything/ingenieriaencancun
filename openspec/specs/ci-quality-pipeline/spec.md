# ci-quality-pipeline Specification

## Purpose

Defines the requirements for the GitHub Actions workflow that runs quality gates (unit tests, type checking, and production build) on every push and pull request to guarded branches.

## Requirements

### Requirement: Trigger Branches

The workflow MUST trigger on `push` events targeting `main`, `develop`, and `staging` branches, and on all `pull_request` events regardless of target branch.

#### Scenario: Push to guarded branch triggers quality gate

- GIVEN a developer pushes commits to the `main`, `develop`, or `staging` branch
- WHEN GitHub receives the push event
- THEN the quality gate workflow MUST start automatically

#### Scenario: Pull request triggers quality gate

- GIVEN a developer opens or updates a pull request
- WHEN the pull_request event fires
- THEN the quality gate workflow MUST run against the PR head commit

### Requirement: Step Execution Order

The workflow MUST execute steps in this exact sequence: dependency install → unit tests → type check → production build. Each step MUST only start if the previous step succeeded (fail-fast).

#### Scenario: Happy path — all steps pass

- GIVEN a commit with valid code, passing tests, and no type errors
- WHEN the workflow runs
- THEN all four steps complete successfully and the workflow reports success

#### Scenario: Test failure blocks subsequent steps

- GIVEN a commit that introduces a failing unit test
- WHEN `pnpm test` exits with a non-zero code
- THEN the type check and build steps MUST NOT execute
- AND the workflow MUST report failure

#### Scenario: Build failure is caught

- GIVEN tests and type check both pass but the Astro build fails
- WHEN `pnpm build` exits with a non-zero code
- THEN the workflow MUST report failure

### Requirement: Runtime Environment

The workflow MUST use Node.js >= 22.12.0 and pnpm 9.x. The workflow SHOULD cache the pnpm store to reduce install time on repeated runs.

#### Scenario: Cache hit on repeated push

- GIVEN the pnpm store cache exists from a previous run with the same lockfile hash
- WHEN a new push triggers the workflow
- THEN dependency install MUST complete faster by restoring from cache instead of downloading all packages
