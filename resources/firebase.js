
import express from 'express';
import { initializeApp } from "firebase/app";
import { getDatabase ,ref,onValue} from "firebase/database";

const app =express()

const PORT = process.env.PORT || 3008

const firebaseConfig = {
  apiKey: "AIzaSyCq5OsIGwWNQAWhljXSGrnt-JBF63QKFjA",
  authDomain: "test-1edb0.firebaseapp.com",
  databaseURL:"https://test-1edb0-default-rtdb.firebaseio.com/",
  projectId: "test-1edb0",
  storageBucket: "test-1edb0.appspot.com",
  messagingSenderId: "239136829511",
  appId: "1:239136829511:web:a79655588889b4a0df8162",
  measurementId: "G-VZKL7Z9NSJ"
};

const firebaseApp =initializeApp(firebaseConfig);

app.get('/', (req, res) => {
  res.send('Hello World!');
  
});

const db = getDatabase(firebaseApp);

const connectedRef = ref(db, ".info/connected");
onValue(connectedRef, snapshot => {
  console.log("Firebase status:", snapshot.val() ? "connected" : "disconnected");
});

