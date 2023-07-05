import React from "react";
import { UserAuth } from "../../context/AuthContext";
import GoogleButton from "react-google-button";

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
        <div>
          <h3>Hey! {user?.displayName}.</h3>
          <h4>Welcome to T-shirt Factory!</h4>
          <p>Seems your cart is empty. Explore our exclusive collection.</p>
          <h3>Happy Shopping!!</h3>
        </div>
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
