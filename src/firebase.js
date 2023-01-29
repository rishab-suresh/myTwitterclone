// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ-D019WBUndR8zCHsD1K9d2T440drRmc",
  authDomain: "twitter-clone-684b2.firebaseapp.com",
  projectId: "twitter-clone-684b2",
  storageBucket: "twitter-clone-684b2.appspot.com",
  messagingSenderId: "646162051011",
  appId: "1:646162051011:web:b03179185357aabfa15776",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
