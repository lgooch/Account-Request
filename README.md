# Account Request Form
This form is designed to be used by Human Resources to submit Starters, Movers or Leavers requests to the IT team.

## Dependancies
* AWS Lambda function to be used with scripts/Lambda.js
* AWS API Gateway to call Lambda function

The API is used for the form to email setup.

## How to use
1) Edit the Department dropdown within index.html with a list of your companies departments
2) Edit the Location dropdown within index.html with a list of your companies offices
3) Create an AWS API to call the Lambda function and add the API URL to scripts/SubmitForm.js
4) Set up AWS SES which will be used to send the email to your IT team
5) Update Lambda.js with the From and To email addresses

## Contributing
You are encouraged to contribute to this project
