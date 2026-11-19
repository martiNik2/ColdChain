# PMP 16: Test plan, Author: Anas, Mohammad

## Test levels

1. Unit tests: Tests that check specific methods or business logic
2. Integration tests: Tests that check a wider range than unit tests by incorporating the database, the API, and the external services
3. End-to-end test: Tests that go through the whole stack to mimic the user experience, going through the frontend all the way to the api and database
4. Acceptance tests: Tests that are specific to one requirement, and they check the requirement-specific behaviour for errors
5. Performance tests: Tests that send a large amount of requests to the API to test availability
6. Security tests: Tests that target potential vulnerabilities to check for possible attack vectors

## Test techniques

1. Boundary value analysis (BVA): This method tests values around the edge cases of the logic, such as readings 0.1C and 7.9C
2. Equivalence partitioning: Grouping valid in-range values together such as high excursions >8C, mid-range 2-8C, and low excursions <2C
3. Injection testing: Testing requests with invalid JWTs, duplicate timestamps, irregular time windows, and out-of-order readings
4. OWASP ZAP test for security, which will target the top 10 list of common threats

## Test environments

- Local testing: Automated tests using pytest for the backend and vitest and react testing library for frontend
- Deployment testing: Automated test run on merges or pushes that test the whole suite of containers

## Entry and exit criteria

Entry criteria:

1. Code compiles and no lint errors are present
2. The required tests are written and ready
3. The environment (Database or external services) are available and running

Exit criteria:

1. 100% of test cases pass
2. No high severity problems or vulnerabilities remain
3. Automated unit test coverage is above 70%

## Test cases

