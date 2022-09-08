import { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import axios from 'axios';  
import Modal from '../common/Modal'
import Input from '../common/Input'
import isEmpty from '../../utils/isEmpty';
import validateEmail from '../../utils/validate';
import { API_URL } from '../../utils/contant';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const AuthModal = ({ isOpen, setIsOpen }) => {
    const [visibleComponent, setVisibleComponent] = useState('SignIn')

    const showAuthModal = () => {
        switch (visibleComponent) {
            case 'SignIn':
                return <SignIn setVisibleComponent={setVisibleComponent} />
            case 'SignUp':
                return <SignUp setVisibleComponent={setVisibleComponent} />
            case 'Forgot':
                return <ForgotPassword setVisibleComponent={setVisibleComponent} />
            default:
                return <SignIn />
        }
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {showAuthModal()}
        </Modal>
    )
}

const SignIn = ({ setVisibleComponent }) => {
    const [errors, setErrors] = useState('');
    const history = useHistory()
    const [loader, setloader] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const { email, password } = formData;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors('');
    };

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email address.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        if (isEmpty(password)) {
            _errors.password = 'Please enter password.';
        }
        return _errors;
    }

    const _login = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setloader(true);
            axios.post(`${API_URL}signin`, formData)
                .then(res => {
                    setloader(false);
                    localStorage.setItem('user_data', JSON.stringify(res?.data));
                    history?.push('/explore');
                    window.location.reload();
                    // console.log(res)
                })
                .catch(err => {
                    console.log(err);
                    setErrors(err?.response?.data);
                    setloader(false);
                })
        }
        setErrors(errors || {});
    }
    return (
        <section>
            <FaUserCircle className="text-gray-800 text-100 mx-auto mt-32" />
            <h2 className="text-center text-20 text-gray-800 mt-24"> SignIn to my user account </h2>
            <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-20">
                <Input
                    placeholder='Email'
                    name="email"
                    type={'email'}
                    value={email}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.email}
                />
                <Input
                    placeholder='Password'
                    name="password"
                    type={'password'}
                    value={password}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.password}
                />
                {loader ?
                    <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9"><div className='loader1'></div></button> :
                    <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9" onClick={() => _login()}>SignIn</button>
                }
                <p onClick={() => setVisibleComponent('Forgot')} className="text-gray-600 text-14 text-center cursor-pointer"> forgot password? </p>
            </div>

            <div className="bg-gray-900 py-36 px-28 mt-28">
                <p className="text-gray-200 font-light text-center"> Don't have an account? </p>
                <p onClick={() => setVisibleComponent('SignUp')} className="text-gray-200 font-medium text-center cursor-pointer"> Register </p>
            </div>
        </section>
    )
}

const SignUp = ({ setVisibleComponent }) => {
    const [errors, setErrors] = useState('');
    const [loader, setloader] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });
    const { email, password, fullName, username } = formData;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors('');
    };

    const validate = () => {
        const _errors = {};
        if (isEmpty(fullName)) {
            _errors.fullName = 'Please enter full name.';
        }
        if (isEmpty(username)) {
            _errors.username = 'Please enter user name.';
        }
        if (isEmpty(email)) {
            _errors.email = 'Please enter email address.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        if (isEmpty(password)) {
            _errors.password = 'Please enter password.';
        }
        return _errors;
    }

    const _signUp = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setloader(true);
            axios.post(`${API_URL}signup`, formData)
                .then(res => {
                    setloader(false);
                    // localStorage.setItem('user_data', JSON.stringify(res?.data));
                    // navigate('/explore');
                    window.location.reload();
                    // console.log(res)
                })
                .catch(err => {
                    console.log(err);
                    setErrors(err?.response?.data);
                    setloader(false);
                })
        }
        setErrors(errors || {});
    }
    return (
        <section>
            <h2 className="text-center font-semibold text-24 text-gray-800 mt-42 mb-34"> SignUp </h2>
            <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-20">
                <Input
                    placeholder='Full Name'
                    name="fullName"
                    type={'fullName'}
                    value={fullName}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.fullName}
                />
                <Input
                    placeholder='Username'
                    name="username"
                    type={'username'}
                    value={username}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.username}
                />
                <Input
                    placeholder='Email'
                    name="email"
                    type={'email'}
                    value={email}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.email}
                />
                <Input
                    placeholder='Password'
                    name="password"
                    type={'password'}
                    value={password}
                    className='mb-16 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.password}
                />
                {loader ?
                    <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9"><div className='loader1'></div></button> :
                    <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9" onClick={() => _signUp()}>SignUp</button>
                }
            </div>

            <div className="bg-gray-900 py-32 px-28 mt-28">
                <p className="text-gray-200 font-light text-center"> Already have an account? </p>
                <p onClick={() => setVisibleComponent('SignIn')} className="text-gray-200 font-medium text-center cursor-pointer"> SignIn </p>
            </div>
        </section>
    )
}

const ForgotPassword = ({ setVisibleComponent }) => {
    const [errors, setErrors] = useState('');
    const [loader, setloader] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
    });
    const { email } = formData;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors('');
    };

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email address.';
        }
        else if (!validateEmail(email)) {
            _errors.email = 'It must be a valid email.';
        }
        return _errors;
    }

    const _forgot = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setloader(true);
            // axios.post(`${API_URL}/signin`, formData)
            //     .then(res => {
            //         setloader(false);
            //         localStorage.setItem('user_data', JSON.stringify(res?.data));
            //         navigate('/explore');
            //         window.location.reload();
            //         console.log(res)
            //     })
            //     .catch(err => {
            //         console.log(err);
            //         setErrors(err?.response?.data);
            //         setloader(false);
            //     })
        }
        setErrors(errors || {});
    }
    return (
        <section>
            <FaUserCircle className="text-gray-800 text-100 mx-auto mt-32" />
            <h2 className="text-center font-semibold text-24 text-gray-800 mt-22 mb-4"> Forgot Password? </h2>
            <p className="text-gray-600 font-light text-center px-52 mb-62"> Enter your email address and we will send you instructions to reset your password</p>
            <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-28 mb-76">
                <Input
                    placeholder='Email'
                    name="email"
                    type={'email'}
                    value={email}
                    className='mb-16'
                    handleChange={handleChange}
                    errorMessage={errors.email}
                />
                <button className="bg-gray-800 text-white w-full h-38 rounded-8 mb-9" onClick={() => _forgot()}>Continue</button>
            </div>

            <div className="bg-gray-900 py-18 px-28 mt-8">
                <p onClick={() => setVisibleComponent('SignIn')} className="text-gray-200 font-medium text-center cursor-pointer"> Back </p>
            </div>
        </section>
    )
}

export default AuthModal;