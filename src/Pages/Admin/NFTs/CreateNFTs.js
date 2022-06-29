import React, { useEffect, useState } from "react";
import { BsFileImage, BsAsterisk } from "react-icons/bs";
import Input from '../../../components/common/Input';
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';
import isEmpty from "../../../utils/isEmpty";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { API_URL_ADMIN } from "../../../utils/contant";

const CreateNFTs = () => {
    const [userData, setUserData] = useState({ name: '', description: '', imageUrl: '', artistName: '' });
    const { name, description, imageUrl, artistName } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [image, setImage] = useState('');
    const history = useHistory();
    const adminToken = localStorage.getItem('token');
    const editNFT = history?.location?.state?.row;

    useEffect(() => {
        if (editNFT?.name) {
            setUserData({
                name: editNFT?.name,
                description: editNFT?.description,
                imageUrl: editNFT?.image,
                artistName: editNFT?.artistName
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
            formData.append("artistName", artistName)
            const headers = {
                Authorization: `Bearer ${adminToken}`,
            };
            if (editNFT?.name) {
                axios.patch(API_URL_ADMIN + `admin/nft/edit/${editNFT?._id}`, formData, { headers: headers })
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
            <main className="flex gap-3">
                <section className="w-420">
                    <Sidebar />
                </section>
                <section className="flex flex-col flex-1 items-center justify-center">
                    <section className="createItemContainer container mx-auto px-24 lg:px-99 mt-28 mb-100  w-full">
                        <h3 className="text-40 font-semibold text-left my-42">{editNFT?.name ? "Edit" : "Add"} New NFT</h3>
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
                                    className={`absolute inset-0 opacity-0 cursor-pointer`}
                                    type="file"
                                    name='imageUrl'
                                    onChange={handleChange}
                                    accept=" .jpg , .jpeg , .png , .gif, .mp4, .mp3, .mpeg, .mov, video/quicktime"
                                />
                                {console.log("isEmpty(imageUrl)", isEmpty(imageUrl), image)}
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
                        </div>
                        <hr />
                        {loader ?
                            <button className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black relative top-0 hover:top-px">
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