import React from 'react';
import './form.style.css';
import Chirologo from '../../assets/ChiroHDLogo.png';
import {NavLink} from 'react-router-dom'

function FormPage() {
    return (
        <div className = "form_parent">
            <div className = "logo_wrapper">
                <img src = {Chirologo}/>
            </div>
            <div className = "form_wrapper">
                <div className = "content">
                    <p>LabCorpID</p>
                    <input/>
                    <NavLink to="/form">
                    <div className = "btn">
                        <p>Next</p>
                    </div>
                    </NavLink>
                </div>
               
            </div>
        </div>
    )
}

export default FormPage;
