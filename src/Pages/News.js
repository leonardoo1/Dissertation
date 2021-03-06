import React from "react";
import "./News.css";

function News() {
  return (
    <div className="container-news">
      <p className="guidelinetit">Guidelines</p>
      <div className="two">
        <div className="twotwo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0VC8tsYrKZM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="ytone">How to buy cryptocurrency</p>
        </div>
        <div className="twone">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/rYQgy8QDEBI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="ytwo">How Cryptocurrency ACTUALLY works</p>
        </div>
      </div>

      <div className="four">
        <div className="fourone">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Yb6825iv0Vk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="ythree">How To Invest In Crypto Full Beginners Guide in 2021</p>
        </div>
        <div className="fourtwo">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DNoSMPvfwWw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <p className="ytfour">When To Buy Cryptocurrency - 3 Simple Steps (Maximize Profit)</p>
        </div>
      </div>

      <div>
        <a href="https://coinmarketcap.com/faq/">Link to know more</a>
      </div>
    </div>
  );
}

export default News;
