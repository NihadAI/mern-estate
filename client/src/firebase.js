// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-6d16d.firebaseapp.com",
    projectId: "mern-estate-6d16d",
    storageBucket: "mern-estate-6d16d.appspot.com",
    messagingSenderId: "1072016754749",
    appId: "1:1072016754749:web:a3dbbb06ea0ad1153c8254"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);