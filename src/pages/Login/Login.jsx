import React, { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const { googleSignIn, user, openModal, setOpenModal } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      setOpenModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openModal && (
        <div className="login-modal">
          <h1>Sign-In</h1>
          <h3>Please sign-in using google account.</h3>
          <div>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
