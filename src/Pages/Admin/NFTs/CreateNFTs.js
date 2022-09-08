import React, { useEffect, useState } from "react";
import { BsFileImage, BsAsterisk } from "react-icons/bs";
import Input from '../../../components/common/Input';
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';
import isEmpty from "../../../utils/isEmpty";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL_ADMIN } from "../../../utils/contant";
import DateTimePicker from 'react-datetime-picker';
import moment from "moment";
import Web3 from 'web3';
import { useWeb3React } from "@web3-react/core";
import { auctionAbi } from "../../../contract/abis/auctionsAbi";
import { auctionAddress } from "../../../contract/addesses/auctionsAddress";

const CreateNFTs = () => {
    const [userData, setUserData] = useState({ name: '', description: '', imageUrl: '', artistName: '', startDate: '', endDate: '', price: '' });
    const { name, description, imageUrl, artistName, startDate, endDate, price } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [image, setImage] = useState('');
    const history = useHistory();
    const adminToken = localStorage.getItem('token');
    const { account, library, activate, deactivate, useProvider } = useWeb3React();
    const editNFT = history?.location?.state?.row;

    useEffect(() => {
        if (editNFT?.name) {
            setUserData({
                name: editNFT?.name,
                description: editNFT?.description,
                imageUrl: editNFT?.image,
                artistName: editNFT?.artistName,
                price: editNFT?.nftPrice,
                startDate: editNFT?.startDate ? new Date(editNFT?.startDate) : '',
                endDate: editNFT?.endDate ? new Date(editNFT?.endDate) : '',
            })
            setImage(editNFT?.image);
        }
    }, [history, editNFT])

    const handleChange = event => {
        const { name, value } = event.target;
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setUserData({
                ...userData,
                [name]: URL.createObjectURL(img),
            });
            setImage(img);
        } else {
            setUserData({ ...userData, [name]: value });
        }
        setErrors({ ...errors, [event.target.name]: '' })
    }

    const validate = () => {
        const _errors = {};
        if (isEmpty(name)) {
            _errors.name = 'Please enter name.';
        }
        if (isEmpty(artistName)) {
            _errors.artistName = 'Please enter artis name.';
        }
        if (isEmpty(imageUrl)) {
            _errors.imageUrl = 'Please upload image.';
        }
        if (isEmpty(description)) {
            _errors.description = 'Please enter description.';
        }
        return _errors;
    }

    const _createNFT = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setLoader(true);
            var formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("image", image);
            formData.append("artistName", artistName);
            const _start = moment.utc(startDate).format('HH:mm:ss');
            const _end = moment.utc(endDate).format('HH:mm:ss');
            debugger
            console.log(editNFT?.nftId, price, _start, _end)
            if (history?.location?.state?.time) {
                formData.append("startDate", _start);
                formData.append("endDate", _end);
                formData.append("nftPrice", price);
                formData.append("nftStatus", 'Auction');
            }
            const headers = {
                Authorization: `Bearer ${adminToken}`,
            };
            if (editNFT?.name) {
                if (history?.location?.state?.time) {
                    let web3 = new Web3(library?.provider ? library?.provider : library?.currentProvider);
                    let contract = new web3.eth.Contract(
                        auctionAbi,
                        auctionAddress
                    )
                    contract.methods.list(editNFT?.nftId, price, _start, _end).send({ from: account, })
                        .then((res) => {
                            axios.patch(API_URL_ADMIN + `admin/nft/edit/${editNFT?._id}`, formData, { headers: headers })
                                .then(res => {
                                    setLoader(false);
                                    history.push('/admin/events');
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
                        })
                } else {
                    axios.patch(API_URL_ADMIN + `admin/nft/edit/${editNFT?._id}`, formData, { headers: headers })
                        .then(res => {
                            setLoader(false);
                            history.push('/admin/nfts');
                        })
                        .catch(err => {
                            setErrors({
                                'err': err?.data?.message
                            })
                            setLoader(false);
                        })
                }
            } else {
                axios.post(API_URL_ADMIN + 'admin/nft/add', formData, { headers: headers })
                    .then(res => {
                        setLoader(false);
                        history.push('/admin/nfts')
                    })
                    .catch(err => {
                        setErrors({
                            'err': err?.data?.message
                        })
                        setLoader(false);
                    })
            }
        }
        setErrors(errors || {});
    }

    return (
        <>
            <Navbar />
            <main>
                <section className="admin-sidebar">
                    <Sidebar />
                </section>
                <section className="page-content">
                    <section className="createItemContainer container mx-auto mb-100 my-16 w-full">
                        <h3 className="text-40 font-semibold text-left">{editNFT?.name ? "Edit" : "Add"} New NFT</h3>
                        <p className="caption-text mb-16 flex items-start gap-1"><BsAsterisk className="text-8 text-red-600 relative top-1" /> Required fields</p>
                        <Input
                            className="mb-22"
                            label="Nft name"
                            type='text'
                            name="name"
                            value={name}
                            handleChange={handleChange}
                            errorMessage={errors?.name}
                        />
                        <div className='mb-22'>
                            <label className="text-gray-800 font-medium" htmlFor="#">NFT description</label> <br />
                            <p className='caption-text mt-6 mb-10'>The description will be included on the item's detail page underneath its image. Markdown syntax is supported.</p>
                            <textarea
                                className={`w-full py-18 text-14 px-16 h-176 ${errors?.description && 'input-error'}`}
                                placeholder='Provide a detailed description of your item.'
                                name="description"
                                value={description}
                                onChange={handleChange}
                                errorMessage={errors?.description}
                            >
                            </textarea>
                            {errors?.description && <p className="text-red-700 text-10 mt-4 ml-2"> {errors?.description} </p>}
                        </div>
                        <Input
                            className="mb-22"
                            label="Artist Name"
                            type='text'
                            name="artistName"
                            value={artistName}
                            handleChange={handleChange}
                            errorMessage={errors?.artistName}
                        />
                        <div className='mb-32'>
                            <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">NFT Cover Image <BsAsterisk className="text-8 text-red-600 relative top-1" /></label>
                            <p className='caption-text mt-6 mb-10'>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB </p>
                            <section className={`upload-modal-container cursor-pointer`}>
                                <input
                                    id="file-input"
                                    // className={`inset-0 opacity-0 cursor-pointer`}
                                    type="file"
                                    name='imageUrl'
                                    onChange={handleChange}
                                    accept=" .jpg , .jpeg , .png , .gif, .mp4, .mp3, .mpeg, .mov, video/quicktime"
                                />
                                {!isEmpty(imageUrl) ?
                                    <>
                                        {imageUrl?.type?.split('/')?.includes('video') ?
                                            <video width="320" height="240" controls>
                                                <source src={imageUrl && imageUrl} type="video/mp4" />
                                            </video> :
                                            <img src={imageUrl && imageUrl} alt="" />
                                        }
                                    </>
                                    : <BsFileImage className="text-56" style={{ color: 'rgb(179, 179, 179)' }} />
                                }
                            </section>
                            {errors?.imageUrl && <p className="text-red-700 text-10 mt-4 ml-2"> {errors?.imageUrl} </p>}
                            {history?.location?.state?.time &&
                                <>
                                    <Input
                                        className="mb-22"
                                        label="Minimum Bid"
                                        type='text'
                                        name="price"
                                        value={price}
                                        handleChange={handleChange}
                                        errorMessage={errors?.price}
                                    />
                                    <div className='flex items-center gap-3 mt-80 mb-18'>
                                        <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Start Date and Time</label>
                                        <DateTimePicker minDate={new Date()} onChange={(e) => setUserData({ ...userData, 'startDate': e })} format="y-MM-dd HH:mm:ss" value={startDate} />
                                    </div>
                                    {errors?.startDate && <p className="text-red-700  mb-22 text-10 ml-2"> {errors?.startDate} </p>}
                                    <div className='flex items-center gap-3 mt-30 mb-18'>
                                        <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">End Date and Time</label>
                                        <DateTimePicker minDate={new Date()} onChange={(e) => setUserData({ ...userData, 'endDate': e })} format="y-MM-dd HH:mm:ss" value={endDate} />
                                    </div>
                                </>
                            }
                            {errors?.endDate && <p className="text-red-700  mb-22 text-10 ml-2"> {errors?.endDate} </p>}
                        </div>
                        <hr />
                        {loader ?
                            <button className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black-600 relative top-0 hover:top-px h-11 loader-width">
                                <div className='loader'></div>
                            </button>
                            : <button onClick={() => _createNFT()} className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px">{editNFT ? 'Edit NFT' : 'Create NFT'} </button>
                        }
                    </section>
                </section>
            </main>
        </>
    )
}

export default CreateNFTs;