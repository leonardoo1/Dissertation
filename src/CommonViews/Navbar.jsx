import React from "react";
import "./navbar.css";

function Navbar(){
    return (
        <div className="coin-app">
          <div className="row">
      <div id="navbar">
            <a href="/news" id="news">Guidelines</a>
            <a href="/buy">Buy</a>
            <a href="/about">About us</a>
            <a href="/miner">Converter</a>
            </div>
            <div className="coin-searcho">
            <a className="coin-text" href="/">CryptoShinobi</a>
            </div>
            </div>
            </div>
            );
}

export default Navbar;