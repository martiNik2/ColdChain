# PMP 4 Scope and requirements management plan, Author: Mohammad, Hamza, Anas

## Refined requirements

### R-01

#### Requirement
Staff sign in with their organization account (simulated OpenID connect)
#### Acceptance criteria
- AC-1.1: Users sign in successfully and have a role and a site assigned to them
- AC-1.2: Users get redirected to their respective dashboards
#### Traces to
OBJ-01
#### Priority
Must

---

### R-02

#### Requirement
Dispatchers create shipments with the required fields: product, lots, doses, destination, expected delivery, and a valid logger
#### Acceptance criteria
- AC-2.1: Invalid loggers or missing required data will inform the dispatcher with an error and will not create shipment
- AC-2.2: Shipments created successfully will show success messages
#### Traces to
OBJ-01
#### Priority
Must

---

### R-03

#### Requirement
For a logger to be valid it must be calibrated within the last 12 months and not on another live shipment
#### Acceptance criteria
- AC-3.1: Dispatchers see the status of loggers before choosing
#### Traces to
OBJ-01
#### Priority
Must

---

### R-04

#### Requirement
Dispatchers send the shipment and the receiving site is told
#### Acceptance criteria
- AC-4.1: Dispatchers see a shipment sent success message
- AC-4.2: The responsible receiver at the receiving site is sent an email
#### Traces to
OBJ-01
#### Priority
Must

---

### R-05

#### Requirement
Logger readings are only accepted in transit
#### Acceptance criteria
- AC-5.1: A reading received while the shipment is not in transit will be ignored
#### Traces to
OBJ-01
#### Priority
Must

---

### R-06

#### Requirement
Loggers post readings with their key
#### Acceptance criteria
- AC-6.1: Unauthorized POST requests are rejected with 401 status response
#### Traces to
OBJ-05
#### Priority
Must

---

### R-07

#### Requirement
Readings below 0 C, or readings outside 2-8 C for more than 30 minutes are flagged as excursions
#### Acceptance criteria
- AC-7.1: A -1 C reading arrives, shipment is flagged with excursion
- AC-7.2: 3 readings arrive, all outside the 2-8 C range, shipment is not flagged with excursion
- AC-7.3: 7 readings arrive, all outside the 2-8 C range, shipment is not flagged with excursion
- AC-7.4: 8 readings arrive, all outside the 2-8 C range, shipment will be flagged with excursion
#### Traces to
OBJ-03
#### Priority
Must

---

### R-08

#### Requirement
An excursion alerts the QA and the receiver once
#### Acceptance criteria
- AC-8.1: An email will be sent notifying the QA and receiver, as well as an alert on the app
#### Traces to
OBJ-03
#### Priority
Must

---

### R-09

#### Requirement
If no readings arrive for 2 hours the receiver and QA will be alerted once until readings resume
#### Acceptance criteria
- AC-9.1: Given that a shipment is in transit, when it reaches the 120 minute mark of no readings an alert will be triggered to the receiver and QA
- AC-9.2: Additional elapsed time over 2 hours will not duplicate alerts
#### Traces to
OBJ-03
#### Priority
Must

---

### R-10

#### Requirement
The receiver measures the temperature on arrival, if shipment is flagged with an excursion or arrives outside 2-8C it goes to quarantine, otherwise it will be awaiting acceptance from the receiver
#### Acceptance criteria
- AC-10.1: A shipment arriving at 1C with no excursion flag will be moved to quarantine
- AC-10.2: A shipment arriving at 3C with no excursion flag will be awaiting acceptance
- AC-10.3: A shipment arriving at 3C with the excursion flag will be moved to quarantine
#### Traces to
OBJ-02
#### Priority
Must

---

### R-11

#### Requirement
The receiver accepts a delivered shipment without excursion into stock
#### Acceptance criteria
- AC-11.1: The receiver cannot accept a shipment moved to quarantine
- AC-11.2: A quarantined shipment being accepted will throw an error
#### Traces to
OBJ-02
#### Priority
Must

---

### R-12

