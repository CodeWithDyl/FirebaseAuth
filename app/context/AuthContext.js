// Importing required modules from React and Firebase
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";

// Creating a new context using createContext()
const AuthContext = createContext();

// Defining the AuthContextProvider component to manage authentication state
export const AuthContextProvider = ({ children }) => {
  // Using state to manage the user object representing the authenticated user
  const [user, setUser] = useState(null);

  // Function to perform Google sign-in using a popup
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  // Function to log out the user
  const logOut = () => {
    signOut(auth);
  };

  // useEffect to handle changes in authentication state
  useEffect(() => {
    // onAuthStateChanged listens for changes in authentication state (e.g., sign-in, sign-out)
    // When the authentication state changes, the callback function is executed with the currentUser object
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Set the state with the currentUser object, representing the authenticated user
      setUser(currentUser);
    });

    // Return a cleanup function to unsubscribe from the listener when the component unmounts or user state changes
    return () => unsubscribe();
  }, [user]); // The useEffect hook will re-run whenever the user state changes

  // Providing the AuthContext's value to the child components
  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to easily access the AuthContext's value from child components
export const UserAuth = () => {
  return useContext(AuthContext);
};
