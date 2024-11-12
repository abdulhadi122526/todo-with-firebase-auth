import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCt6ga54c1aKfNG2EkpWtk-O85ICaNxDm0",
  authDomain: "todo-app-85498.firebaseapp.com",
  projectId: "todo-app-85498",
  storageBucket: "todo-app-85498.firebasestorage.app",
  messagingSenderId: "955610978097",
  appId: "1:955610978097:web:8b596d3de539b431a78210",
  measurementId: "G-Z2MT1TXYKP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
