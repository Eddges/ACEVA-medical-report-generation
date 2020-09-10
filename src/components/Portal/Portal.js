import React , {useState} from 'react';
import Modal from './Modal';
import classes from './modal.module.css'

const Button_Wrapper_Styles = {
    position: 'relative',
    zIndex:1,
    height: '50px',
    margin: '0px',
    // borderRadius: '25px',
    backgroundColor: '#97d700',
    border: 'none',
    borderRadius : '5px',
    color: '#fff',
    textShadow : '0px 0px 5px rgba(0, 0, 0, 0.417)',
    // width: '170px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    fontWeight:'900',
    padding: '0px 15px'
}

const Button_el = {
    height:'40px',
    width:'130px',
    border:'none',
    backgroundColor:'white',
    fontWeight:600,
    color: '#0075f6',
    marginLeft:'1em'

}

const Other_Content_Styles = {
    position: 'relative',
    zIndex: 2,
    backgroundColor:'red',
    padding:'10px'
}

function Portal() {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <>
        <div style = {Button_Wrapper_Styles}  onClick = {() => setIsOpen(true)}>
            <p  >PRESCRIPTION</p>
        </div>
        <Modal open = {isOpen} onClose = {()=> setIsOpen(false)}/>
        {/* </Modal> */}
        {/* <div style = {Other_Content_Styles}>
            Other content
        </div> */}
    </>
    )
}

export default Portal
