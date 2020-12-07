import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB3J0V64EyGlNYxquA3-MuJO4jAh69b9Bs",
  authDomain: "crwn-db-e1350.firebaseapp.com",
  projectId: "crwn-db-e1350",
  storageBucket: "crwn-db-e1350.appspot.com",
  messagingSenderId: "948766775598",
  appId: "1:948766775598:web:a26a2d7602a0a23f9302bf",
  measurementId: "G-W107RP4L48",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
