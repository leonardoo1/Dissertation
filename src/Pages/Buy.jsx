import React from "react";
import bnbimg from "../Images/binance.jpg";
import "./Buyer.css";

function Buy() {
  return (
    <div className="container-buy">
      <p className="whereto">Where to buy cryptocurrencies?</p>
      <h2 className="tit1">Binance</h2>
      <div className="binancedesc">
        <a href="https://www.binance.com" target="_blank" rel="noreferrer" className="bnbimg">
          <img src={bnbimg} alt="" />
        </a>
        <ul className="binancedescp">
          Why Binance?
          <li>
            Binance Exchange is the largest crypto exchange by trade volume
            <br /> and one of the fastest in the world.
          </li>
          <li>
            It covers most of the cryptocurrencies that you will find in the
            market.
          </li>
          <li>You can use the web version or mobile version.</li>
          <li>Fees as low as 3%;</li>
          <li>
            Click on the image or
            <a
              href="https://www.binance.com"
              target="_blank"
              rel="noreferrer"
              className="bnblnk"
            >
              click me
            </a>
            to find out more.
          </li>
        </ul>
      </div>
      <hr />
      <h2 className="buyop">
        You can also buy cryptocurrencies on the websites listed below :
      </h2>
      <h3 className="kraken">
        <a href="https://www.kraken.com" target="_blank" rel="noreferrer">
          1. Kraken
        </a>
      </h3>
      <h3 className="coinbase">
        <a href="https://www.coinbase.com" target="_blank" rel="noreferrer">
          2. Coinbase
        </a>
      </h3>
      <h3 className="voyager">
        <a href="https://www.investvoyager.com/" target="_blank" rel="noreferrer">
          3. Voyager
        </a>
      </h3>
    </div>
  );
}

export default Buy;
