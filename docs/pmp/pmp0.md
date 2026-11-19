# PMP 0: Project charter and Business case, Author : Anas, Hamza

## Project title

### ColdChain: a vaccine monitoring and excursion detection system

## Purpose

- The purpose of this project is to deliver by week 14 a working MVP of ColdChain,
a responsive web app that helps users from pharmacists to dispatchers in managing vaccines,
preventing ineffective use of them on patients.

## Sponsor

- Director of the central vaccine store

## Objectives

### 1. Dispatchers create and dispatch a shipment in under 2 minutes.   
- Measure of success: usability test with at least 5 participants.

### 2. No shipment with a temperature excursion is accepted into stock without a QA release
- Measure of success: automated tests.

### 3. Excursions are detected on the first reading that makes them more than 30 minutes long, and lost signals are flagged after 2 hours.

- Measure of success: demonstration with simulated loggers.

### 4. QA can view shipments per state and the share of shipments with excursions.

- Measure of success: dashboard demonstrated on the test data.

### 5. The MVP passes the group's acceptance tests and an OWASP top 10 security checklist before the final demonstration.

- Measure of success: acceptance tests and checklist passed by week 14.

### 6. The project finishes within the planned effort budget of the cost management plan.

- Measure of success: Schedule variance of no more than one week.


## High level scope

### In-scope

1. Sign-in (SSO with Keycloak)
1. Logger management (register and recalibrate)
1. Shipment handling
1. Dispatch shipments
1. Device readings with keys and duplicate handling
1. Excursion detection
1. Alert system
1. Handle lost-signal and late arrival
1. Receipt with arrival temperature
1. Accept shipments
1. Quarantine with QA release or discard
1. Reading history
1. Dashboard
1. Deployment to a server

### Out of scope

1. Real logger hardware
1. Stock management after acceptance
1. Route planning and GPS
1. SMS alerts
1. The ministry's National systems
1. Native mobile apps

## Milestones

### Week 2

- Team formed
- Roles agreed
- Working agreement discussed

### Week 4

- Product backlog refined, Requirements reviewed with the TA

### Week 7

- Part 1 checkpoint submission, PMP 0-16 and diagrams submitted

### Week 8,9 (Sprint 1)

- Sign-in
- Logger registry
- Shipments and dispatch
- Device readings

### Week 10,11 (Sprint 2)

- Excursion detection
- Alert system
- Receipt and acceptance
- Quarantine and QA decisions

### Week 12,13 (Sprint 3)

- Lost signal and late alerts
- Temperature charts
- Dashboard
- Deployment

### Week 14

- Part 2 checkpoint, the complete PMP from 0 to 20, working MVP, test evidence and closure report

### Week 15

- Presentation, Discussion, and the Online test

## Budget

- 6102 JOD total costs of labor, contingency and management

## Success criteria 

- In addition to the objectives defined above and their success criteria, the non-functional requirements also assess the system
- Performance assessments by having 500 loggers send data every 5 minutes with 95% under 500 ms
- Availability assessed by having at least 99.9% around the clock
- Security assessed by enforcing HTTPS, single sign-on, logger key isolation, RBAC on all endpoints, and passing the OWASP top 10 checklist

## Authority

- The Project manager manages the team, assigns tasks, solves blockings, and escalates problems to the TA if need be
- All software design and architecture decisions go through the software architect, and documented by the ADR
- Change requests go through the software architect first, who then decides to accept or decline the change, and then to project manager to have the final decision
- Environment variables, deployments and production infrastructure are only managed by the DevOps engineer

## Benefits

- Ineffective vaccines that get through due to receiver misjudgement : 3 shipments a year * 100 doses per shipment * 5 JOD per dose = **1500 JOD**
- Quality officers time thats wasted on calls : 50 hours per year * 10 JOD/hour = **500 JOD**
- Shipments that get through due to uncalibrated loggers : 2 shipments a year * 100 doses per shipment * 5 JOD per dose = **1000 JOD**
- Total estimated saved value based on listed assumptions = **3000 JOD**

## Cost

- 3 Students working 8 hours per week * 14 weeks * 15 JOD/hour + contingency reserves + management cost =  **6102 JOD**

## Net Present Value (NPV)

|        | Cash flow (JOD) | Discount value at 8% | Present value |
|--------|-----------------|----------------------|---------------|
| Year 0 | -6102           | 1.000                | -6102         |
| Year 1 | +3000           | 0.9259               | +2777          |
| Year 2 | +3000           | 0.8573               | +2572          |
| Year 3 | +3000           | 0.7938               | +2381          |
| NPV    |                 |                      | +1627          |

Since the NPV is positive, the project is expected to succeed and have financial benefits.