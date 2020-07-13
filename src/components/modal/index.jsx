
import React from 'react'
import  Modal from 'react-bootstrap/Modal'


const ModalBox ({ clicked, inputs, history, changed, create, loading, ...props }) => {
  // using react hook {useState} to manage state for the modal
  return (
    <Modal id='centeredmodal' centered {...props}>
      
    </Modal>
  )
}

export default ModalBox
