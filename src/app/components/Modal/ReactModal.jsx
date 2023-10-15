import React from 'react'
import Modal from 'react-responsive-modal'

export default function ReactModal(props) {
  return (
    <Modal
      {...props}
      styles={{
        ...props?.styles,
        modal:{
          ...props.styles?.modal,
          maxWidth: "none",
        }
      }}
    >
      {props.children}
    </Modal>
  )
}
