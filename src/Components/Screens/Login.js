  import { useState } from "react"
import React from 'react'
import { Link,useNavigate, json } from "react-router-dom"
export default function Login() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginUser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({  email: credentials.email, password: credentials.password })
    })
    const data = await response.json();
    console.log(data);

    if (!data.success) {
      alert("Enter valid credentials")
    }
    
    else if(data.success){
      localStorage.setItem("userEmail",credentials.email)

      localStorage.setItem("authToken",json.authToken)
      console.log(localStorage.getItem("authToken"));
      navigate("/");
     }
    
  }

  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <div>

      <div className='container'>
        <form onSubmit={handleSubmit}>
         
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={onchange} value={credentials.email} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="text" className="form-control" name="password" id="exampleInputPassword1" onChange={onchange} value={credentials.password} />
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
          <Link to={"/createUser"} className='m-3 btn btn-danger'> I'm a new user</Link>
        </form>
      </div>

    </div>
  )
}
