import { useState } from 'react';
import axios from 'axios';
import Modal from '../common/Modal'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import isEmpty from '../../utils/isEmpty';
import validateEmail from '../../utils/validate';
import { API_URL } from '../../utils/contant';
import Input from '../common/Input'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactModal = ({ isOpen, setIsOpen }) => {
    const [userData, setUserData] = useState({ email: '', message: '', phone: '' });
    const { email, message, phone } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    }

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        return _errors;
    }

    const _submit = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setLoader(true);
            axios.post(API_URL + 'user/contact', userData)
                .then(res => {
                    localStorage.setItem('token', res?.data?.token);
                    setLoader(false);
                    toast("Successfully done!");
                    // history.push('/admin/dashboard');
                    setTimeout(() => {
                        setIsOpen(false)
                    }, 1000)
                })
                .catch(err => {
                    setErrors({ "err": err?.response?.data?.message })
                    setLoader(false);
                })
        }
        setErrors(errors || {});
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h2 className="text-center text-24 text-gray-800 mt-48"> Get in touch ! </h2>
            <p className="text-gray-600 mb-34 text-center"> We would love to hear from you ! </p>
            <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-42">
                <Input
                    placeholder='Email address'
                    name="email"
                    type={'email'}
                    value={email}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.email}
                />
                <Input
                    placeholder='Phone Number  (optional)'
                    name="phone"
                    type={'phone'}
                    value={phone}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.phone}
                />
                <textarea value={message} name="message" onChange={(e) => handleChange(e)} className="mb-28 w-full h-160 text-14" placeholder="Message (optional)">
                </textarea>
            </div>
            {loader ?
                <div className="bg-gray-900 py-18 px-28 mt-24 cursor-pointer">
                    <p className="text-gray-200 font-medium text-center">
                        <div className='loader1'></div>
                    </p>
                </div> :
                <div className="bg-gray-900 py-18 px-28 mt-24 cursor-pointer">
                    <p className="text-gray-200 font-medium text-center" onClick={() => _submit()}> Submit message </p>
                    <ToastContainer />
                </div>
            }
        </Modal>
    )
}

export default ContactModal;