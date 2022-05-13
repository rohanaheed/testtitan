import { FaUserCircle } from "react-icons/fa";
import Modal from '../common/Modal'
import Input from '../common/Input'

const AuthModal = ({isOpen, setIsOpen}) => {

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <FaUserCircle className="text-gray-800 text-100 mx-auto mt-32" />
        <h2 className="text-center text-20 text-gray-800 mt-24"> SignIn to my user account </h2>
        <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-20">
            <Input className="mb-14" placeholder="Username or Email Address" />
            <Input className="mb-28" placeholder="Password" />
            <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-8">SignIn</button>
            <p className="text-gray-600 text-center cursor-pointer"> forgot password? </p>
        </div>

        <div className="bg-gray-900 py-31 px-28 mt-28">
            <p className="text-gray-200 font-light text-center"> Don't have an account? </p>
            <p className="text-gray-200 font-medium text-center cursor-pointer"> Register </p>
        </div>
    </Modal>
    )
}

export default AuthModal;