// Firebase configuation details
  var firebaseConfig = {
    apiKey: "AIzaSyAmly4dsny5PxlNnvAuHjwXM5iVE6_psCA",
    authDomain: "bookstore-locator-app.firebaseapp.com",
    projectId: "bookstore-locator-app",
    storageBucket: "bookstore-locator-app.appspot.com",
    messagingSenderId: "782088487532",
    appId: "1:782088487532:web:2f318e52215a2ee7a7ce49",
    measurementId: "G-3RY5SH80LL"
  };
// Initializes Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();