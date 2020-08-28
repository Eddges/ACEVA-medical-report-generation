import React , {useState} from 'react';
import Modal from './Modal';

const Button_Wrapper_Styles = {
    position: 'relative',
    zIndex:1,
    height:'50px',
    width:'120px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}

const Button_el = {
    height:'45px',
    width:'110px',
    border:'none',
    backgroundColor:'#0075f6',
    fontWeight:600,
    color:'white',
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
            <button style={Button_el} onClick = {() => setIsOpen(true)} >Prescribe</button>
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
