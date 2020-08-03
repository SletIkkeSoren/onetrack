import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyAS-9NtFQ4wxuQhsu8mF5ZrlLdXCr4m2bg",
    authDomain: "one-track-app.firebaseapp.com",
    databaseURL: "https://one-track-app.firebaseio.com",
    projectId: "one-track-app",
    storageBucket: "one-track-app.appspot.com",
    messagingSenderId: "1039678653992",
    appId: "1:1039678653992:web:4ebd85d37dec4d3c8dd71d",
    measurementId: "G-48GT05YQHX"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt, 
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }
    
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });
facebookProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export default firebase;