// Importing necessary libraries and components
import { useNavigate } from 'react-router-dom';
import GoogleLogo from "../assets/icons/googleLogo.svg";
import { getAuth, signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { toast } from "react-toastify";
import Button from "../components/Buttons";

// GoogleAuth component
const GoogleAuth = () => {
  // Using useNavigate hook for navigation
  const navigate = useNavigate();

  // Handler for button click event
  const onClickHandler = async (event: React.MouseEvent) => {
    event.preventDefault();
    try {
      // Initialize Firebase Auth
      const auth = getAuth();
      // Initialize Google Auth Provider
      const provider = new GoogleAuthProvider();
      // Sign in with Google
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // If user is authenticated
      if (user) {
        // Get user data
        const userData = await getUserData(user.uid);
        // If user data does not exist, store it
        if (!userData) {
          const userInfo: User = {
            Email: user.email,
            Name: user.displayName,
            uuid: user.uid,
            photo_url: user?.photoURL,
          };
          // Store user data
          await storeUserData(userInfo);
        }
      }
      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Could not authenticate account. Please try again.");
    }
  };

  // Return Button component
  return (
    <Button
      onclick={onClickHandler}
      className="btn-primary flex mx-auto px-4 rounded-md"
    >
      <img className="mr-2" src={GoogleLogo} alt="" />
      {location.pathname.includes("signup") ? "Sign up" : "Login"}
    </Button>
  );
};

// Function to get user data
async function getUserData(uuid: string) {
  const response = await fetch(`https://shorts.zictracks.com/api/users?key=${uuid}`);
  if (!response.ok) {
    return false;
  }

  const responseData = await response.json();
  if (!responseData.status) {
    return false;
  }

  return responseData.data;
}

// Function to store user data
async function storeUserData(data: User) {
  const response = await fetch(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    return false;
  }

  const responseData = await response.json();
  if (!responseData.status) {
    return false;
  }

  return responseData.data;
}

// Export GoogleAuth component
export default GoogleAuth;