#### Requirement
A QA releases a quarantined shipment with a stability reference, or discards it with a reason
#### Acceptance criteria
- AC-12.1: A shipment cannot be released without a stability reference
- AC-12.2: A shipment cannot be discarded without a reason
- AC-12.3: Shipments released or discarded successfully will show the user the respective messages
#### Traces to
OBJ-02
#### Priority
Must

---

### R-13

#### Requirement
Staff view the temperature history of a shipment with its minimum and maximum
#### Acceptance criteria
- AC-13.1: Admin, dispatcher, receiver, and QA assigned to the receiving site of the shipment can see the temperature history, any unauthorized staff will be rejected with 403 status
- AC-13.2: All staff can see the minimum and maximum temperatures recorded
#### Traces to
OBJ-04
#### Priority
Must

---

### R-14

#### Requirement
QA registers loggers with their device key and calibration date
#### Acceptance criteria
- AC-14.1: QA gets a logger successfully registered message upon success
- AC-14.2: A logger cannot be created without the required fields : key, calibration_date
- AC-14.3: A device key cannot be already registered and the calibration date cannot already be expired
#### Traces to
None
#### Priority
Must

---

### R-15

#### Requirement
A shipment in transit 2 hours after its expected arrival raises one alert
#### Acceptance criteria
- AC-15.1: When a shipment in transit sends a log post 115 minutes after its expected delivery it does not raise an alert
- AC-15.2: When a shipment in transit sends a log post 120 minutes after its expected delivery it raises an alert
- AC-15.3: Additional time elapsed after the alert does not  trigger more alerts
#### Traces to
OBJ-03
#### Priority
Should

---

### R-16

#### Requirement
QA views shipment per state and the share of completed shipments with an excursion
#### Acceptance criteria
- AC-16.1: QA can see all shipments related to their site
- AC-16.2: Shipments can be filtered by state
- AC-16.3: QA can see shipments completed that are flagged with an excursion
#### Traces to
OBJ-04
#### Priority
Must

---

### R-17

#### Requirement
Receivers see shipments in transit or awaiting action at their site
#### Acceptance criteria
- AC-17.1: Receivers have a shipments page where all shipments are listed
- AC-17.2: Receivers can filter shipments to see those in transit or awaiting
#### Traces to
None
#### Priority
Should

---

### R-18

#### Requirement
Duplicate readings are ignored and late readings are accepted in time order
#### Acceptance criteria
- AC-18.1: When more than one reading with a timestamp difference of less than 5 minutes the first will be used and others discarded
- AC-18.2: A late reading arrives 20 mins after its supposed arrival will be accepted
#### Traces to
None
#### Priority
Should

---

### R-19

#### Requirement
Admins view an audit log of shipments, excursions, receipts, and QA actions
#### Acceptance criteria
- AC-19.1: Admins have pages that correspond to the audit logs mentioned, where they can monitor actions and information
#### Traces to
None
#### Priority
Should

---

### NFR-01

#### Requirement
The system serves 500 loggers every 5 minutes with 95% of requests handled under 500ms
#### Acceptance criteria
- AC-20.1: Under 500 requests every 5 minutes the system must serve 95% of requests under 500ms and have zero dropped requests, tested via a load simulation script
#### Category
Performance
#### Priority
Should

---

### NFR-02

#### Requirement
Availability of at least 99.9% around the clock, requests sent during an outage are accepted later in order
#### Acceptance criteria
- AC-21.1: The backend API container automatically recovers using docker restart policies with a max of 30 seconds
- AC-21.2: External ping checks to /healthz show no more than 10 minutes of downtime during multi-week tests
- AC-21.3: Database state integrity is preserved through restarts using volume persistence
#### Category
Availability
#### Priority
Should

---

### NFR-03

#### Requirement
All traffic uses HTTPS, staff use single sign-on only, each logger has its own unique key, and RBAC on every endpoint
#### Acceptance criteria
- AC-22.1: Only port 443 will accept requests, while port 80 remains unused
- AC-22.2: Sign in uses Keycloak (simulated) and all users have a role
- AC-22.3: Duplicate keys cannot co-exist, and keys are used to verify logger
- AC-22.4: 'Require' headers on all endpoints enforce roles before data access
#### Category
Security
#### Priority
Must

