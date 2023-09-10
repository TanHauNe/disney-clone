// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyByLiHgvyb8OwCTbEuYXMzJQjxfseg3ov4",
  authDomain: "disney-clone-a38e4.firebaseapp.com",
  projectId: "disney-clone-a38e4",
  storageBucket: "disney-clone-a38e4.appspot.com",
  messagingSenderId: "230390782844",
  appId: "1:230390782844:web:1d23f3018d6de3489ee2f9",
  measurementId: "G-G3FVJKSREE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// export { auth, provider, storage, db };
