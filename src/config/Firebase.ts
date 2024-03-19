import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAggPuV5oK_pHtsy3d-0WsQ-X-4lUmeQmE",
  authDomain: "utak-item-menu-2cb34.firebaseapp.com",
  databaseURL: "https://utak-item-menu-2cb34-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "utak-item-menu-2cb34",
  storageBucket: "utak-item-menu-2cb34.appspot.com",
  messagingSenderId: "118321879325",
  appId: "1:118321879325:web:5a4686d2401866cdd969f4",
  measurementId: "G-JHTZ0MNBRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
