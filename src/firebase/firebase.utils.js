import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyBvMrXa-blNzDj6FknTbVEJrOaijtfrcPQ",
        authDomain: "eccom-db-16504.firebaseapp.com",
        projectId: "eccom-db-16504",
        storageBucket: "eccom-db-16504.appspot.com",
        messagingSenderId: "268010190594",
        appId: "1:268010190594:web:2de61e6fd1aedff699b41b",
        measurementId: "G-CDYGXJ9EQS"
      
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;