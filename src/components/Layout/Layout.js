import React from 'react'
import Header from '../Header/Header'
import classes from './Layout.module.css'
import Footer from '../Footer/Footer'
import Header_Menu from '../Header_Menu/Header_Menu'

const Layout = (props) => {
    return(
        <div>
            <Header />
            <Header_Menu />
            <div className={classes.Main}>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout