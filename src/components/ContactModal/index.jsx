import Modal from '../common/Modal'
import Input from '../common/Input'

const ContactModal = ({isOpen, setIsOpen}) => {

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className="text-center text-24 text-gray-800 mt-48"> Get in touch ! </h2>
            <p className="text-gray-600 mb-34 text-center"> We would love to hear from you ! </p>
        <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-42">
            <Input className="mb-14" placeholder="Email Address" />
            <Input className="mb-14" placeholder="Phone Number (optional)" />
            <textarea className="mb-28 w-full h-160 text-14" placeholder="Message (optional)">
            </textarea>    
        </div>

        <div className="bg-gray-900 py-18 px-28 mt-24 cursor-pointer">
            <p className="text-gray-200 font-medium text-center"> Submit message </p>
        </div>
    </Modal>
    )
}

export default ContactModal;