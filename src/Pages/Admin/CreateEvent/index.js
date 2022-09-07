import React, { useEffect, useState } from 'react';
import { BsFileImage, BsAsterisk } from "react-icons/bs";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Input from '../../../components/common/Input';
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';
import isEmpty from '../../../utils/isEmpty';
import { API_URL_ADMIN } from '../../../utils/contant';
import Multiselect from 'multiselect-react-dropdown';
import moment from 'moment';
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const CreateEvent = () => {
    const [userData, setUserData] = useState({ name: '', description: '', imageUrl: '', startDate: null, endDate: null, startTime: '', endTime: '', artist: '', price: '' });
    const { name, description, imageUrl, startDate, endDate, startTime, endTime, artist, price } = userData;
    const [errors, setErrors] = useState({});
    const [loader, setLoader] = useState(false);
    const [art, setArtist] = useState('');
    const [image, setImage] = useState('');
    const history = useHistory();
    const adminToken = localStorage.getItem('token');
    const editNFT = history?.location?.state?.row;
    const [options, setOpetions] = useState([]);
    const [selected, setSelected] = useState([]);
    const [nfts, setNFTs] = useState([]);

    useEffect(() => {
        if (editNFT?.name) {
            setUserData({
                name: editNFT?.name,
                description: editNFT?.description,
                imageUrl: editNFT?.coverImage,
                artistName: editNFT?.artistName,
                price: editNFT?.minimumBid,
                startDate: moment.utc(editNFT.startDate).format('DD/MM/YYYY hh:mm:ss'),
                endDate: moment.utc(editNFT.endDate).format('DD/MM/YYYY hh:mm:ss'),
            })
            setImage(editNFT?.coverImage);
        }
    }, [history, editNFT])

    useEffect(() => {
        _getNFTsList();
    }, [])

    useEffect(() => {
        const tempArr = []
        for (let j = 0; j < nfts?.length; j++) {
            for (let i = 0; i < editNFT?.NFTIds?.length; i++) {
                if (nfts[j]?._id === editNFT?.NFTIds[i]) {
                    tempArr.push(nfts[j])
                }
            }
        }
        setSelected(tempArr);
    }, [nfts, editNFT])

    function getUnique(array) {
        var uniqueArray = [];
        for (let i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }

    const onSelect = (e) => {
        setSelected(e)
    }

    const onRemove = (e) => {
        setSelected(e)
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
                const uniqueArtist = []
                for (let i = 0; i < artistNames?.length; i++) {
                    uniqueArtist.push({
                        "name": artistNames[i],
                        "id": i
                    })
                }

                setNFTs(res?.data?.filter(item => item?.nftStatus === "Minted"));
                setArtist(uniqueArtist);
                setOpetions(res?.data.filter(item => item?.artistName === uniqueArtist[0]?.name))
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
                [name]: URL.createObjectURL(img),
            });
            setImage(img);
        } else {
            if (name === "artist") {
                const tempArr = nfts?.filter(item => item?.artistName === value);
                setOpetions(tempArr)
            }
            setUserData({ ...userData, [name]: value });
        }
        setErrors({ ...errors, [event.target.name]: '' })
    }

    const validate = () => {
        // const imageURL = imageUrl && URL.createObjectURL(imageUrl && imageUrl)
        const _errors = {};
        if (isEmpty(name)) {
            _errors.name = 'Please enter name.';
        }
        if (isEmpty(startDate)) {
            _errors.startDate = 'Please enter start date and time.';
        }
        // if (isEmpty(startTime)) {
        //     _errors.startTime = 'Please enter start time.';
        // }
        // if (isEmpty(endTime)) {
        //     _errors.endTime = 'Please enter end time.';
        // }
        if (isEmpty(endDate)) {
            _errors.endDate = 'Please enter end date and time.';
        }
        if (isEmpty(imageUrl)) {
            _errors.imageUrl = 'Please upload image.';
        }
        if (isEmpty(selected)) {
            _errors.selected = 'Please select list of nfts';
        }
        // if (isEmpty(price)) {
        //     _errors.price = 'Please enter price.';
        // }
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
            formData.append("coverImage", image);
            formData.append("startDate", startDate?.split(' ')[0] + " " + startDate?.split(' ')[1]);
            formData.append("endDate", endDate?.split(' ')[0] + " " + endDate?.split(' ')[1]);
            // formData.append("minimumBid", price);
            for (let i = 0; i < selected?.length; i++) {
                formData.append(`NFTIds[${i}]`, selected[i]?._id)
            }
            const headers = {
                Authorization: `Bearer ${adminToken}`,
            };
            // debugger
            if (editNFT?.name) {
                axios.patch(API_URL_ADMIN + `admin/event/edit/${editNFT?._id}`, formData, { headers: headers })
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
            } else {
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
                    <section className="w-full createItemContainer container mb-100 my-16">
                        <h3 className="text-40 font-semibold text-left">{editNFT?.name ? "Edit" : "Add"} New Event</h3>
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
                            {/* <Multiselect
                                options={art ? art : []} // Options to display in the dropdown
                                // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                // onSelect={this.onSelect} // Function will trigger on select event
                                // onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                            /> */}
                            <select name="artist" id="artist" onChange={(e) => handleChange(e)} className='w-full py-4 pl-16 text-14 pr-16 mt-8 select-border'>
                                {art?.length > 0 && art?.map(item => (
                                    <>
                                        <option name="artist" value={item?.name}>{item?.name}</option>
                                    </>
                                ))}
                            </select>
                        </div>
                        <div className='mb-18 w-4/4'>
                            <label className="text-gray-800 font-medium" htmlFor="#">Select NFTs</label> <br />
                            <Multiselect
                                onSelect={onSelect}
                                selectedValues={selected}
                                onRemove={onRemove}
                                options={options} // Options to display in the dropdown
                                // selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                                // onSelect={this.onSelect} // Function will trigger on select event
                                // onRemove={this.onRemove} // Function will trigger on remove event
                                displayValue="name" // Property name to display in the dropdown options
                            />
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
                        {/* <Input
                            className="mb-22"
                            label="Price"
                            type='text'
                            placeholder="Price"
                            name="price"
                            value={price}
                            handleChange={handleChange}
                            errorMessage={errors?.price}
                        /> */}
                        <div className='mb-32'>
                            <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Event Cover Image <BsAsterisk className="text-8 text-red-600 relative top-1" /></label>
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
                                {imageUrl ?
                                    <>
                                        <img src={imageUrl && imageUrl} alt="" />
                                    </>
                                    : <BsFileImage className="text-56" style={{ color: 'rgb(179, 179, 179)' }} />
                                }
                            </section>
                            {errors?.imageUrl && <p className="text-red-700 text-10 mt-4 ml-2"> {errors?.imageUrl} </p>}
                        </div>
                        <div className='flex items-center gap-3 mb-18'>
                            <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">Start Date and Time</label>
                            <Datetime
                                timeFormat={'HH:mm:ss'}
                                // className={` ${errors?.startDate && 'input-error'}`}
                                onChange={(e) => setUserData({ ...userData, 'startDate': moment.utc(e?._d).format('DD/MM/YYYY hh:mm:ss') })}
                            />

                            {/* <Input
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
                            /> */}
                        </div>
                        {errors?.startDate && <p className="text-red-700  mb-22 text-10 ml-2"> {errors?.startDate} </p>}

                        <div className='flex items-center gap-3 mb-18'>
                            <label className="text-gray-800 font-medium mb-6 flex items-start gap-1" htmlFor="#">End Date and Time</label>
                            <Datetime
                                timeFormat={'HH:mm:ss'}
                                onChange={(e) => setUserData({ ...userData, 'endDate': moment.utc(e?._d).format('DD/MM/YYYY hh:mm:ss') })}
                            />
                            {/* <Input
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
                            /> */}
                        </div>
                        {errors?.endDate && <p className="text-red-700  mb-22 text-10 ml-2"> {errors?.endDate} </p>}

                        <hr />
                        {loader ?
                            <button className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black-600 relative top-0 hover:top-px h-11 loader-width">
                                <div className='loader'></div>
                            </button> :
                            <button onClick={() => _createEvent()} className="bg-black text-white px-32 py-10 mt-52 rounded-5 transition-all hover:bg-black-600 relative top-0 hover:top-px loader-width">{editNFT ? "Edit Event" : "Create Event"}</button>
                        }
                    </section>
                </section>
            </main>
        </>
    )
}

export default CreateEvent;