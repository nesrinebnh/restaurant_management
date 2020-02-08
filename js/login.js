
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var user = firebase.auth().currentUser;
    //window.location.href = 'index.html';

    
    if (user != null) {
      console.log(user.email);
      window.location.href = 'home.html';
    }

    //window.alert(user.email_input);
    //window.location.href = 'acceuil.html';
  } else {
    
    // No user is signed in.
    //console.log(user.email);
  }
});

function login(){
  console.log("start");
  var userEmail = document.getElementById("email_input").value;
  var userPass = document.getElementById("password_input").value;
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}