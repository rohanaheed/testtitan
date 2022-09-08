import Modal from '../common/Modal'
import Input from '../common/Input'
import { useState } from 'react'
import { useWeb3React } from '@web3-react/core';
import isEmpty from '../../utils/isEmpty';
import Web3 from 'web3';
import { auctionAbi } from '../../contract/abis/auctionsAbi';
import { auctionAddress } from '../../contract/addesses/auctionsAddress';
import axios from "axios";
import { API_URL } from '../../utils/contant';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const PlaceBidModal = ({ isOpen, setIsOpen, res }) => {
    const info = JSON.parse(localStorage.getItem('user_data'));
    const { account, library, activate, deactivate, useProvider } = useWeb3React();
    const [errors, setErrors] = useState('');
    const [loader, setLoader] = useState(false);
    const history = useHistory()
    const [formData, setFormData] = useState({
        bidPrice: res?.nftPrice ? res?.nftPrice : null,
        userPhone: null,
        message: null
    });
    const { bidPrice, userPhone, message } = formData;

    const validate = () => {
        const _errors = {};
        if (isEmpty(bidPrice)) {
            _errors.bidPrice = 'Please enter bid price.';
        }
        return _errors;
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        setErrors('');
    };

    const handleSubmit = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setLoader(true);
            let web3 = new Web3(library?.provider ? library?.provider : library?.currentProvider);
            let contract = new web3.eth.Contract(
                auctionAbi,
                auctionAddress
            )
            const headers = {
                Authorization: `Bearer ${info?.token}`,
            };
            contract.methods.bid(res?.nftId).send({ from: account, value: bidPrice })
                .then((res) => {
                    axios.patch(API_URL + `user/placebid`, formData, { headers: headers })
                        .then(res => {
                            setLoader(false);
                        })
                        .catch(err => {
                            setErrors({
                                'err': err?.data?.message
                            })
                            setLoader(false);
                        })
                })
                .catch((err) => {
                    console.log("err buy", err);
                    setLoader(false);
                })
        }
        setErrors(errors)
    }


    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <h2 className="text-center text-24 text-gray-800 mt-28"> Place a Bid </h2>
            {/* <p className="text-gray-600 mb-28 text-center"> We will get back to you asap ! </p> */}
            <div className="w-full lg:w-2/3 px-20 lg:px-0 mx-auto mt-22">
                <div>
                    <Input
                        placeholder="$ 30, 000"
                        name="bidPrice"
                        type={'bidPrice'}
                        value={bidPrice}
                        className='mb-14 input-border'
                        handleChange={handleChange}
                        errorMessage={errors.bidPrice}
                    />
                </div>
                <Input disabled={true} className="mb-14" value={info?.payload?.email} placeholder="Email Address" />
                <Input disabled={true} className="mb-14" placeholder="Wallet Address" value={account} />
                <Input
                    placeholder="Phone Number (optional)"
                    name="userPhone"
                    type={'userPhone'}
                    value={userPhone}
                    className='mb-14 input-border'
                    handleChange={handleChange}
                    errorMessage={errors.userPhone}
                />
                <textarea name='message' value={message} onChange={handleChange} className="mb-4 w-full h-80 text-14" placeholder="Message (optional)">
                </textarea>
                <div className="bg-gray-900 py-18 px-28 mt-24 cursor-pointer">
                    {loader ?
                        <p className="text-gray-200 font-medium text-center"> <div className='.loader1'></div> </p>
                        : <p className="text-gray-200 font-medium text-center" onClick={() => handleSubmit()}> Submit Bid </p>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default PlaceBidModal;