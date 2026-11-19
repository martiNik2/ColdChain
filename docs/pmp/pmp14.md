# PMP 14: Configuration management plan, Author: Anas

The DevOps and configuration manager is responsible for maintaining this plan, managing the repository, and executing the deployment baselines.

## Configuration items

All of the following items will be tracked by the github repository:

- Project management plans
- Design documents
- Product backlog
- Back-end API source code
- Front-end source code
- Database schema and migrations
- Deployment workflows

## Branching strategy

The repository will contain one main branch for releases and production, a dev branch for development and testing, and feature or fix branches for each requirement or subtask, with naming conventions being `feature/lorem-ipsum` or `fix/lorem-ipsum`.

## Versioning

Part 1 will not have release versions. In part 2, each sprint will have its pre-release version in the format `v0.x` with x being the sprint number, and the final release will have the label `v1.0`, and these versions will use git tags for easy tracking and rolling-back if needed.

## Baselines

1. Part 1 baseline: by week 7 the repository will contain PMP 0-16, the design documents, and refined product backlog.

2. Part 2 baseline: by the end of sprints 1,2, and 3, and the main release on week 14, which will contain the final frozen codebase, schema and all PMP documents.

Note: Once a baseline is established, any changes must go through the CCB as defined in PMP 3.