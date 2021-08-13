import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBROxp9xnTrT5c9Joobc55SrqFxOMcNg3k",
    authDomain: "try-to-do-chats.firebaseapp.com",
    databaseURL: "https://try-to-do-chats-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "try-to-do-chats",
    storageBucket: "try-to-do-chats.appspot.com",
    messagingSenderId: "133262912366",
    appId: "1:133262912366:web:d9b5a731197e3048642f7f"
  };

  firebase.initializeApp(firebaseConfig)
  