import React, { useState, useEffect } from "react";
import "./App.css";
import { Route,BrowserRouter as Router} from "react-router-dom";
import Navbar from "./CommonViews/Navbar";
import Main from "./CommonViews/main";
import Footer from "./CommonViews/Footer";
import About from "./About";
import News from "./News";
import Miner from "./Miner";

function App() {
  return (
      <Router>
      <div className="container">
        <Navbar/>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Route exact path="/miner" component={Miner} />
        <Footer />
   </div>
   </Router>
  );
}

export default App;
