import React from 'react';
import './form.style.css';
import Chirologo from '../../assets/ChiroHDLogo.png';

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
                    <div className = "btn">
                        <p>Next</p>
                    </div>
                    
                </div>
               
            </div>
        </div>
    )
}

export default FormPage;
