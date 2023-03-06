// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyAhWaCfkfOV9_C09RS_kFsbOmJNsi9oiIU",

    authDomain: "jumpseller-imgs.firebaseapp.com",

    projectId: "jumpseller-imgs",

    storageBucket: "jumpseller-imgs.appspot.com",

    messagingSenderId: "667583814705",

    appId: "1:667583814705:web:628acac3a638e6fabbc910",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export default app;