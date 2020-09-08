import React , {useState} from 'react';
import Modal from './Modal';

const Button_Wrapper_Styles = {
    position: 'relative',
    zIndex:1,
    height: '50px',
    margin: '0px',
    // borderRadius: '25px',
    backgroundColor: '#494949',
    border: 'none',
    color: '#fff',
    width: '150px',
    display: 'flex',
    justifyContent:'center',
    alignItems:'center',
    cursor:'pointer',
    fontWeight:'900'
}

const Button_el = {
    height:'40px',
    width:'110px',
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
        <div style = {Button_Wrapper_Styles}>
            <p  onClick = {() => setIsOpen(true)} >Prescribe</p>
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
