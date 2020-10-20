import React, { useEffect } from "react";
import "./App.css";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Skill from "./Component/Skill/Skill";
import Footer from "./Component/Footer/Footer";
import About from "./Component/About/About";
import Work from "./Component/Work/Work";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
      <div className="App">
        <Switch>
          <Route path="/about">
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/work">
            <Work></Work>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <Home></Home>
            <Skill></Skill>
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Home></Home>
            <Skill></Skill>
            <Footer></Footer>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
