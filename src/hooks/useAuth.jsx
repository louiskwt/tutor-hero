import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import {doc, getDoc, getFirestore, setDoc} from "firebase/firestore";
import {createContext, useContext, useEffect, useState} from "react";
import {firebase} from "../Firebase";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(firebase);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(firebase);

  const setInitialUserProfile = async (user) => {
    try {
      await setDoc(
        db,
        "members",
        user.uid,
        {
          email: user.email,
          points: 0,
          name: `student-${user.uid.substr(user.id.length - 4)}`,
          lessonTaken: 0,
          lessonDate: new Date().getUTCDate(),
          userId: user.id,
          readingAvg: 0,
          writingAvg: 0,
          listeningAvg: 0,
          speakingAvg: 0,
          grammarAvg: 0,
          dictationAvg: 0,
          taskCount: 0,
          completedTask: 0,
        },
        {
          merge: true,
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const checkProfile = async (user) => {
    const docRef = doc(db, "members", user.uid);
    try {
      const profile = await getDoc(docRef);
      return profile.exists();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const loginWithEmail = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error logging in with email:", error);
      throw error;
    }
  };

  const registerWithEmail = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (error) {
      console.error("Error registering with email:", error);
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const userCredential = await signInWithPopup(auth, provider);
      return userCredential.user;
    } catch (error) {
      console.error("Error logging in with Google:", error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
      throw error;
    }
  };
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      throw error;
    }
  };

  return <AuthContext.Provider value={{user, setUser, loginWithEmail, loginWithGoogle, logout, registerWithEmail, setInitialUserProfile, checkProfile, resetPassword, loading}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
