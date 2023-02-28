import React, { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider  } from "firebase/auth";
import { auth } from "../firebase";
var firebase = require('firebase');
var firebaseui = require('firebaseui');

const Signup = () => {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signin
        const user = userCredential.user;
        console.log(user);
        // navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            type="email"
            label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email address"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            label="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
          />
        </div>

        <button type="/submit" onClick={onSubmit}>
          Sign up
        </button>
      </form>
    </div>

    // <BrowserRouter>
    //   <Route path="/signup" component={Signup}>
    //     <form>

    //       <p>
    //         {/* Already have an account? <NavLink to="/login">Sign in</NavLink> */}
    //       </p>
    //     </form>
    //   </Route>
    // </BrowserRouter>
  );
};

export default Signup;
