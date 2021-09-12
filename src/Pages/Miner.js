import React, {useEffect, useState} from 'react';
import Converter from '../Components/Converter';
import "./Miner.css"

function Miner (){
    return(
        <div className="container">
            <div className="miner-main">
                <Converter />
            </div>
        </div>
    );
}

export default Miner;