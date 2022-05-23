import React, { useRef } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  
    if(user){
      console.log(user);
    }
  
    const navigateLogin = event => {
      navigate('/');
  }
    return (
    <div className="hero min-h-screen ">
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-2xl text-center">Sign Up</h2>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
          />
        </div>
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
          <Link as={Link} to="/login"  onClick={navigateLogin}  className="label-text-alt link link-hover" >Have An Account? Please Login Here</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <div className="divider">OR</div>
        <button onClick={() => signInWithGoogle()} className="btn btn-glass hover:btn-primary">continue with google</button>
      </div>
    </div>
  </div>
    );
};

export default SignUp;