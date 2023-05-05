import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBu-kLdrBLbRKN7RUZdcadQqg48Qg3NVCs",
  authDomain: "nuevamedicina-ecommerce.firebaseapp.com",
  projectId: "nuevamedicina-ecommerce",
  storageBucket: "nuevamedicina-ecommerce.appspot.com",
  messagingSenderId: "556342454610",
  appId: "1:556342454610:web:bf2553590927783d9c328b",
  measurementId: "G-1H4DGNDMBZ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);