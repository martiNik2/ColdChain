# PMP 12. :Security and privacy plan, Author: Hamza

## STRIDE threat model

The following table demonstrates the most common security threats ColdChain might face and how we will deal with them:

|     STRIDE category    	|                                                   Threat                                                   	|                                                             Mitigation and evidence                                                            	|
|:----------------------:	|:----------------------------------------------------------------------------------------------------------:	|:----------------------------------------------------------------------------------------------------------------------------------------------:	|
|        Spoofing        	| Users masquerading as other roles, staff gaining access to other sites, or loggers posing as other loggers 	|   Roles are only set using the OIDC service and are sent in a JWT in  request headers, and loggers send post requests with their unique keys   	|
|        Tampering       	|               Temperature data is altered after being logged, user data is altered externally              	|                           Temperature logs are readonly to all staff, database is only available through the backend                           	|
|       Repudiation      	|            Staff committing actions then disowning them, such as admitting ineffective shipments           	|                                           Audits are made on every action and admins can see all logs                                          	|
| Information disclosure 	|         User data or unnecessary shipment details are exposed, data exposed via a man-in-the-middle        	| TLS encryption with HTTPS, user data includes only name, email, role, and site, only necessary shipment information is shown to the right role 	|
|    Denial of service   	|                           API is overwhelmed with requests such as POST /readings                          	|                                   Rate limiting, limited payload size, and database indexing for fast lookup                                   	|
| Elevation of privilege 	|              Users gain admin privileges and other sites' data, or access other API endpoints              	|    Keycloak handles roles and sites for sign in, no passwords are stored in the database, RBAC ensures endpoints are protected by user roles   	|

## Security control

The following is the list of the OWASP top 10 security measures and how ColdChain will deal with them:

1. **Broken access control**: All endpoints are protected by RBAC, which is enforced by the OIDC sign in using the JWT authorization header

1. **Security misconfiguration**: No default passwords or values will be used, all software will run in docker containers for isolation

1. **Software supply chain failures**: All packages, modules, or external services will be investigated to ensure safety and security, and the most robust versions will be used

1. **Cryptographic failures**: Communication will be through HTTPS using TLS, passwords are not stored in the database

1. **Injection**: User input is validated before use, no direct sql commands without filtering and validation

1. **Insecure design**: Container-based architecture ensures security by isolation, OIDC ensures security by integrity

1. **Authentication failures**: OIDC allows users to sign in securely, passwords are not stored in the database, and json web tokens insure no tampering will happen

1. **Software or data integrity failures**: Pull requests are reviewed and tested, actions are audited and stored

1. **Security logging and alerting failures**: All actions are audited and stored in a table where administrators can see and monitor users

1. **Mishandling of exceptional conditions**: try catch statements make sure the application doesnt crash unexpectedly, logs show detailed errors.

## Data protection

- Essential user data includes name, email, role, and site, and no passwords are stored in the database
- Important information such as API keys or database passwords are only stored in environmental variables or key vaults
- HTTPS protects data while in transit using TLS, while docker volume encryption and strict database access controls protect it at rest
- Temperatures are immutable meaning they cannot be altered once inserted, and are disposed of after 5 years of insertion time

## Security testing

- Authorization and Authentication: Integration tests that check the system for vulnerabilities, such as signing in with wrong credentials or accessing protected endpoints with no clearance

- Input validation and Injection: Tests that send malformed json and injection attempts to check for vulnerabilities

- Dependency and secrets testing: Testing that Packages are audited before use and secrets are never pushed to the repository
