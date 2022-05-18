import ReactModal from "react-modal"
import { useMediaQuery } from 'react-responsive'

const Modal = ({isOpen, setIsOpen, children}) => {
  const isxs = useMediaQuery({ query: '(min-width: 486px)' })
    
    const customStyles = {
        content: { position: 'relative', inset: '0', backgroundColor: '#FFFFFF', border: 'none',  borderRadius: '8px', width: isxs ? '28rem' : '92%', margin: '0 auto', padding: '0' , height: '34rem', overflow: 'hidden'}
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