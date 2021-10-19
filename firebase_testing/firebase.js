// Import the functions you need from the SDKs you need
console.log("Testing HTML source");
import { initializeApp } from "/Projects/SolarCheck/Calculator/SolarCalc/node_modules/firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, onAuthStateChanged } from "/Projects/SolarCheck/Calculator/SolarCalc/node_modules/firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyACXaGz924A_cyyHomflKNYUJjVMMn4occ",
  authDomain: "form-ac910.firebaseapp.com",
  projectId: "form-ac910",
  storageBucket: "form-ac910.appspot.com",
  messagingSenderId: "862891148277",
  appId: "1:862891148277:web:f041b160bfb20d4eea96bc"
});
const auth = getAuth(firebaseApp);

// Detect Auth state
onAuthStateChanged(auth, user => {
    if (user !== null) {
        console.log("Logged in.");
    } else {
        console.log("No user.");
    }
});

