import firebase from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyBPCSKTiwINL67takvqIAJpwl8GWErsxqg",
  authDomain: "netninja-bf5c0.firebaseapp.com",
  projectId: "netninja-bf5c0",
  storageBucket: "netninja-bf5c0.firebasestorage.app",
  messagingSenderId: "579973693191",
  appId: "1:579973693191:web:5404c419f5d77508ab8fa2"
};

firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp()

export { projectFirestore, timestamp }