import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB6KKTuKq1qhX0rsprwHkszlbVIoDLN6lQ",
  authDomain: "instagram-e787f.firebaseapp.com",
  projectId: "instagram-e787f",
  storageBucket: "instagram-e787f.appspot.com",
  messagingSenderId: "303435463573",
  appId: "1:303435463573:web:b5b21a4daa97af63f4549c",
  measurementId: "G-NMR9PEWE1K",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};