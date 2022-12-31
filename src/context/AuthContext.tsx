import {
  Auth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/config";

export interface AuthContextProps {
  children?: ReactNode;
}

export interface UserContextState {
  isAuthenticated: boolean;
  isLoading: boolean;
  id?: string;
}

export const UserStateContext = createContext<UserContextState>(
  {} as UserContextState
);

export interface AuthContextState {
  auth: Auth;
  user: User | null;
  signInWithEmail: (email: string, password: string) => Promise<UserCredential>;
  signUp: (email: string, password: string) => void;
  logOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextState>(
  {} as AuthContextState
);

export function useAuth(): AuthContextState {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: AuthContextProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);
  function signUp(email: string, password: string): void {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }

  function signInWithEmail(
    email: string,
    password: string
  ): Promise<UserCredential> {
    try {
      return signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  function logOut() {
    return signOut(auth);
  }
  const navigate = useNavigate();

  useEffect(() => {
    const authCheck = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    });
    return () => authCheck();
  }, [auth]);

  const values = {
    user,
    signUp,
    signInWithEmail,
    logOut,
    auth,
    setUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useUserContext = (): UserContextState => {
  return useContext(UserStateContext);
};
