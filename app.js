
            //password verification 
            var myInput = document.getElementById("psw");
            var letter = document.getElementById("letter");
            var capital = document.getElementById("capital");
            var number = document.getElementById("number");
            var length = document.getElementById("length");
          //when password field is selected
            myInput.onfocus = function() {
              document.getElementById("message").style.display = "block";
            }
          //exits password field
            myInput.onblur = function() {
              document.getElementById("message").style.display = "none";
            }
          //Typing in the password field
            myInput.onkeyup = function() {
              //validate lowercase letters
              var lowerCaseLetters = /[a-z]/g;
              if(myInput.value.match(lowerCaseLetters)){
                  letter.classList.remove("invalid");
                  letter.classList.add("valid");
              }
              else {
                  letter.classList.remove("valid");
                  letter.classList.add("invalid");
              }
              //validate capital letters
              var upperCaseLetters = /[A-Z]/g;
              if(myInput.value.match(upperCaseLetters)){
                  capital.classList.remove("invalid");
                  capital.classList.add("valid");
              }
              else{
                  capital.classList.remove("valid");
                  capital.classList.add("invalid");
              }
              //validate numbers
              var numbers = /[0-9]/g;
              if(myInput.value.match(numbers)){
                  number.classList.remove("invalid");
                  number.classList.add("valid");
              }
              else{
                  number.classList.remove("valid");
                  number.classList.add("invalid");
              }
              //validate length
              if(myInput.value.length >= 8) {
                  length.classList.remove("invalid");
                  length.classList.add("valid");
              }
              else{
                  length.classList.remove("valid");
                  length.classList.add("invalid");
              }
            }
            //open and close the navigation side panel 
            function openNav() {
                document.getElementById("mySidePanel").style.width = "250px";
            }
            function closeNav() {
                document.getElementById("mySidePanel").style.width = "0px" ;
            }

//get profile info
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}
//sign out
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function(){
        console.log('User signed out.');
    });
}
//log in 
function onSuccess(googleUser) {
    console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
}
function onFailure(error){
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope' : 'profile email',
        'width' : 240,
        'height' : 50,
        'longtitle' : true,
        'theme' : 'dark',
        'onsuccess' : onSuccess,
        'onfailure' : onFailure
    });
}
document.addEventListener("DOMContentLoaded", function () {
    // Add the 'fade-out' class after a delay (e.g., 3 seconds)
    setTimeout(function () {
        document.getElementById("overlay").classList.add("fade-out");
    }, .3); // Adjust the delay as needed
});
//handles the form 
document.getElementById("submitButton").addEventListener("click", function() {
    // Get form values
    var firstName = document.getElementById("task-input").value;
    var lastName = document.getElementById("taskOwner").value;
    var email = document.getElementById("taskReciever").value;
    var projectDetails = document.getElementById("projDeets").value;

    // Display the form data
    var resultDiv = document.getElementById("displayResult");
    resultDiv.innerHTML = "<h2>Form Data:</h2>" +
                          "<p><strong>First Name:</strong> " + firstName + "</p>" +
                          "<p><strong>Last Name:</strong> " + lastName + "</p>" +
                          "<p><strong>Email:</strong> " + email + "</p>" +
                          "<p><strong>Message:</strong> " + projectDetails + "</p>";





});
