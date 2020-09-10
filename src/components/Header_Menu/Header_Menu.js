import React from 'react'
import classes from './Header_Menu.module.css'
import Logo from '../../assets/Logo.png'

const  Header_Menu = (props) => {
    return(
        <div className={classes.Container}>
            <img className={classes.Logo} src={Logo} alt="Logo" />
            <div className={classes.Menu}>
                <span className={classes.MenuItem}>PRODUCTS <i className="fas fa-chevron-down" style={{'color' : '#fff'}}></i></span>
                <span className={classes.MenuItem}>BUNDLES <i className="fas fa-chevron-down" style={{'color' : '#fff'}}></i></span>
                <span className={classes.MenuItem}>CATEGORIES <i className="fas fa-chevron-down" style={{'color' : '#fff'}}></i></span>
                <span className={classes.MenuItem}>OUR COMPANY <i className="fas fa-chevron-down" style={{'color' : '#fff'}}></i></span>
                <span className={classes.MenuItem}>BLOG</span>
                <span className={classes.MenuItem}>HELP</span>
            </div>
            <div className={classes.Search}>
                <input placeholder="Search Record" />
            </div>
            <div className={classes.Hamburger}>
                <div className={classes.Line}></div>
                <div className={classes.Line}></div>
                <div className={classes.Line}></div>
            </div>
        </div>
    )
}

export default Header_Menu