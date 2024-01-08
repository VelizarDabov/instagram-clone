import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import'firebase/compat/storage'
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCb0Pe190u6e3l4JKn_j1xSRvqPXOMs6Yc",
    authDomain: "instagram-clone-29772.firebaseapp.com",
    projectId: "instagram-clone-29772",
    storageBucket: "instagram-clone-29772.appspot.com",
    messagingSenderId: "962189045913",
    appId: "1:962189045913:web:df13fcc0aa303bf79ac808"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const storage = firebaseApp.storage();
const provider = new firebase.auth.GoogleAuthProvider();
export {db, auth, provider, storage}
export default storage