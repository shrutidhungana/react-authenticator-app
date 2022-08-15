import React from "react";

const AuthForm = () => {
  return (
    <div>
      <section className="auth">
        <h1>{isLogin ? "Login" : "Sign up"}</h1>
        <form>
          <div className="control">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="control">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="actions">
            <button>Login</button>
            <button type="button" className="toggle">
              Create new Account
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AuthForm;
