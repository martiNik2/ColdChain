# PMP 11: Quality management plan, Author: Hamza, Anas

## Quality objectives and metrics

The following are the key quality metrics ColdChain aims to achieve:

1. The API processes 1.667 requests per second, with 95% of requests handled in less than 500ms.

1. The API has a 99.9% availability with 24/7 uptime.

1. The app passes the OWASP top 10 checklist with no vulnerabilities.

1. At least 70% statement coverage by the automated unit tests on the backend.

## Reviews

- Project management plans: Plans are reviewed with the team before acceptance, and the team cooperates on writing most of the plans.

- Code review: Each feature has to pass all automated tests and acceptance criteria assigned, and features are accepted through pull requests to dev branch.

- Schedule and changes: Sudden or unexpected blockings are reviewed in a meeting either face-to-face or online to find solutions.

## Definition of Done

For a feature to be considered as done the following must be true:

1. The feature is fully built according to the requirement item
1. The codebase compiles successfully and the linter gives no errors
1. The acceptance tests are written and verified
1. A pull request is opened for a peer to review the code, and then merged if verified

## Quality control

To make sure the tests incorporate the entire project many types of tests will be used:

1. Unit tests: These check specific methods and business logic to make sure they behave as required, such as excursion detection and sending alerts
1. Integration testing: These test the whole backend, including the API, the database, and the simulator and any external services for correctness
1. Edge-case testing: We will conduct those tests to make sure edge cases (like 2C and 8C, 30 minutes of out of range temperature) behave as stated, and do not cause unexpected results
1. End-to-end testing: This will incorporate the front-end to the integration testing, to make sure users can access the app without any problems