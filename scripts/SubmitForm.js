function submitToAPI() {

var URL = 'API URL HERE'

  var data = {
    RequestType: $('#hireType').val(),
    FirstName: $('#firstName').val(),
    LastName: $('#lastName').val(),
    JobTitle: $('#jobTitle').val(),
    Department: $('#department').val(),
    LineManager: $('#lineManager').val(),
    Location: $('#location').val(),
    PersonalEmail: $('#personalEmail').val(),
    Date: $('#date').val(),
    Email: $('#email').val(),
    Laptop: $('#laptop').val(),
    Mobile: $('#mobile').val(),
    SubmittedBy: $('#submittedBy').val(),
    AdditionalComments: $('#additionalComments').val(),
  }

  $.ajax({
    type: 'POST',
    url: URL,
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function () {
      // clear form and show a success message
        alert('Submitted');
        document.getElementById("contact-form").reset();
        console.log("Submitted")
    },
    error: function () {
      // show an error message
        alert('Failed, please try again')
    }
  })
}
