import { auth, provider } from "../api/firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return { user: result.user, error: null };
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    return { user: null, error: error.message };
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("user");
    return { success: true, error: null };
  } catch (error) {
    console.error("Logout Error:", error);
    return { success: false, error: error.message };
  }
};

export const onAuthStateChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};
