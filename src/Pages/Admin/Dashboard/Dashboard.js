import React from "react";
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <main>
                <section className="admin-sidebar">
                    <Sidebar />
                </section>
                <section className="page-content bg-white h-100vh">
                    <h1 className="font-bold bg-white text-24">Dashboard</h1>
                </section>

            </main>
        </>
    )
}

export default Dashboard