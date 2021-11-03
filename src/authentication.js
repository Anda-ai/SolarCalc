// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import { initializeApp } from "../node_modules/firebase/firebase-app.js";

import { getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
// } from "/node_modules/firebase/firebase-auth.js";
} from "https://www.gstatic.com/firebasejs/9.1.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjrfOjmrqqRV_WhGiCRPsvZ7LNm7DDMyg",
    authDomain: "user-database-3a780.firebaseapp.com",
    databaseURL: "https://user-database-3a780-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "user-database-3a780",
    storageBucket: "user-database-3a780.appspot.com",
    messagingSenderId: "1033124514560",
    appId: "1:1033124514560:web:eb53798d6b3c33c25881e5"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up

const signup = document.getElementById("signup");
signup.addEventListener('click', function() {
    console.log("This EventListener is working.");
    const email = document.getElementById("email").value;
    const password = document.getElementById("pass").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(email);
        console.log(pass.value);
        // ...
        console.log("Created");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(errorCode + errorMessage);
    });
})


// Sign In

const signin = document.getElementById("signin");
signin.addEventListener('click', function() {
    const emailLogin = document.getElementById("email-login").value;
    const passLogin = document.getElementById("pass-login").value;
    signInWithEmailAndPassword(auth, emailLogin, passLogin)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("Signed In");
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage);
    });
})

const db = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
    
    set(ref(db, 'users/' + userId), {
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }