import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "#",
    authDomain: "#"
    projectId: "#",
    storageBucket: "#",
    messagingSenderId: "#",
    appId: "#"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();