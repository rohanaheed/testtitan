import ReactModal from "react-modal"

const Modal = ({isOpen, setIsOpen, children}) => {
    
    const customStyles = {
        content: { position: 'relative', inset: '0', backgroundColor: '#FFFFFF', border: 'none',  borderRadius: '8px', width: '28rem', margin: '0 auto', padding: '0' , height: '34rem', overflowX: 'hidden'}
    }

    return (
      <ReactModal
        isOpen={isOpen}
        style={customStyles}
        onRequestClose={() => setIsOpen(false)}
      >
        {children}
      </ReactModal>
    )
}

export default Modal;