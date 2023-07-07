import React from "react";
import { UserAuth } from "../../context/AuthContext";
import GoogleButton from "react-google-button";
import Login from "../../component/login/Login";

const Profile = () => {
  const { user, googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {user ? (
        <Login />
      ) : (
        <div>
          <h3>Hello!</h3>
          <h4>Welcome to T-shirt Factory!</h4>
          <p>
            Would love to know more about you. Can you please Sign-in with your
            google account?
          </p>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      )}
    </div>
  );
};

export default Profile;
