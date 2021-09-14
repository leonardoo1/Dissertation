import React from "react";
import "./Footer.css";
import fbimage from "../Icons/facebook.png";
import instaimage from "../Icons/instagram.png";
import lndimage from "../Icons/linkedin.png";
import twtimage from "../Icons/twitter.png";

function Footer (){
    return(
      <div className="container">
          <div className="row">
              <div className="footer-text">
                  <h6>CryptoShinobi Limited &copy;</h6>
              </div>
              <div className="footer-icons">
                  <a href="https://www.facebook.com/Unofficial-Bundesliga-303456716484177" className="fb" target="_blank" rel="noreferrer"><img src={fbimage} alt=""/></a>
                  <a href="https://www.instagram.com/cryptoshinobivx/" classname="insta" target="_blank" rel="noreferrer"><img src={instaimage} alt=""/></a>
                   <a href="https://www.linkedin.com/company/cryptomonday-official/" className="lnkd" target="_blank" rel="noreferrer"><img src={lndimage} alt=""/></a>
                   <a href="https://www.twitter.com/cryptoshinobixx" className="twitter" target="_blank" rel="noreferrer" ><img src={twtimage} alt=""/></a>
              </div>
          </div>
      </div>
    );
}

export default Footer;