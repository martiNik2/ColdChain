# PMP 3: Project organization and governance, Author: Hamza, Anas

## Roles and responsibilities

### Project manager / Scrum master : Anas

1. Manages the team
1. Assign tasks to the right people
1. Write the charter, management plans, and refined requirements
1. Manage risks, changes, and stakeholders

### Business analyst : Hamza

1. Estimate costs of building and maintaining the app
1. Write the business case
1. Refine the requirements and build the project backlog
1. Define a user guide

### Software architect : Mohammad

1. Establishes the high level application architecture
1. Designs the application and its components
1. Makes architectural decisions and documents them in the ADR
1. All design and infrastructure changes go through the software architect before acceptance

### Developers Anas, Hamza, Mohammad

1. Responsible for constructing the building blocks of the application
1. Solve technical problems and application errors
1. Cooperate with the DevOps engineer and test lead to reach desirable results

### Quality and test lead : Anas

1. Responsible for conducting tests of all kinds
1. Must conduct quality checks on all aspects of the application
1. Responsible for security tests

### DevOps and configuration manager : Anas

1. Manages the hosting virtual machine
1. Configures environment and container specific options
1. Administrates CI/CD and the deployment pipeline
1. Checks releases, production issues, and configures external services

## RACI matrix

| Deliverables                           |  PM | BA | SWA | DEV | OPS | QA |
|----------------------------------------|:---:|:--:|:--:|:--:|:--:|:--:|
| Project charter and business case      | A/R |  C |  I |  I |  I |  I |
| Refined requirements (Product backlog) |  A  |  R |  C |  C |  I |  I |
| Architecture and Design                |  A  |  I |  R |  C |  C |  C |
| Schedule and cost plans                |  A  |  R |  C |  I |  I |  I |
| Risk register                          | A/R |  C |  C |  C |  C |  C |
| Quality and test plans                 |  A  |  I |  C |  I |  I |  R |
| Configuration management and CI        |  A  |  I |  C |  I |  R |  I |
| Construction (Code)                    |  A  |  I |  C |  R |  I |  I |
| Testing and test report                |  A  |  I |  I |  C |  I |  R |
| Deployment to pilot                    |  A  |  I |  C |  I |  R |  I |
| Status reports and EVM                 | A/R |  C |  I |  I |  C |  C |
| Closure report                         | A/R |  C |  I |  I |  I |  I |

## Decision rights

- The project manager has the rights to adjust the project management plans, assign tasks, and escalate conflicts to the TA
- The Business analyst has the rights to refine the requirements, add requirements discovered in elicitation, and handle the budget, costs, and business case benefits
- The software architect has the rights to make architectural decisions, construct and alter designs, and approve or decline change requests from the CCB

## Change control board (CCB)

- To prevent scope creep, any changes that are suggested will go through the CCB
- Changes are first reviewed and evaluated by the software architect
- The software architect then presents the tradeoffs, and then it is discussed with the project manager and business analyst
- If the schedule plans, cost and budget plans, and scope accommodate for the change, the project manager then approves the request

## Working agreement

- Communication channel: primarily Discord voice and chat, with Whatsapp as a backup, replies within 24 hours
- Meetings: meetings whenever necessary, with at least one meeting a week
- Repository: Github as the main remote for the repository, production branch main, development branch is dev, no direct pushes to main and features will be checked out from dev with the naming convention "feature/my-feature"
- Changes are accepted only through pull requests, with squash merge from features to dev
- Standups will be on campus, and online if need be