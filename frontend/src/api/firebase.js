import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxlbaqtgbIRW32K0fduu4amdb9mohY5DQ",
  authDomain: "storynest-d9b48.firebaseapp.com",
  projectId: "storynest-d9b48",
  storageBucket: "storynest-d9b48.firebasestorage.app",
  messagingSenderId: "555157843104",
  appId: "1:555157843104:web:ab57a2890cf27e331f2dc5",
  measurementId: "G-RC4NGM51NK",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { app, auth, provider };
