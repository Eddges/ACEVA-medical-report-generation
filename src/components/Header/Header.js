import React from 'react';
import './Header.css';
import flogo from '../../assets/facebook.png';
import tlogo from '../../assets/twitter.png';
import ilogo from '../../assets/insta.png';
import plogo from '../../assets/phone.png';
import ylogo from '../../assets/youtube.png';
import ulogo from '../../assets/user.png';

function Header(props) {
    return (
        <div className = "header_wrapper">
            <div className = "header_content">
                <div className = "header_left">
                    <img src = {flogo}/>
                    <img src = {tlogo}/>
                    <img src = {ylogo}/>
                    <img src = {ilogo}/>
                    
                    <p>(877) 688-7241</p>

                </div>
                <div className = "header_right">

                    <i className={`${"fas fa-user-md"}`} style={{'color' : '#fff'}}></i>
                    <span className="header_right_doctorName">Dr. Michael Leslie</span>
                </div>
            </div>
        </div>
    )
}

export default Header
