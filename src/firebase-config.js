 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABbXpqn7903YNFK03qP58u1-379RR7NUQ",
  authDomain: "mapesa-3b9d1.firebaseapp.com",
  projectId: "mapesa-3b9d1",
  storageBucket: "mapesa-3b9d1.appspot.com",
  messagingSenderId: "465029660191",
  appId: "1:465029660191:web:8aa8a4800b15a32599df2a",
  // measurementId: "G-FXM9RC254G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

 const auth = getAuth();
  export const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  }
  export const signup = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  }
  export const logout = async (auth) => {
    return await signOut(auth);
  }