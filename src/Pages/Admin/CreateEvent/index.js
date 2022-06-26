import React, { useEffect, useState } from 'react';
import { BsFileImage, BsAsterisk } from "react-icons/bs";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/common/Input';
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';
import isEmpty from '../../../utils/isEmpty';
import { API_URL_ADMIN } from '../../../utils/contant';

const CreateEvent = () => {
    const [userData, setUserData] = useState({ name: '', description: '', imageUrl: '', startDate: '', endDate: '', startTime: '', endTime: '', artist: '', price: '' });
    const { name, description, imageUrl, startDate, endDate, startTime, endTime, artist, price } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [artis, setArtist] = useState('');
    const history = useHistory();
    const adminToken = localStorage.getItem('token');

    useEffect(() => {
        _getNFTsList();
    }, [])

    function getUnique(array) {
        var uniqueArray = [];

        for (let i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }
    const _getNFTsList = () => {
        const headers = {
            Authorization: `Bearer ${adminToken}`,
        };
        axios.get(API_URL_ADMIN + 'admin/nfts', { headers: headers })
            .then(res => {
                const tempArr = []
                for (let i = 0; i < res?.data?.length; i++) {
                    tempArr.push(res?.data?.[i]?.artistName)
                }
                const artistNames = getUnique(tempArr);
                setArtist(artistNames)
                setLoader(false);
            })
            .catch(err => {
                setLoader(false);
            })
    }
    const handleChange = event => {
        const { name, value } = event.target;
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setUserData({
                ...userData,
                [name]: img,
            });
        } else {
            setUserData({ ...userData, [name]: value });
        }
        setErrors({...errors, [event.target.name]: ''})
    }

    const validate = () => {
        const imageURL = imageUrl && URL.createObjectURL(imageUrl && imageUrl)
        const _errors = {};
        if (isEmpty(name)) {
            _errors.name = 'Please enter name.';
        }
        if (isEmpty(startDate)) {
            _errors.startDate = 'Please enter start date.';
        }
        if (isEmpty(startTime)) {
            _errors.startTime = 'Please enter start time.';
        }
        if (isEmpty(endTime)) {
            _errors.endTime = 'Please enter end time.';
        }
        if (isEmpty(endDate)) {
            _errors.endDate = 'Please enter end date.';
        }
        if (isEmpty(imageURL)) {
            _errors.imageUrl = 'Please upload image.';
        }
        if (isEmpty(price)) {
            _errors.price = 'Please upload price.';
        }
        if (isEmpty(description)) {
            _errors.description = 'Please enter description.';
        }
        return _errors;
    }

    const _createEvent = () => {
        const errors = validate();
        if (isEmpty(errors)) {
            setLoader(true);
            var formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("coverImage", imageUrl);
            formData.append("startDate", startDate + ` ${startTime}`);
            formData.append("endDate", endDate + ` ${endTime}`);
            const headers = {
                Authorization: `Bearer ${adminToken}`,
            };
            axios.post(API_URL_ADMIN + 'admin/event/add', formData, { headers: headers })
                .then(res => {
                    setLoader(false);
                    history.push('/admin/events')
                })
                .catch(err => {
                    setErrors({
                        'err': err?.data?.message
                    })
                    setLoader(false);
                })
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
                    <section className="w-full createItemContainer container mx-auto px-24 lg:px-99 mt-28 mb-100">
                        <h3 className="text-40 font-semibold text-left my-42">Add New Event</h3>
                        <p className="caption-text mb-16 flex items-start gap-1"><BsAsterisk className="text-8 text-red-600 relative top-1" /> Required fields</p>
                        <Input
                            className="mb-22"
                            label="Event name"
                            type='text'
                            placeholder="Name"
                            name="name"
                            value={name}
                            handleChange={handleChange}
                            errorMessage={errors?.name}
                        />
                        <div className='mb-18 w-4/4'>
                            <label className="text-gray-800 font-medium" htmlFor="#">Select Artist</label> <br />
                            <select name="artist" id="artist" onChange={(e) => handleChange(e)} className='w-full py-18 pl-18 text-14 pr-16 mt-8'>
                                {console.log(artis, userData)}
                                {artis?.length > 0 && artis?.map(item => (
                                    <option name="artist" value={item}>{item}</option>

                                ))}
                            </select>
                        </div>
                        <div className='mb-22'>
                            <label className="text-gray-800 font-medium" htmlFor="#">Event description</label> <br />
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
                            label="Price"
                            type='text'
                            placeholder="Price"
                            name="name"
                            value={name}
                            handleChange={handleChange}
                            errorMessage={errors?.name}
                        />
                        <div className='mb-32'>
                            <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Event Cover Image <BsAsterisk className="text-8 text-red-600 relative top-1" /></label>
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
                                {imageUrl ?
                                    <>
                                        <img src={URL.createObjectURL(imageUrl && imageUrl)} alt="" />
                                    </>
                                    : <BsFileImage className="text-56" style={{ color: 'rgb(179, 179, 179)' }} />
                                }
                            </section>
                            {errors?.imageUrl && <p className="text-red-700 text-10 mt-4 ml-2"> {errors?.imageUrl} </p>}
                        </div>
                        <div className='flex items-center gap-3 mb-18'>
                            <Input
                                className="mb-22"
                                label="Event start date"
                                type='date'
                                name="startDate"
                                value={startDate}
                                handleChange={handleChange}
                                errorMessage={errors?.startDate}
                            />
                            <Input
                                className="mb-22"
                                type='time'
                                label='Event start time'
                                name="startTime"
                                value={startTime}
                                handleChange={handleChange}
                                errorMessage={errors?.startTime}
                            />
                        </div>
                        <div className='flex items-center gap-3 mb-18'>
                            <Input
                                className="mb-22"
                                label="Event end date"
                                type='date'
                                name="endDate"
                                value={endDate}
                                handleChange={handleChange}
                                errorMessage={errors?.endDate}
                            />
                            <Input
                                className="mb-22"
                                type='time'
                                label='Event end time'
                                name="endTime"
                                value={endTime}
                                handleChange={handleChange}
                                errorMessage={errors?.endTime}
                            />
                        </div>
                        <hr />
                        {loader ?
                            <button className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black-600 relative top-0 hover:top-px">
                                <div className='loader'></div>
                            </button> :
                            <button onClick={() => _createEvent()} className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black-600 relative top-0 hover:top-px"> Create Event </button>
                        }
                    </section>
                </section>
            </main>
        </>
    )
}

export default CreateEvent;