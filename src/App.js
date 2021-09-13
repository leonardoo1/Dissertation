import React, { useState, useEffect } from "react";
import styles from "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./CommonViews/Navbar";
import Main from "./CommonViews/main";
import Footer from "./CommonViews/Footer";
import About from "./Pages/About";
import News from "./Pages/News";
import Miner from "./Pages/Miner";
import ScrollToTop from "./Components/ScrollToTop";
import Buy from "./Pages/Buy";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Route exact path="/news" component={News} />
        <Route exact path="/miner" component={Miner} />
        <Route exact path="/buy" component={Buy} />
        <ScrollToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
