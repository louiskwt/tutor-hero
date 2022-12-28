import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const config = {
  // firebase config
  firebaseConfig: {
    apiKey: import.meta.env.FIREBASE_API_KEY,
    authDomain: import.meta.env.FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.FIREBASE_BUCKET,
    messagingSenderId: import.meta.env.FIREBASE_SENDER_ID,
    appId: import.meta.env.FIREBASE_APP_ID,
    measurementId: import.meta.env.FIREBASE_MEASUREMENT_ID,
  },
};

const firebase = initializeApp(config.firebaseConfig);

export const auth = getAuth(firebase);
