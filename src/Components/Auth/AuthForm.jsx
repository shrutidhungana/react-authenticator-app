import { useState, createRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import "./AuthForm.css";

const AuthForm = () => {
  const { login } = useContext(AuthContext);
  const emailRef = createRef(null);
  const passwordRef = createRef(null);
  const history = useHistory();
  const [showSignUpText, setShowSignUpText] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const extractCurrentEmailValue = emailRef.current.value;
    const extractCurrentPasswordValue = passwordRef.current.value;
    console.log(extractCurrentEmailValue, extractCurrentPasswordValue);

    let url = "";

    if (showSignUpText) {
      //sign up
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDEKMyR5lvgsP_sZoVPS9hl5FMzzWoBi-g";
    } else {
      //login
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDEKMyR5lvgsP_sZoVPS9hl5FMzzWoBi-g";
    }

    const options = {
      method: "POST",
      body: JSON.stringify({
        email: extractCurrentEmailValue,
        password: extractCurrentPasswordValue,
        returnSecureToken: true,
      }),
      "content-type": "application/json",
    };

    try {
      const response = await fetch(url, { ...options });
      const data = await response.json();
      console.log(response);
      if (response && response.ok) {
        setIsLoading(false);
        login(data.idToken);
        history.push("/");
      } else {
        setError(true);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
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
          {isLoading ? (
            "Loading. Please Wait..."
          ) : (
            <button>{showSignUpText ? "SignUp" : "Login"}</button>
          )}
          <button
            type="button"
            className="toggle"
            onClick={() => setShowSignUpText(!showSignUpText)}
          >
            {showSignUpText
              ? "Login with existing account"
              : "Create new account"}
          </button>
        </div>
        <div style={{ padding: "20px 0px 0px 0px", fontSize: "18px" }}>
          {error && "Authentication failed ! Please try again"}
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
