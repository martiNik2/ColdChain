# PMP 15: Construction plan, Author: Anas

## Technology stack

As mentioned in the sourcing and tooling plan, we will be using Python for backend as well as the logger simulator script, React and Typescript for frontend, Postgres for testing, development, and production, Keycloak as the test identity provider, Nginx as a reverse proxy, docker engine and docker compose for deployment and orchestration, and github for version control.

## Coding standards and conventions

- PEP 8 standard for the python backend
- ESLint and TS/JS standards for the frontend
- Layer separation by isolating database operations, business logic, and API controller
- Git commits have a clear and concise message of the code included
- Splitting the code into files to enforce separation of concerns
- All new backend endpoints have unit tests written with PyTest before acceptance
- All React frontend components and pages are tested using Jest or similar modules before acceptance

## Code review

For any feature to be considered complete, it must pass the Definition of Done defined in PMP 11, meaning it has to pass automated CI tests and submitted through a pull request then reviewed, and only then will the feature be accepted.


## Sprint goals

1. Sprint 1 (Weeks 8,9): sign-in, logger registry, shipments and dispatch, device readings
2. Sprint 2 (Weeks 10,11): Excursion detection and alerts, receipt, acceptance, quarantine and QA decisions
3. Sprint 3 (Weeks 12,13): Lost signal and late alerts, temperature charts, dashboard, deployment