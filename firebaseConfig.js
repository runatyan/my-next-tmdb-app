// firebaseConfig.js

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC9NXoI46kdCvwRCr1z_6FmInYmZ_pjfbQ",
  authDomain: "tmdbapi-ce065.firebaseapp.com",
  projectId: "tmdbapi-ce065",
  storageBucket: "tmdbapi-ce065.appspot.com",
  messagingSenderId: "696276782922",
  appId: "1:696276782922:web:adb13498207ccaec9fbbb3",
  measurementId: "G-7GJ5YEJ8CD",
};

// Firebaseの初期化
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
