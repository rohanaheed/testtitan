import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';
import SimpleTable from '../../../components/common/Table/SimpleTable';
import { API_URL_ADMIN } from '../../../utils/contant';

const EventList = () => {
    const [loader, setLoader] = useState(true);
    const adminToken = localStorage.getItem('token');
    const [res, setRes] = useState([]);

    useEffect(() => {
        _getList()
    }, [])

    const _getList = () => {
        const headers = {
            Authorization: `Bearer ${adminToken}`,
        };
        axios.get(API_URL_ADMIN + 'admin/events', { headers: headers })
            .then(res => {
                setLoader(false);
                setRes(res?.data)
            })
            .catch(err => {
                setLoader(false);
            })
    }
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <section className="w-420">
                    <Sidebar />
                </section>
                <section className="flex flex-col flex-1 items-center justify-center mr-10">
                    <section className="w-full createItemContainer container mx-auto px-24 lg:px-99 mt-28">
                        <div className="flex items-center justify-between">
                            <h3 className="text-40 font-semibold text-left my-42">Events</h3>
                            <Link to="/admin/create-event"> <button className="bg-black text-white px-32 mb-22 py-6 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-black-600 relative top-0 hover:top-px" > Add Event </button> </Link>
                        </div>
                        <hr />
                    </section>
                    <SimpleTable rows={res} loader={loader}/>
                </section>
            </main>
        </>
    )
}

export default EventList;