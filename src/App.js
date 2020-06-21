import React from 'react';
import './App.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Blogs from "./pages/Blogs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/About/Resume" component={Resume} />
      <Route exact path="/Blogs" component={Blogs} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Route component={Error} />
    </Switch>
    </>

  );
}

export default App;
