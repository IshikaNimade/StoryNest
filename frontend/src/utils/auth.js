import { useState, useEffect } from "react";
import {
  auth,
  onAuthStateChanged,
  signInWithGoogle,
  signOutUser,
} from "./firebase";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../graphQL/mutation";
import { GET_USER } from "../graphQL/queries";

export const useAuth = () => {
  const [loginError, setLoginError] = useState(null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [createUser] = useMutation(CREATE_USER);
  const { data, error } = useQuery(GET_USER, {
    skip: !user?.uid,
    variables: user?.uid ? { uid: user.uid } : undefined,
  });

  const signInUser = async () => {
    try {
      const result = await signInWithGoogle();
      const firebaseUser = result.user;

      if (firebaseUser) {
        const { uid, email, displayName, photoURL, emailVerified } =
          firebaseUser;

        const name = displayName || "";
        const imageUrl = photoURL || "";

        const newUser = {
          uid,
          email,
          name,
          imageUrl,
          emailVerified,
        };

        if (uid) {
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
        }
        return {
          user: newUser,
          error: null,
        };
      } else {
        setLoginError("Failed to authenticate with Google.");
        return {
          user: null,
          error: "Failed to authenticate with Google.",
        };
      }
    } catch (error) {
      console.error("Error during login or user creation:", error);
      setLoginError(error.message);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const loggedInUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          imageUrl: firebaseUser.photoURL,
          emailVerified: firebaseUser.emailVerified,
        };
        setUser(loggedInUser);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
      } else {
        setUser(null);
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // If data is available, set the user data
    if (data && data.getUser) {
      setUser(data.getUser);
      localStorage.setItem("user", JSON.stringify(data.getUser));
    } else if (!data && user) {
      createUser({
        variables: {
          uid: user.uid,
          email: user.email,
          name: user.name,
          imageUrl: user.imageUrl,
          emailVerified: user.emailVerified,
        },
      });
      console.log(user);
    }
  }, [data, user, createUser]);

  return { user, signInUser, signOutUser, loginError };
};
