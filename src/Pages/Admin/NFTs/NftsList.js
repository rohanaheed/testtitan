import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../components/Admin/Navbar';
import Sidebar from '../../../components/Admin/Sidebar';
import SimpleTable from '../../../components/common/Table/SimpleTable';
import { API_URL_ADMIN } from '../../../utils/contant';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import { nftAbi } from '../../../contract/abis/nftAbi';
import { nftAddress } from '../../../contract/addesses/nftAddress';

const NftsList = () => {
    const [loader, setLoader] = useState(true);
    const adminToken = localStorage.getItem('token');
    const [res, setRes] = useState([]);
    const { account, library, activate, deactivate, useProvider } = useWeb3React();

    useEffect(() => {
        _getList()
    }, [])

    const _getList = () => {
        const headers = {
            Authorization: `Bearer ${adminToken}`,
        };
        axios.get(API_URL_ADMIN + 'admin/nfts', { headers: headers })
            .then(res => {
                setRes(res?.data)
                setLoader(false)
            })
            .catch(err => {
            })
    }

    const handelMint = (row) => {
        const headers = {
            Authorization: `Bearer ${adminToken}`,
        };
        var formData = new FormData();
        formData.append("nftStatus", 'Minted');
        let web3 = new Web3(library?.provider ? library?.provider : library?.currentProvider);
        let contract = new web3.eth.Contract(
            nftAbi,
            nftAddress
        )
        contract.methods.safeMint(account,row.nftId).send({ from: account, })
            .then((res) => {
                axios.patch(API_URL_ADMIN + `admin/nft/edit/${row?._id}`, formData, { headers: headers })
                    .then(res => {
                    })
                    .catch(err => {
                    })
            })
            .catch((err) => {
                console.log("err buy", err);
            })

    }
    return (
        <>
            <Navbar />
            <main>
                <section className="admin-sidebar">
                    <Sidebar />
                </section>
                <section className="page-content">
                    <section className="w-full createItemContainer mx-auto">
                        <div className="flex items-center justify-between my-16">
                            <h3 className="text-40 font-semibold text-left">NFTs</h3>
                            <Link to="/admin/create-nft"> <button className="bg-black text-white px-32 mb-22 py-6 rounded-5 transition-all flex items-center justify-center gap-3 hover:bg-black-600 relative top-0 hover:top-px" > Add NFT </button> </Link>
                        </div>
                        <hr />
                    </section>
                    <SimpleTable rows={res} loader={loader} handelMint={handelMint} />
                </section>
            </main>
        </>
    )
}

export default NftsList;