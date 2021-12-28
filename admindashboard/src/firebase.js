import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBz9IUiee2XoF87tKB1b2V9ymDc7zoXX48",
  authDomain: "netflix2-3ffe5.firebaseapp.com",
  projectId: "netflix2-3ffe5",
  storageBucket: "netflix2-3ffe5.appspot.com",
  messagingSenderId: "750406077388",
  appId: "1:750406077388:web:1e299296d5f7f4b5b6ab69",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;
