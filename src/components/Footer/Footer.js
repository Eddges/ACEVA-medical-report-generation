import React from 'react';
import styles from './Footer.module.css';
import flogo from '../../assets/facebook.png';
import tlogo from '../../assets/twitter.png';
import ilogo from '../../assets/insta.png';
import plogo from '../../assets/phone.png';
import ylogo from '../../assets/youtube.png';
import ulogo from '../../assets/user.png';
// import hurraylogo from '../../assets/hurraylogo.png';

function Footer() {
    return (
        <div className={styles.footer}>
      <div className = {styles.footer_up}>
        <div className = {styles.box}>
          {/* <img src = {flogo}/> */}
        </div>
        <div className = {styles.box}>
          <p className = {styles.label} >Company</p>
          <p>Meet the team</p>
          <p>Careers</p>
          <p>Our quality</p>
          <p>FAQs</p>
          <p>Press</p>
          <p>Customer Reviews</p>
          <p>Contact Us</p>
        </div>
        <div className = {styles.box}>
          <p className = {styles.label} >Policies</p>
          <p>Good Health Point Programs</p>
          <p>Subscriptions</p>
          <p>Store Policies</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Affilates</p>
        </div>
        <div className = {styles.box}>
          <p className = {styles.label} >Practitioners</p>
          <p>Find A Practitioner</p>
          <p>Become a LifeAlign Practitioner</p>
          <p>Weight Loss Offering</p>
          <p>Laboratory Testing</p>
          <p>Seminars</p>
        </div>
      </div>
      <div className = {styles.footer_down}>
        <p>©2020 LifeAlign </p>
      </div>
    </div>
    )
}

export default Footer;
