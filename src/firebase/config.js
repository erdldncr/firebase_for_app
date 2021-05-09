import  firebase from 'firebase'
import 'firebase/storage';
import 'firebase/firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAn7HOv9emFaJltK1Z2GnoGBQjTrNk5Dwk",
    authDomain: "ninja-firegram-e3453.firebaseapp.com",
    projectId: "ninja-firegram-e3453",
    storageBucket: "ninja-firegram-e3453.appspot.com",
    messagingSenderId: "249203584198",
    appId: "1:249203584198:web:eff11bedbc454be6697bc7"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const projectStorage = firebaseApp.storage();
  const projectFirestore = firebaseApp.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { projectStorage, projectFirestore,timestamp };