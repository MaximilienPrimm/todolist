// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAvOsy2be3z2c_N7kvIvB4wZYpLtLPPK8",
  authDomain: "todolist-29190.firebaseapp.com",
  projectId: "todolist-29190",
  storageBucket: "todolist-29190.appspot.com",
  messagingSenderId: "191025731011",
  appId: "1:191025731011:web:4f287c4073e97ce0399976",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
