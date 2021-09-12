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
                  <a href="" className="fb"><img src={fbimage}/></a>
                  <a href="" classname="insta"><img src={instaimage}/></a>
                   <a href="" className="lnkd"><img src={lndimage}/></a>
                   <a href="" className="twitter"><img src={twtimage}/></a>
              </div>
          </div>
      </div>
    );
}

export default Footer;