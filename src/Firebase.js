import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCq8T9JbwjzkjyL3hyus7ds8ZbtAEkpNrs",
  authDomain: "instagram-reels-1c732.firebaseapp.com",
  databaseURL: "https://instagram-reels-1c732.firebaseio.com",
  projectId: "instagram-reels-1c732",
  storageBucket: "instagram-reels-1c732.appspot.com",
  messagingSenderId: "1095651016753",
  appId: "1:1095651016753:web:83dfd83f3ecb7407249510",
  measurementId: "G-NC1VQRL54X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
