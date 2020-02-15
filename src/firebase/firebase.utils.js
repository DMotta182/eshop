import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkMmZTLSXGvXSXM2c2vYVCMSZymJif7V0",
    authDomain: "crown-db-72e02.firebaseapp.com",
    databaseURL: "https://crown-db-72e02.firebaseio.com",
    projectId: "crown-db-72e02",
    storageBucket: "crown-db-72e02.appspot.com",
    messagingSenderId: "488519897831",
    appId: "1:488519897831:web:8fd61140175b506e780842"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;