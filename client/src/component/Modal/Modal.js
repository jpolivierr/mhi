import React from 'react'
import './Modal.css'

const Modal = (props) => {
    return (
        <div className='modal' 
        onClick={()=> props.Modal()}
        style = {props.modalStyling}
        >
         
        </div>
    )
}

export default Modal