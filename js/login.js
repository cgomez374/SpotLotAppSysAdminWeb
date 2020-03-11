firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("admin_login").style.display = "none";
    document.getElementById("admin_logged").style.display = "block";

  } else {
    // No user is signed in.
    document.getElementById("admin_login").style.display = "block";
    document.getElementById("admin_logged").style.display = "none";
  }
});

function login() {

  var email = document.getElementById("email_input").value;
  var pass = document.getElementById("pass_input").value;

  firebase.auth().signInWithEmailAndPassword(email_input, pass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    document.getElementById("errorMessage").value = "*Email or Password Incorrect";
    // ...
  });

}
