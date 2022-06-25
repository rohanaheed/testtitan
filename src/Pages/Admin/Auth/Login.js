import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/common/Input';
import { API_URL_ADMIN } from '../../../utils/contant';
import isEmpty from '../../../utils/isEmpty';
import validateEmail from '../../../utils/validate';

const AdminSignIn = () => {
    const [userData, setUserData] = useState({ email: '', password: '' });
    const { email, password } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
        setErrors({...errors, [e.target.name]: ''});
    }

    const validate = () => {
        const _errors = {};
        if (isEmpty(email)) {
            _errors.email = 'Please enter email.';
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
            setLoader(true);
            axios.post(API_URL_ADMIN + 'signin/admin', userData)
            .then(res => {
                localStorage.setItem('token', res?.data?.token);
                setLoader(false);
                history.push('/admin/dashboard')
            })
            .catch(err => {
                setErrors({ "err": err?.response?.data?.message })
                setLoader(false);
            })
        }
        setErrors(errors || {});
    }

    return (
        <>
            <main className='grid place-content-center' style={{ height: '100vh' }}>
                <main className='auth-container w-full sm:w-384 mx-auto'>
                    <span className="self-center logo text-xl text-black-500 mb-26 w-full font-semibold whitespace-nowrap flex items-center justify-center gap-2">
                        Admin Art Marketplace
                    </span>
                    {errors?.err && <p className="text-red-700 text-10 mt-4 ml-2 mb-15 w-full flex items-center justify-center "> {errors?.err} </p>}
                    <div className='w-full'>
                        <Input
                            placeholder='Email'
                            value={email}
                            name='email'
                            type="text"
                            handleChange={handleChange}
                            errorMessage={errors?.email}
                            className='mb-16'
                        />
                        <Input
                            placeholder='Password'
                            value={password}
                            name='password'
                            type="password"
                            handleChange={handleChange}
                            errorMessage={errors?.password}
                            className='mb-16'
                        />
                    </div>
                    {loader ?
                        <button type='button' className="bg-black text-white w-full mb-18 px-32 h-38 rounded-5 transition-all hover:bg-black	 relative top-0 hover:top-px" >
                            <div className="loader"></div>
                        </button>
                        : <button type='button' onClick={() => _login()} className="bg-black text-white w-full mb-18 px-32 h-38 rounded-5 transition-all hover:bg-black	 relative top-0 hover:top-px" >Sign In</button>
                    }
                </main>
            </main>

        </>
    )
}

export default AdminSignIn;