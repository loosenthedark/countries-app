import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages from pages directory
import Home from "./pages/Home";
import CountryInfo from "./pages/CountryInfo";
import Error from "./pages/Error";

// import component(s) from components directory
import ScrollButton from "./components/ScrollButton";

function App() {
  // STEP 1: Wrap the app in the router component and add an inner route for each page...
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/country/:id'>
          <CountryInfo />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <ScrollButton />
    </Router>
  );
}

export default App;
