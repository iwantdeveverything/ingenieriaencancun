# ci-lighthouse-pipeline Specification

## Purpose

Defines the requirements for the GitHub Actions workflow that audits deployed URLs with Lighthouse CI, triggered automatically after Vercel reports a successful deployment.

## Requirements

### Requirement: Trigger Event

The workflow MUST trigger on the `deployment_status` GitHub event and MUST only proceed when the deployment state is `success`. Deployments in any other state MUST be ignored.

#### Scenario: Successful deployment triggers audit

- GIVEN Vercel completes a deployment and reports `deployment_status` with state `success`
- WHEN GitHub delivers the webhook event to the workflow
- THEN the Lighthouse audit MUST start using the URL from `github.event.deployment_status.target_url`

#### Scenario: Failed deployment skips audit

- GIVEN Vercel reports a deployment with state `failure` or `error`
- WHEN GitHub delivers the webhook event
- THEN the Lighthouse workflow MUST exit early without running any audit steps

### Requirement: Audit Target

The workflow MUST audit the exact URL provided by the `deployment_status` event. It MUST NOT use a hardcoded URL or a locally served build.

### Requirement: Score Thresholds

The workflow MUST enforce minimum Lighthouse scores defined in `.lighthouserc.json`. The system SHALL fail the workflow if any score falls below the configured minimum. Required minimums: Performance >= 90, Accessibility >= 90, Best Practices >= 80.

#### Scenario: All scores meet thresholds

- GIVEN a deployment where the page achieves Performance 95, Accessibility 92, Best Practices 85
- WHEN the Lighthouse audit completes
- THEN the workflow MUST report success

#### Scenario: Score below threshold fails workflow

- GIVEN a deployment where the Performance score is 78
- WHEN the Lighthouse audit completes
- THEN the workflow MUST report failure and surface which score(s) failed
