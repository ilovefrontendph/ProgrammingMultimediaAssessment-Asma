import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVbLA2t1KVwwq0QCmI4yo-qQ1pzAv_Oso",
  authDomain: "love-5d3f5.firebaseapp.com",
  projectId: "love-5d3f5",
  storageBucket: "love-5d3f5.appspot.com",
  messagingSenderId: "775725047198",
  appId: "1:775725047198:web:fab7739aba22cf7084ca8f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore, app };