---

### NFR-04

#### Requirement
No critical findings against the OWASP top 10 checklist at release
#### Acceptance criteria
- AC-23.1: Checklist is verified before release during each sprint, and release shows checklist report
#### Category
Security
#### Priority
Must

---

### NFR-05

#### Requirement
No patient data is stored, staff data is limited to name, email, role, and site, temperature records are kept for 5 years of insertion time
#### Acceptance criteria
- AC-24.1: Database schema and API model do not account for a patient as an entity
- AC-24.2: Database schema and API model do not require fields other than name, email, role, and site
- AC-24.3: Background jobs take out records older than 5 years while others are untouched
#### Category
Privacy
#### Priority
Should

---

### NFR-06

#### Requirement
The user interface meets WCAG 2.1 level AA
#### Acceptance criteria
- AC-25.1: The front-end matches a checklist regarding the accessiblity of WCAG 2.1 level AA
#### Category
Accessibility
#### Priority
Should

---

### NFR-07

#### Requirement
Works on the current versions of Chrome, Firefox, Safari, and Edge, and on phones from 360px and up
#### Acceptance criteria
- AC-26.1: App is tested before release on each browser, and responsiveness is tested using dev tools
#### Category
Portability
#### Priority
Should

---

### NFR-08

#### Requirement
At least 70% statement coverage by automated unit tests on the back-end
#### Acceptance criteria
- AC-27.1: Test reports have to accumulate a minimum of 70% of coverage across the back-end
#### Category
Maintainability
#### Priority
Should

---

### NFR-09

#### Requirement
Database backups every 6 hours, restore tested at least once before going production
#### Acceptance criteria
- AC-28.1: Cron jobs backup database records into persistent storage every 6 hours
- AC-28.2: Restore script tested before release
#### Category
Recoverability
#### Priority
Should

---

### NFR-10

#### Requirement
The system is deployable with one command or one pipeline run from the repository
#### Acceptance criteria
- AC-29.1: Pushes or pull requests into main trigger github actions to test and deploy the application
#### Category
Deployability
#### Priority
Should

## Work breakdown structure (WBS)

We have decided to use the list format of the WBS due to the limited readability of the diagram format

1. **ColdChain**   
    - 1.1 **Part 1**   
        - 1.1.1 Project management plan   
            - 1.1.1.1 Project charter and business case
            - 1.1.1.2 Introduction and project overview
            - 1.1.1.3 Development approach and life cycle
            - 1.1.1.4 Project organization and governance
            - 1.1.1.5 Scope and requirements management plan
            - 1.1.1.6 Architecture and design description
            - 1.1.1.7 Schedule management plan
            - 1.1.1.8 Cost management plan
            - 1.1.1.9 Resource management plan
            - 1.1.1.10 Stakeholder engagement and communications plan
            - 1.1.1.11 Risk management plan
            - 1.1.1.12 Quality management plan
            - 1.1.1.13 Security and privacy plan
            - 1.1.1.14 Sourcing and tooling plan
            - 1.1.1.15 Configuration management plan
            - 1.1.1.16 Construction plan
            - 1.1.1.17 Test plan
        - 1.1.2 Design documents
            - 1.1.2.1 Context and container diagram
            - 1.1.2.2 Deployment diagram
            - 1.1.2.3 Entity-Relationship diagram
            - 1.1.2.4 Sequence diagrams
            - 1.1.2.5 REST API outline
            - 1.1.2.6 Wireframes for the main screens
    - 1.2 Part 2
        - 1.2.1 Project management plan
            - 1.2.1.1 Implementation and deployment plan
            - 1.2.1.2 Support and operations plan
            - 1.2.1.3 Maintenance plan
            - 1.2.1.4 Monitoring, Control, and Closure
		- 1.2.2 Sprint 1
			- 1.2.2.1 Sign in
				- Set up Keycloak test realm
				- Wire back-end endpoint
				- Front-end page
			- 1.2.2.2 Logger registry
				- Back-end endpoint to create logger
				- Front-end page
			- 1.2.2.3 Shipments and dispatch
				- Create, send, and view shipments endpoints
				- Front-end create, send, and view shipments pages
			- 1.2.2.4 Device readings
				- Device API simulator script
				- Back-end endpoint to accept post readings from loggers
		- 1.2.3 Sprint 2
			- 1.2.3.1 Excursion detection
				- Set up logic for excursion detection from readings
			- 1.2.3.2 Alert system
				- Set up front-end page for alerts
				- Set up triggers on excursion to send emails
			- 1.2.3.3 Receipt and acceptance
				- Set up front-end page for received shipments
				- Set up back-end endpoints and logic for receipt and acceptance
			- 1.2.3.4 Quarantine and QA decisions
				- Set up endpoints for accepting or sending shipment to quarantine
				- Set up front-end acceptance and quarantine page
		- 1.2.4 Sprint 3
			- 1.2.4.1 Lost signal and late alerts
				- Set up logic for lost and late shipments
				- Trigger alerts and emails on lost and late alerts
			- 1.2.4.2 Temperature charts
				- Set up front-end graphs for shipment temperature
			- 1.2.4.3 Dashboard
				- Set up audit endpoints for admin
				- Set up front-end page for audit
			- 1.2.4.4 Deployment
				- Deploy to college vm

