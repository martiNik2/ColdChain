# PMP 10: Risk management plan, Author: Anas

## Method

The team will use the risk register to showcase and explain the potential risks the project might face, 
and it will be reviewed and assessed during sprint planning and sprint retrospective every two weeks, 
assigning every risk a probability and impact to assess how dangerous they are, and an EMV column to show
how much they would cost in contingency reserves in hours * notional rate.

## Risk register

### Scoring reference

| Score 	| Probability 	| Impact(Hours) 	|
|:-----:	|:-----------:	|:-------------------:	|
|   1   	|     <15%    	|          4          	|
|   2   	|     25%     	|          10          	|
|   3   	|     50%     	|          24          	|
|   4   	|     70%     	|          40          	|
|   5   	|     >90%    	|          >60         	|

### Risks

| Risk ID 	|                                       Risk                                       	|                             Trigger                             	| P 	| I 	| PxI 	|                                                           Response                                                           	|                         Owner                         	| EMV(Hours) 	|
|:-------:	|:--------------------------------------------------------------------------------:	|:---------------------------------------------------------------:	|:-:	|:-:	|:---:	|:----------------------------------------------------------------------------------------------------------------------------:	|:-----------------------------------------------------:	|:----------:	|
|   R-01  	|       Excursion logic is wrong for late, duplicate or out-of-order readings      	|           Detection tests on reordered sequences fail           	| 1 	| 2 	|  2  	|                           Mitigate: Compute runs from stored readings in time order; scenario tests                          	|                       Developers                      	|     1.5    	|
|   R-02  	|     An exposed shipment is accepted through a path that bypasses quarantine.     	|        An admin script  or import changes state directly        	| 2 	| 3 	|  6  	|                                     Avoid: Trigger on state change; test every transition                                    	|                       Developers                      	|      6     	|
|   R-03  	|      Alert fatigue: repeated alerts  cause staff to ignore real excursions.      	|            Many alerts per shipment in the simulation           	| 1 	| 1 	|  1  	|                              Mitigate: Alert once per event as required; review wording with QA                              	|                       Developers                      	|     0.6    	|
|   R-04  	|               The simulator does not reflect real logger behavior.               	|       Vendor documentation differs from the simulated API       	| 2 	| 3 	|  6  	|                                   Avoid: Review the interface with the logger vendor early                                   	|             Software architect, Developers            	|      6     	|
|   R-05  	|               An outage loses readings or misses lost-signal alerts              	|             Gaps in stored readings after a restart             	| 4 	| 3 	|  12 	|                                Avoid: Accept buffered readings later in order; monitor the job                               	| Developers, Software architect, quality and test lead 	|    16.8    	|
|   R-06  	|               A stolen or shared device key allows false readings.               	|             Readings from one key for two shipments             	| 1 	| 4 	|  4  	|                                     Avoid: One key per logger; revocation; anomaly checks                                    	|           Quality and test lead, developers           	|      6     	|
|   R-07  	|                  Team is unable to finish  work before deadline                  	|                    Tasks are behind schedule                    	| 3 	| 5 	|  15 	|     Mitigate: Project manager detects work behind  schedule and communicates  with the  team to get the right tasks done     	|                    Project manager                    	|     30     	|
|   R-08  	|      Developers do not have the necessary   skills to construct the project      	| Developers saying they are not comfortable with doing something 	| 3 	| 4 	|  12 	|    Mitigate: A meeting will be in order  for the developers to list  their skills and agree on other skills to be learned    	|                       Developers                      	|     20     	|
|   R-09  	| The amount of work to be done is underestimated  and the team is behind schedule 	|         Team is behind schedule and deadline approaches         	| 2 	| 3 	|  6  	|                    Mitigage: Finish tasks preferably before  schedule, set up meetings if blocking happens                   	|                    Project manager                    	|      6     	|
|   R-10  	|         Scope creep, adding requirements  or tasks that were not in scope        	|                A new requirement or change arises               	| 2 	| 2 	|  4  	|                             Avoid: CCB will be how the team  handles new requirements and changes                            	|                    Project manager                    	|     2.5    	|
|   R-11  	|           Database bottlenecks causing a  deterioration in performance           	|         Logs show high percentage cpu usage during tests        	| 2 	| 4 	|  8  	|              Mitigate: Use advanced database handling like  partitioning and indexing for increased performance              	|                   Software architect                  	|     10     	|
|   R-12  	|             Environment failures on the  university's virtual machine            	|                Errors and warnings on deployment                	| 1 	| 3 	|  3  	|                         Accept: Try to deal with the current  technology and make the most out of it                         	|                     DevOps manager                    	|     3.6    	|
|   R-13  	|        Security and testing are taking  too long to be built and executed        	|               Security and testing behind schedule              	| 4 	| 4 	|  16 	| Mitigate: Write Testing and security plans prior  to construction, and write unit  tests and check security sprint by sprint 	|                 Quality and test lead                 	|     28     	|

## Total EMV cost

The total EMV effort for contingency reserves is **137 hours**, which when mutliplied by the notional hour rate will be equal to **2055 JOD**