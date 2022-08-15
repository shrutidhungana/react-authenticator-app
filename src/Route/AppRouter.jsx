import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthForm from "../Components/Auth/AuthForm";
import StartingPageContent from "../Components/LandingPage/StartingPageContent";
import Layout from "../Components/Layout/Layout";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Layout />
          <Switch>
            <Route exact path="/" component={StartingPageContent } />
            <Route path="/auth" component={AuthForm} />
          </Switch>
        
      </Router>
    </div>
  );
};

export default AppRouter;
