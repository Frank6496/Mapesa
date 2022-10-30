// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiRtsCrYs9bPEfmBr7ebjnO5Ykqihe46g",
  authDomain: "pesa-1f300.firebaseapp.com",
  projectId: "pesa-1f300",
  storageBucket: "pesa-1f300.appspot.com",
  messagingSenderId: "567652284905",
  appId: "1:567652284905:web:2eb786fe22f02f6aa53378",
  measurementId: "G-FS0F65TRMF"
};

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export const db = getFirestore(app);
 
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