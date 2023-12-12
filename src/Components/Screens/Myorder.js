import React, { useEffect, useState } from 'react'
// import Footer from '../components/Footer';
import Footer from '../Footer';
// import Navbar from '../components/Navbar';

import Navbar from '../Navbar';
export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('email'))
        
        await fetch("http://localhost:5000/api/myorderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('email')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
            console.log(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    return (
        <div>
            <div>
                <Navbar />
            </div>

            

            <Footer />
        </div>
    )
}