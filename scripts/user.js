firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    var userID = firebase.auth().currentUser.displayName;
    $("#userID").html(userID);
    $("#login").css("display", "none");
  } else {
    $("#userID").html("Guest");
    $("#logout").css("display", "none");
  }
});

function logout() {
  firebase.auth().signOut()
  console.log("User signed out.")
};