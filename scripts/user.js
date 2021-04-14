//Listener if user is logged in or guest. Changes hambuger links/buttons available depending
//on the state.
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

//Logs out the current user from firebase auth.
function logout() {
  firebase.auth().signOut()
};