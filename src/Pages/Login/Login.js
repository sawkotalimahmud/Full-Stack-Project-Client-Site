import React, { useRef } from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";


const Login = () => {

  
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  if(user){
    console.log(user);
  }

  const navigateSignUp = event => {
    navigate('/');
}


  return (
    <div className="hero min-h-screen ">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl text-center">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label">
              <Link as={Link} to="/signup"  onClick={navigateSignUp}  className="label-text-alt link link-hover" >Don't Have An Account? Please Sign Up Here</Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="divider">OR</div>
            <button onClick={() => signInWithGoogle()} className="btn btn-glass hover:btn-primary">continue with google</button>
          </div>
        </div>
      </div>
  );
};

export default Login;
