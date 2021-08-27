import firebase from "firebase";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyB77IIFMK09b5CK7WEs-BpQanVnOPiOEhY",
	authDomain: "linkedin-redesigned-clone.firebaseapp.com",
	projectId: "linkedin-redesigned-clone",
	storageBucket: "linkedin-redesigned-clone.appspot.com",
	messagingSenderId: "493407430072",
	appId: "1:493407430072:web:9ee5b2ac5781cd4bbb9b4d",
});

const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export { db, auth };