## Traceability matrix

|Req ID|Category       |Requirement Description                                                      |Traces to     |WBS Work Package                                   |Acceptance Criteria               |Priority|
|------|---------------|-----------------------------------------------------------------------------|--------------|---------------------------------------------------|----------------------------------|--------|
|R-01  |Functional     |Staff sign in via simulated OpenID Connect with role & site assignment       |OBJ-01        |1.2.2.1 Sign in                                    |AC-1.1, AC-1.2                    |Must    |
|R-02  |Functional     |Dispatcher shipment creation with required fields & logger validation        |OBJ-01        |1.2.2.3 Shipments and dispatch                     |AC-2.1, AC-2.2                    |Must    |
|R-03  |Functional     |Logger validity rules (calibrated within 12 months, not on active shipment)     |OBJ-01        |1.2.2.2 Logger registry                            |AC-3.1                            |Must    |
|R-04  |Functional     |Dispatcher shipment dispatch notification to receiving site                  |OBJ-01        |1.2.2.3 Shipments and dispatch                     |AC-4.1, AC-4.2                    |Must    |
|R-05  |Functional     |Restrict telemetry ingestion to active in-transit shipments                  |OBJ-01        |1.2.2.4 Device readings                            |AC-5.1                            |Must    |
|R-06  |Functional     |Logger POST authentication via unique device keys                            |OBJ-05        |1.2.2.4 Device readings                            |AC-6.1                            |Must    |
|R-07  |Functional     |Temperature excursion logic (< 0°C immediate, or > 30 mins outside 2–8°C)    |OBJ-03        |1.2.3.1 Excursion detection                        |AC-7.1, AC-7.2, AC-7.3, AC-7.4    |Must    |
|R-08  |Functional     |Single excursion notification dispatch to QA and Receiver                    |OBJ-03        |1.2.3.2 Alert system                               |AC-8.1                            |Must    |
|R-09  |Functional     |Lost signal alert triggered after 2 hours of missing readings                |OBJ-03        |1.2.4.1 Lost signal and late alerts                |AC-9.1, AC-9.2                    |Must    |
|R-10  |Functional     |Receiver arrival temperature check & quarantine routing logic                |OBJ-02        |1.2.3.3 Receipt and acceptance / 1.2.3.4 Quarantine|AC-10.1, AC-10.2, AC-10.3         |Must    |
|R-11  |Functional     |Stock acceptance restriction preventing direct receipt of quarantined items  |OBJ-02        |1.2.3.3 Receipt and acceptance                     |AC-11.1, AC-11.2                  |Must    |
|R-12  |Functional     |QA release (with stability ref) or discard (with reason) of quarantined stock|OBJ-02        |1.2.3.4 Quarantine and QA decisions                |AC-12.1, AC-12.2, AC-12.3         |Must    |
|R-13  |Functional     |Shipment temperature history visualization with Min/Max telemetry            |OBJ-04        |1.2.4.2 Temperature charts                         |AC-13.1, AC-13.2                  |Must    |
|R-14  |Functional     |QA device registration with unique keys and calibration timestamps           |None        |1.2.2.2 Logger registry                            |AC-14.1, AC-14.2, AC-14.3         |Must    |
|R-15  |Functional     |Late delivery alert triggered 2 hours past expected arrival time             |OBJ-03        |1.2.4.1 Lost signal and late alerts                |AC-15.1, AC-15.2, AC-15.3         |Should  |
|R-16  |Functional     |QA dashboard reporting on shipment states & excursion share metrics          |OBJ-04        |1.2.4.3 Dashboard                                  |AC-16.1, AC-16.2, AC-16.3         |Must    |
|R-17  |Functional     |Receiver dashboard filtering for in-transit & pending site shipments         |None        |1.2.4.3 Dashboard                                  |AC-17.1, AC-17.2                  |Should  |
|R-18  |Functional     |Telemetry deduplication & out-of-order chronological ingestion               |None        |1.2.2.4 Device readings                            |AC-18.1, AC-18.2                  |Should  |
|R-19  |Functional     |Administrative audit log views for system actions & compliance events        |None        |1.2.4.3 Dashboard                                  |AC-19.1                           |Should  |
|NFR-01|Performance    |Ingest 500 logger posts/5 mins with 95% latency < 500 ms                     |OBJ-01, OBJ-05|1.2.2.4 Device readings                            |AC-20.1                           |Should  |
|NFR-02|Availability   |99.9% availability with automated Docker restart & health checks             |OBJ-04        |1.2.4.4 Deployment                                 |AC-21.1, AC-21.2, AC-21.3         |Should  |
|NFR-03|Security       |HTTPS enforcement, Keycloak SSO, unique logger keys, & endpoint RBAC         |OBJ-05        |1.2.2.1 Sign in                                    |AC-22.1, AC-22.2, AC-22.3, AC-22.4|Must  |
|NFR-04|Security       |Zero critical OWASP Top 10 vulnerabilities prior to release                  |OBJ-05        |1.2.1.4 Monitoring, Control & Closure              |AC-23.1                           |Must  |
|NFR-05|Privacy        |No patient data storage, minimal staff fields, & 5-year log retention        |OBJ-04        |1.2.1.1 Implementation & deployment plan           |AC-24.1, AC-24.2, AC-24.3         |Should  |
|NFR-06|Accessibility  |UI compliance with WCAG 2.1 Level AA standards                               |OBJ-04        |1.2.4.3 Dashboard                                  |AC-25.1                           |Should  |
|NFR-07|Portability    |Cross-browser support & responsive layout for screens ≥ 360px                |OBJ-04        |1.2.4.3 Dashboard                                  |AC-26.1                           |Should  |
|NFR-08|Maintainability|Minimum 70% backend unit test code coverage                                  |OBJ-04        |1.2.1.4 Monitoring, Control & Closure              |AC-27.1                           |Should  |
|NFR-09|Recoverability |Automated 6-hour database backups & verified pre-release restore drill       |OBJ-04        |1.2.4.4 Deployment                                 |AC-28.1, AC-28.2                  |Should  |
|NFR-10|Deployability  |Single-command automated CI/CD pipeline deployment via GitHub Actions        |OBJ-04        |1.2.4.4 Deployment                                 |AC-29.1                           |Should  |

## Change control procedure

Any adjustments, additions, or removal of any requirement will go through the Change Control Board (CCB).   

Technical details are first discussed with the software architect, who will then admit the change and present the tradeoffs to the project manager and business analyst.   

The project manager and business analyst then discuss the impact of the change on schedule, budget, costs, and risks, and the project manager will make the final decision of incorporating the change into the plan.