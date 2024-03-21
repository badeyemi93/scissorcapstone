// Import necessary libraries and components
import {
    ReactNode as RN,
    createContext as createCtx,
    useContext as useCtx,
    useEffect as useEff,
    useState as useSt,
  } from "react";
  import { auth as firebaseAuth } from "./firebase";
  import { User as FirebaseUser } from "firebase/auth";
  
  // Create a context for Auth User
  const AuthUserCtx = createCtx<{
    authUser: FirebaseUser | null;
    isLoading: boolean;
  }>({
    authUser: null,
    isLoading: true,
  });
  
  // Custom hook to manage Firebase authentication
  export default function useFirebaseAuthentication() {
    const [authUser, setAuthUser] = useSt<FirebaseUser | null>(null);
    const [isLoading, setIsLoading] = useSt(true);
  
    // Set up a listener for authentication state changes
    useEff(() => {
      const unsubscribe = firebaseAuth.onAuthStateChanged(
        async (user) => {
          setIsLoading(true);
          user ? setAuthUser(user) : setAuthUser(null);
          setIsLoading(false);
        },
        (error) => {
          console.log("Error", error);
        }
      );
      return () => unsubscribe();
    }, []);
  
    return {
      authUser,
      isLoading,
    };
  }
  
  // Context provider component for Auth User
  export const AuthUserCtxProvider: React.FC<{ children: RN }> = (props) => {
    const auth = useFirebaseAuthentication();
    return (
      <AuthUserCtx.Provider value={auth}>
        {props.children}
      </AuthUserCtx.Provider>
    );
  };
  
  // Custom hook to use Auth User context
  export const useAuthUser = () => {
    return useCtx(AuthUserCtx);
  };
  