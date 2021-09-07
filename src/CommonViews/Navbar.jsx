import React from "react";
import "./navbar.css";

function Navbar(){
    return (
        <div className="coin-app">
          <div className="row">
      <div id="navbar">
            <a href="" id="news">News</a>
            <a href="">Buy</a>
            <a href="">About us</a>
            <a href="" id="miner">Miner</a>
            </div>
            <div className="coin-search">
            <a className="coin-text" href="/App.js">CryptoShinobi</a>
            </div>
            </div>
            </div>
            );
}

export default Navbar;