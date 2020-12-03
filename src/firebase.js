// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAWkZwOScfoezFEbhCoLY_5TwQjoDIqwk4",
  authDomain: "challege-329f3.firebaseapp.com",
  databaseURL: "https://challege-329f3.firebaseio.com",
  projectId: "challege-329f3",
  storageBucket: "challege-329f3.appspot.com",
  messagingSenderId: "842104251510",
  appId: "1:842104251510:web:4a384a0c568a05fc992b57",
  measurementId: "G-DPJP6LF7GV"
};
 const firebaseApp = firebase.initializeApp(firebaseConfig);

 const db = firebaseApp.firestore();

 const auth = firebase.auth()

 export { db, auth};