| Test case 	| Requirement 	|                                                                      Scenario                                                                     	|                                                           Expected result                                                           	|
|:---------:	|:-----------:	|:-------------------------------------------------------------------------------------------------------------------------------------------------:	|:-----------------------------------------------------------------------------------------------------------------------------------:	|
|    TC-1   	|     R-01    	|                                               A user tries to sign in with their correct credentials                                              	|                               The data is accepted and the user is redirected to their respective page                              	|
|    TC-2   	|     R-01    	|                                               A user tries to sign in with invalid login credentials                                              	|              The data is rejected, a 401 unauthorized status code is returned, and the user gets a clear error message              	|
|    TC-3   	|     R-02    	|                              A dispatcher fills the shipment creation form  with incorrect data or an invalid logger                              	|                         No requests are sent and the form is rejected and the user gets a descriptive error                         	|
|    TC-4   	|     R-02    	|                           A dispatcher fills the shipment creation form with valid data, and sends the form for creation                          	|                            A 201 created status code is returned and the user is informed of the success                            	|
|    TC-5   	|     R-03    	|                                 A dispatcher sends a shipment creation form with a logger calibrated 12 months ago                                	|                            The shipment is created successfully and the dispatcher gets a success message                           	|
|    TC-6   	|     R-03    	|           A dispatcher sends a shipment creation form with a logger calibrated 13 months ago or a logger thats live on another shipment           	|                        The logger is rejected and the dispatcher is informed of the reason with a clear error                       	|
|    TC-7   	|     R-04    	|                                               A dispatcher sends the shipment to the receiving site                                               	| A success message is sent to the dispatcher, the shipment is marked as in-transit, and an email is sent to the receiving pharmacist 	|
|    TC-8   	|     R-05    	|                                                 A logger that is in-transit sends a POST /readings                                                	|                                         The request is accepted and stored in  the database                                         	|
|    TC-9   	|     R-05    	|                                               A logger that is not in-transit sends a POST /readings                                              	|                                      The request is rejected and no data is taken into account                                      	|
|   TC-10   	|     R-06    	|                                                    A logger sends a request with its valid key                                                    	|                                The request is accepted and the readings are taken into consideration                                	|
|   TC-11   	|     R-06    	|                                      A logger sends a request with no key, a duplicate key, or an invalid key                                     	|                                  The requests is rejected and no data is  taken into consideration                                  	|
|   TC-12   	|     R-07    	|                                                  A reading in the inclusive range of 2-8C arrives                                                 	|                         The reading is treated as a normal reading and is not included in excursion duration                        	|
|   TC-13   	|     R-07    	|                          A reading at 0C or below, or more than 30 minutes of  readings outside the range of 2-8C arrive                          	|                                            The shipment is marked with an excursion flag                                            	|
|   TC-14   	|     R-08    	|                                                       A shipment is marked with an excursion                                                      	|                       An alert and an email are sent to the QA and  receiving pharmacist of the receiving site                      	|
|   TC-15   	|     R-09    	|                                            A shipment in-transit does not send readings for 120 minutes                                           	|                                              One alert is sent to the QA and pharmacist                                             	|
|   TC-16   	|     R-10    	|                  A shipment arrives at a site, and the measured temperature by the receiver is inside the inclusive range of 2-8C                 	|                                The shipment is not sent to quarantine and will be awaiting acceptance                               	|
|   TC-17   	|     R-10    	| A shipment arrives at a site with the measured temperature by the receiver being outside the inclusive range of 2-8C, or marked with an excursion 	|                           The shipment is moved to quarantine and will be awaiting to be reviewed by a QA                           	|
|   TC-18   	|     R-11    	|                                                         A receiver accepts a safe shipment                                                        	|                          The shipment is sent to stock and the receiver is informed with a success message                          	|
|   TC-19   	|     R-12    	|                                 A QA releases a shipment with a stability reference, or discards it with a reason                                 	|                                         The shipment state is updated and the QA is informed                                        	|
|   TC-20   	|     R-13    	|                           Staff assigned to the site view the temperature  history, maximum, and minimum of the shipment                          	|                               The temperature chart and maximum and minimum of the shipment are shown                               	|
|   TC-21   	|     R-13    	|                                 Staff of unrelated sites or unauthorized personnel try to access the shipment data                                	|                                             Unauthorized users receive a 401 status code                                            	|
|   TC-22   	|     R-14    	|                                                       QA registers a logger with valid data                                                       	|                                             The logger is created and the QA is informed                                            	|
|   TC-23   	|     R-14    	|                  QA tries to register a logger with a duplicate or invalid key or a last calibration date of  more than 12 months                 	|                                  The data is rejected and the user is informed of the invalid input                                 	|
|   TC-24   	|     R-15    	|                                A shipment that is still in-transit 119 minutes  or less after its expected arrival                                	|                                               No problems occur and no alerts are sent                                              	|
|   TC-25   	|     R-15    	|                                 A shipment that is still in-transit 120 minutes or more after its expected arrival                                	|                                              One alert is raised to the receiving site                                              	|
|   TC-26   	|     R-16    	|                                       QA views shipments by state and the share of shipments with excursions                                      	|                          Shipments are grouped by state and the percentage of safe shipments are both shown                         	|
|   TC-27   	|     R-17    	|                                    Receivers see shipments in-transit or awaiting action related to their site                                    	|                                             Shipments and their states are shown clearly                                            	|
|   TC-28   	|     R-18    	|                                      A logger sends 2 readings with a time difference of less than 5 minutes                                      	|                              the later reading is discarded and the first reading is taken into account                             	|
|   TC-29   	|     R-18    	|                                           A logger sends a reading 20 minute after its supposed arrival                                           	|                                          The reading is accepted and is taken into account                                          	|
|   TC-30   	|     R-19    	|                                                       Admins view the audit log of all staff                                                      	|                           Shipments, staff, readings, and loggers are  all shown to administrators clearly                          	|
|   TC-31   	|    NFR-01   	|                                              500 loggers send requests to the server every 5 minutes                                              	|                                 95% of requests are handled under 500ms, and 0 requests are dropped                                 	|
|   TC-32   	|    NFR-02   	|                                                    The API container is killed or stops running                                                   	|                               The container is restarted within 30 seconds and will be up and running                               	|
|   TC-33   	|    NFR-03   	|                                                     Users try to access the website using http                                                    	|                                             Requests are rejected or forwarded to https                                             	|
|   TC-34   	|    NFR-04   	|                                                          OWASP ZAP test is run on the app                                                         	|                                               Zero high severity vulnerabilities found                                              	|
|   TC-35   	|    NFR-09   	|                                                     Database is killed or volumes are deleted                                                     	|                                           Restore script brings last backup into recovery                                           	|