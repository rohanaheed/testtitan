import React from "react";
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <main className="flex gap-3">
                <section className="w-420">
                    <Sidebar />
                </section>
                <section className="flex flex-col flex-1 items-center justify-center">
                    <h1 className="font-bold text-56 my-99">Dashboard</h1>
                </section>

            </main>
        </>
    )
}

export default Dashboard