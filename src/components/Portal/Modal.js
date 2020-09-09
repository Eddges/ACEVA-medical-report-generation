import React from 'react';
import Main from '../Prescription/main.component';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import styles from './modal.module.css';
import Prescription from '../PrescriptionPage/Prescription';

// const Modal_Styles = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     height:'450px',
//     width:'500px',
//     transform: 'translate(-50%, -50%)',
//     backgroundColor:'#FFF',
//     padding:'50px',
//     zIndex:1000,
//     borderRadius:'10px',


// }

// const Overlay_Styles = {
//     position:'fixed',
//     top:0,
//     left:0,
//     right:0,
//     bottom:0,
//     backgroundColor:'rgba(0,0,0,0.7)',
//     zIndex:1000

// }

const Button_el = {
    border:'none',
    backgroundColor:'gray',
    fontWeight:600,
    color:'white',
    marginLeft:'1em',
    left:'1em',
    // marginLeft:'auto',
    // marginRight:'1em'

}

const Buttonel = {
    height:'40px',
    width:'100px',
    border:'none',
    backgroundColor:'#0075f6',
    fontWeight:600,
    color:'white',
    marginLeft:'auto'
}

// const Footer = {
//     position:'relative',
//     bottom:0,
//     height:'100px',
//     width:'100%'
// }

function Modal({ open , children, onClose}) {
    if(!open) return null;

    return ReactDom.createPortal (
        <>
          <div className = {styles.Overlay_Styles}/>
          <div className = {styles.Modal_Styles}>
            {/* <button style = {Button_el} onClick = {onClose}> <img src="https://img.icons8.com/officel/20/000000/multiply.png"/> </button> */}
            <Prescription/>
            <div className = {styles.Footer}>
            <button onClick = {onClose}> Submit </button>
            <button  onClick = {onClose}> Cancel </button>


            </div>
          </div>
         
        </>,
        document.getElementById('portal')
      
    )
}

export default Modal
