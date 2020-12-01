This repository contains sample coding test files.

Here you will find basic usage & details about this project.

Project Details:
- Tests are written in TestCafe using TypeScript.
- Use a page object pattern so pages & test cases are kept separate.
- Use minimist for passing basic configuration details (config.ts) like base appUrl, username, password, environment details which we can override it at runtime using CLI.
- For Login, TestCafe User Role function is used. This can be helpful when we need to test with multiple user & need to switch user.
- For common functions, helper-functions.ts is where we can put our all common functions.
- TestCafe configuration details are provided in the .testcaferc.json.

Installation
- Download this repository.
- Go to the project's root directory:    
   `cd test-cafe-sample-project`
- Install the dependencies:
    `npm install`

Run
- Go to the project's root directory:    
   `cd test-cafe-sample-project`
- To run on chrome browser:
    `npm run e2e:chrome`
- To run on chrome headless browser:
    `npm run e2e:chrome-headless`
- To run on firefox browser:
    `npm run e2e:firefox`
- To run on safari browser:
    `npm run e2e:safari`
- If you run `npm run e2e` then it will fetch browser details from .testcaferc.json.

Report:
- After completion of test execution, it will generate HTML report in the /output/reports folder with file name report.html.
- If any test is failing then it will capture screenshot of the it and it will be found under /output/screenshots/failedTestImages folder with timestamp.

Limitation:
- If you run test in the headless mode and if test is failing then it won't capture screenshot. 
        
        
           
    
     
