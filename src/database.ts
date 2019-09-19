import firebase from 'firebase/app';
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAiPl1GfNktyLmqPRyyiuWXB5ugFWeM-jc",
    authDomain: "vue-all-included.firebaseapp.com",
    databaseURL: "https://vue-all-included.firebaseio.com",
    projectId: "vue-all-included",
    storageBucket: "vue-all-included.appspot.com",
    messagingSenderId: "356675053115",
    appId: "1:356675053115:web:7f2b9e788b7d38d4c19e1e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore() ;

export default db ;
