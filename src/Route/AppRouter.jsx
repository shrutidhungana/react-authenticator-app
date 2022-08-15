import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthForm from "../Components/Auth/AuthForm";
import StartingPageContent from "../Components/LandingPage/StartingPageContent";
import Layout from "../Components/Layout/Layout";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Layout />
          <Routes>
            <Route exact path="/" element={<StartingPageContent />} />
            <Route path="/auth" element={<AuthForm />} />
          </Routes>
        
      </Router>
    </div>
  );
};

export default AppRouter;
