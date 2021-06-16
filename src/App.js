import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// COMPONENT IMPORT
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Contact from "./components/Contact";

// APP FUNCTION / ROUTER
function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/services" exact component={Services} />
        <Route path="/experience" exact component={Experience} />
        <Route path="/works" exact component={Works} />
        <Route path="/contact" exact component={Contact} />
        <Route path={() => "/main" || "/anything"}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;