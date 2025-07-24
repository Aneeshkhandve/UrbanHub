
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBBKuj_ADgRNtvx-QtWqAeEF5LLf5dGPL4",
  authDomain: "urbanhub-cbcf5.firebaseapp.com",
  projectId: "urbanhub-cbcf5",
  storageBucket: "urbanhub-cbcf5.firebasestorage.app",
  messagingSenderId: "204703687631",
  appId: "1:204703687631:web:3cb8070609103b18fbe8ba"
};

const app = initializeApp(firebaseConfig);
const fireDb = getFirestore(app);
const auth = getAuth(app)
export {fireDb,auth}