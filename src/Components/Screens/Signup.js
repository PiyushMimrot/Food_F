import React from 'react'
import { Link, useNavigate, json } from 'react-router-dom'

import { useState } from 'react';
export default function Signup() {
const navigate  = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", location: "" });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name : credentials.name,email:credentials.email, password : credentials.password,location:credentials.location})
        })
            const data =  await response.json();
      console.log(data);
     
      if(data.success ){
        // localStorage.setItem("token",json.authToken);
       navigate("/Login") ;   
    }else{
        alert("Enter  signup valid credentials");  

    }

}
    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name"  className="form-label" >Name</label>
                        <input type="text" className="form-control"  name='name' onChange={onchange} value={credentials.name} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchange} value={credentials.email} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" className="form-control" name="password" id="exampleInputPassword1" onChange={onchange} value={credentials.password} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="location" onChange={onchange} value={credentials.location} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to={"/login"} className='m-3 btn btn-danger'> Already a user</Link>
                </form>
            </div>
        </>
    )
}
