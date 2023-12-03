document.getElementById("submitButton").addEventListener("click", function() {
    // Get form values
    var firstName = document.getElementById("task-input").value;
    var lastName = document.getElementById("taskOwner").value;
    var email = document.getElementById("taskReciever").value;
    var projectDetails = document.getElementById("projDeets").value;

    // Display the form data
    var resultDiv = document.getElementById("displayResult");
    resultDiv.innerHTML = "<h2><strong> "+ firstName +"</strong></h2>" +
                          "<p><strong>Last Name:</strong> " + lastName + "</p>" +
                          "<p><strong>Email:</strong> " + email + "</p>" +
                          "<p><strong>Message:</strong> " + projectDetails + "</p>";





});

