import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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

// Sign in with Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return { user: result.user, error: null };
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    return { user: null, error: error.message };
  }
};

// Sign out user
const signOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    return { success: true, error: null };
  } catch (error) {
    console.error("Logout Error:", error);
    return { success: false, error: error.message };
  }
};

export { auth, provider, signInWithGoogle, signOutUser, onAuthStateChanged };
