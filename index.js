// script.js - Student Feedback Form

function submitForm() {

  // Get values from form
  var name     = document.getElementById("name").value;
  var usn      = document.getElementById("usn").value;
  var email    = document.getElementById("email").value;
  var semester = document.getElementById("semester").value;
  var course   = document.getElementById("course").value;
  var liked    = document.getElementById("liked").value;
  var improve  = document.getElementById("improve").value;

  // Get selected radio button
  var difficulty = "";
  var radios = document.getElementsByName("difficulty");
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      difficulty = radios[i].value;
    }
  }

  // Check if all fields are filled
  if (name == "") {
    alert("Please enter your name.");
    return;
  }

  if (usn == "") {
    alert("Please enter your USN.");
    return;
  }

  if (email == "") {
    alert("Please enter your email.");
    return;
  }

  if (semester == "") {
    alert("Please select your semester.");
    return;
  }

  if (course == "") {
    alert("Please enter the course name.");
    return;
  }

  if (difficulty == "") {

    alert("Please select course difficulty.");
    return;
  }

  if (liked == "") {
    alert("Please write what you liked.");
    return;
  }

  if (improve == "") {
    alert("Please write what should be improved.");
    return;
  }

  // If all fields are filled, show success message
  document.getElementById("msg").innerText = "Thank you, " + name + "! Your feedback has been submitted.";

  // Clear the form
  document.getElementById("myForm").reset();

  // Reset range display values
  document.getElementById("q-val").innerText = "5";
  document.getElementById("t-val").innerText = "5";
  document.getElementById("m-val").innerText = "5";
