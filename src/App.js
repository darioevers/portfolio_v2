import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing all components
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path={() => "/main" || "/anything"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;