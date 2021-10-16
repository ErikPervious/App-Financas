import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAIqFpIE7ZUB0MVgi0NbHST9C-68rb3co",
  authDomain: "financas-3556f.firebaseapp.com",
  projectId: "financas-3556f",
  storageBucket: "financas-3556f.appspot.com",
  messagingSenderId: "286335361298",
  appId: "1:286335361298:web:66f0efa227818a7433d3cb",
  measurementId: "G-6K13VC7DSR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;