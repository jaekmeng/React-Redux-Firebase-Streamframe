import firebase from 'firebase/app'
import 'firebase/firestore'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQENkfmRR7SkeVGXMHfjWnZXyE_gFqAI4",
    authDomain: "streamframe-f58f0.firebaseapp.com",
    databaseURL: "https://streamframe-f58f0.firebaseio.com",
    projectId: "streamframe-f58f0",
    storageBucket: "",
    messagingSenderId: "403829094826",
    appId: "1:403829094826:web:00c76003cb9c2b5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})

  export default firebase