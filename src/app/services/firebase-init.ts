import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
    measurementId: "MEASUREMENT_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);