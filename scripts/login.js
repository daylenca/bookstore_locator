 // Initialize the FirebaseUI Widget using Firebase.
 var ui = new firebaseui.auth.AuthUI(firebase.auth());
 var uiConfig = {
     callbacks: {
         signInSuccessWithAuthResult: function (authResult, redirectUrl) {
             // User successfully signed in.
             // Redirects user to mail.html.
             //------------------------------------------------------------------------------------------
             // The code below is modified from default snippet provided by the FB documentation.
             //
             // If the user is a "brand new" user, a new user is created in Firestore.
             // This user is assigned with the name and email provided.
             // The Firestore rules are configured to allow the user to write. 
             //------------------------------------------------------------------------------------------
             var user = authResult.user;
             if (authResult.additionalUserInfo.isNewUser) {         //if new user
                 db.collection("users").doc(user.uid).set({         //write to firestore
                         name: user.displayName,                    //"users" collection
                         email: user.email                          //with authenticated user's ID (user.uid)
                     }).then(function () {
                         console.log("New user added to firestore");
                         window.location.assign("main.html");       //re-direct to main.html after signup
                     })
                     .catch(function (error) {
                         console.log("Error adding new user: " + error);
                     });
             } else {
                 return true;
             }
             return false;
         },
         uiShown: function () {
             // The widget is rendered.
             // Hide the loader.
             document.getElementById('loader').style.display = 'none';
         }
     },
     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
     signInFlow: 'popup',
     signInSuccessUrl: 'main.html',
     signInOptions: [
         // Only email authentication is provided at this time
         firebase.auth.EmailAuthProvider.PROVIDER_ID
     ],
     // Terms of service url, not used.
     tosUrl: '<your-tos-url>',
     // Privacy policy url, not used.
     privacyPolicyUrl: '<your-privacy-policy-url>'
 };
 // The start method will wait until the DOM is loaded.
 ui.start('#firebaseui-auth-container', uiConfig);
