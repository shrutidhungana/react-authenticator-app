import React, { createRef, useContext, useState } from "react";
import {useHistory} from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext";
import "./AuthForm.css";

const AuthForm = () => {
    const {login} = useContext(AuthContext)
  const emailRef = createRef(null);
  const passwordRef = createRef(null);

    const history = useHistory()
    
  const [isLoading, setIsLoading] = useState(false);

    
    const [showSignUpText, setShowSignUpText] = useState(false);

  const handleFormSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true)
    const extractCurrentEmailValue = emailRef.current.value;
    const extractCurrentPasswordlValue = passwordRef.current.value;

    let url = "";

    if (showSignUpText) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEKMyR5lvgsP_sZoVPS9hl5FMzzWoBi-g";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEKMyR5lvgsP_sZoVPS9hl5FMzzWoBi-g";
    }

    const options = {
      method: "POST",
      body: JSON.stringify({
        email: extractCurrentEmailValue,
        password: extractCurrentPasswordlValue,
        returnSecuredToken: true,
      }),
      "content-type": "application/json",
    };

      const response = await fetch(url, { ...options });
      const data = await response.json();
      if (data && data.token !== "") {
          setIsLoading(false)
          login(data.idToken)
          history.push('/')
      }
      console.log(data);
  };

  return (
    <div>
      <section className="auth">
        <h1>{showSignUpText ? "SignUp" : "Login"}</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input ref={emailRef} required type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input ref={passwordRef} required type="password" id="password" />
          </div>
          <div className="actions">
            <button>{showSignUpText ? "SignUp" : "Login"}</button>
            <button
              type="button"
              className="toggle"
              onClick={() => setShowSignUpText(!showSignUpText)}
            >
              {showSignUpText ? "Login with existing account " : "Create New Account"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
