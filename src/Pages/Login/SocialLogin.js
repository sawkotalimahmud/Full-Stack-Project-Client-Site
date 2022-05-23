import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-control">
      <button
        onClick={() => signInWithGoogle()}
        className="btn btn-glass hover:btn-primary"
      >
        continue with google
      </button>
    </div>
  );
};

export default SocialLogin;
