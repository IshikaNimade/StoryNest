import React, { createContext, useState, useEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER } from "../graphQL/mutation";
import { GET_USER } from "../graphQL/queries";
import {
  signInWithGoogle,
  signOutUser,
  onAuthStateChange,
} from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [isAuthenticated, setIsAuthenticated] = useState(!!user);
  const [loginError, setLoginError] = useState(null);

  const [createUser] = useMutation(CREATE_USER);

  const { data } = useQuery(GET_USER, {
    skip: !user?.uid,
    variables: user?.uid ? { uid: user.uid } : undefined,
  });

  // Sign in function
  const signInUser = async () => {
    const { user: firebaseUser, error } = await signInWithGoogle();
    if (error) {
      setLoginError(error);
      return;
    }

    if (firebaseUser) {
      const newUser = {
        uid: firebaseUser.uid,
        email: firebaseUser.email,
        name: firebaseUser.displayName || "",
        photoURL: firebaseUser.photoURL || "",
        emailVerified: firebaseUser.emailVerified,
      };

      try {
        await createUser({
          variables: {
            uid: newUser.uid,
            email: newUser.email,
            name: newUser.name,
            photoURL: newUser.photoURL,
            emailVerified: newUser.emailVerified,
          },
        });

        // Save user locally after successful API call
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
      } catch (apiError) {
        console.error("Error saving user to the backend:", apiError);
        setLoginError(apiError.message);
      }
    }
  };

  // Logout function
  const logout = async () => {
    const { success, error } = await signOutUser();
    if (success) {
      setUser(null);
      localStorage.removeItem("user");
    } else {
      console.error("Logout Error:", error);
    }
  };

  // Firebase auth state change listener
  useEffect(() => {
    const unsubscribe = onAuthStateChange((firebaseUser) => {
      if (firebaseUser) {
        const loggedInUser = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          name: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          emailVerified: firebaseUser.emailVerified,
        };
        setUser(loggedInUser);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(loggedInUser));
      } else {
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signInUser, logout, loginError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
