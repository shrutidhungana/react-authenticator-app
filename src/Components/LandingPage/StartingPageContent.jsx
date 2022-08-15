import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import "./StartingPageContent.css";

const StartingPageContent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <section className="starting">
        <h1>
          {isLoggedIn
            ? "Welcome User! You are now logged in"
            : "Welcome! Please login to access the application"}
        </h1>
      </section>
    </div>
  );
};

export default StartingPageContent;
