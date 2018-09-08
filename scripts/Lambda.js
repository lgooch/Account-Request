var AWS = require('aws-sdk')
var ses = new AWS.SES()

var RECEIVER = 'changeme@email.com'
var SENDER = 'changeme@email.com'

exports.handler = function (event, context) {
    console.log('Received event:', event)
    sendEmail(event, function (err, data) {
        context.done(err, null)
    })
}

function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Type: ' + event.RequestType + '\nFirst Name: ' + event.FirstName + '\nLast Name: ' + event.LastName + '\nJob Title: ' + event.JobTitle + '\nLine Manager: ' + event.LineManager + '\nDepartment: ' + event.Department + '\nLocation: ' + event.Location + '\nPersonal Email: ' + event.PersonalEmail + '\nDate: ' + event.Date + '\nEmail: ' + event.Email + '\nLaptop: ' + event.Laptop + '\nMobile: ' + event.Mobile + '\nSubmitted By: ' + event.SubmittedBy + '\nAdditional Comments: ' + event.AdditionalComments,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: event.RequestType + ': ' + event.FirstName + ' ' + event.LastName,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    }
    ses.sendEmail(params, done)
}
