import React, {useEffect,useState} from 'react';
import "./News.css";

function News(){
    return(
        <div className="container">
            <p>Guidelines</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0VC8tsYrKZM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/rYQgy8QDEBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Yb6825iv0Vk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/DNoSMPvfwWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
             
             <div>
                 <a href="https://coinmarketcap.com/faq/">Link to know more</a>
             </div>
             
        </div>
    );
}

export default News;