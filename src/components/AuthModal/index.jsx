import {useState} from 'react'
import { FaUserCircle } from "react-icons/fa";
import Modal from '../common/Modal'
import Input from '../common/Input'

const AuthModal = ({isOpen, setIsOpen}) => {
    const [visibleComponent, setVisibleComponent] = useState('SignIn')

    const showAuthModal = () => {
        switch(visibleComponent){
            case 'SignIn' :
                return <SignIn setVisibleComponent={setVisibleComponent} />
            case 'SignUp' : 
                return <SignUp setVisibleComponent={setVisibleComponent} />
            case 'Forgot' : 
                return <ForgotPassword setVisibleComponent={setVisibleComponent} />
            default :
                 return <SignIn />
        }
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {showAuthModal()}
        </Modal>
    )
}

const SignIn = ({setVisibleComponent}) => {
    return (
        <section>
        <FaUserCircle className="text-gray-800 text-100 mx-auto mt-32" />
        <h2 className="text-center text-20 text-gray-800 mt-24"> SignIn to my user account </h2>
        <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-20">
            <Input className="mb-14" placeholder="Username or Email Address" />
            <Input className="mb-28" placeholder="Password" />
            <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9">SignIn</button>
            <p onClick={() => setVisibleComponent('Forgot')} className="text-gray-600 text-14 text-center cursor-pointer"> forgot password? </p>
        </div>

        <div className="bg-gray-900 py-32 px-28 mt-28">
            <p className="text-gray-200 font-light text-center"> Don't have an account? </p>
            <p onClick={() => setVisibleComponent('SignUp')} className="text-gray-200 font-medium text-center cursor-pointer"> Register </p>
        </div>
        </section>
    )
}

const SignUp = ({setVisibleComponent}) => {
    return (
        <section>
        <h2 className="text-center font-semibold text-24 text-gray-800 mt-42 mb-34"> SignUp </h2>
        <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-20">
            <Input className="mb-14" placeholder="Full Name" />
            <Input className="mb-14" placeholder="Username" />
            <Input className="mb-14" placeholder="Email Address" />
            <Input className="mb-28" placeholder="Password" />
            <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9">SignUp</button>
        </div>

        <div className="bg-gray-900 py-32 px-28 mt-28">
            <p className="text-gray-200 font-light text-center"> Already have an account? </p>
            <p onClick={() => setVisibleComponent('SignIn')} className="text-gray-200 font-medium text-center cursor-pointer"> SignIn </p>
        </div>
        </section>
    )
}

const ForgotPassword = ({setVisibleComponent}) => {
    return (
        <section>
        <FaUserCircle className="text-gray-800 text-100 mx-auto mt-32" />
        <h2 className="text-center font-semibold text-24 text-gray-800 mt-22 mb-4"> Forgot Password? </h2>
        <p className="text-gray-600 font-light text-center px-52 mb-62"> Enter your email address and we will send you instructions to reset your password</p>
        <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-28 mb-76">
            <Input className="mb-14" placeholder="Email Address" />
            <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9">Continue</button>
        </div>

        <div className="bg-gray-900 py-18 px-28 mt-8">
            <p onClick={() => setVisibleComponent('SignIn')} className="text-gray-200 font-medium text-center cursor-pointer"> Back </p>
        </div>
        </section>
    )
}

export default AuthModal;