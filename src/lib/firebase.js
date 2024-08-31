
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactmessage-75910.firebaseapp.com",
  projectId: "reactmessage-75910",
  storageBucket: "reactmessage-75910.appspot.com",
  messagingSenderId: "948434384570",
  appId: "1:948434384570:web:7369bec6eed92e83bc7483"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();