import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./CommonViews/Navbar";
import Main from "./CommonViews/main";
import Footer from "./CommonViews/Footer";

function App() {
  return (

      <div className="container">
            <BrowserRouter>
             <Navbar />
             <Main />
             <Footer />
             </BrowserRouter>
   </div>
  );
}

export default App;
