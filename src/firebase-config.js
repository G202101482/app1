import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA6NVTpWi9G1cy9RvJUVOfCSiMBPKE7vYM",
    authDomain: "travel-booking-c3dc1.firebaseapp.com",
    projectId: "travel-booking-c3dc1",
    storageBucket: "travel-booking-c3dc1.appspot.com",
    messagingSenderId: "794142981718",
    appId: "1:794142981718:web:5ef813d5a2829a5d3005f7",
    measurementId: "G-6YB50NN1Q6"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
