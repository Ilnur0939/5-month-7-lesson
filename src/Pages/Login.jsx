import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("token")

        if(token){
            navigate("/")
        }
    });

    async function handeSubmit(e){
        e.preventDefault();

        try {
            let res = await axios.post("https://reqres.in/api/login", values)
            if(res.status === 200){
                toast("Login Succsess", {type: "success"});
                setValues({email: "", password: ""})
                localStorage.setItem("token", res.data.token)
                navigate("/")
            }
        } catch (error) {
            toast(error.response.data.error, {type: "error"});
        }
    }

    function handleChange(e){
        setValues((oldValues) => {
            return {
                ...oldValues,
                [e.target.name]:e.target.value
            }
        })
    }

  return (
    <div className='min-vh-100 text-bg-light d-flex align-items-center justify-content-center '>
        <form onSubmit={handeSubmit} className='bg-white border w-50 p-3 '>
            <h1 className='display-1 text-center'>Login</h1>
            <div className='my-3 '>
                <label className='form-label' htmlFor="email">Your email</label>
                <input required onChange={handleChange} value={values.email} className='form-control' type="email" name="email" id="email" />
            </div>

            <div className='my-3'>
                <label className='form-label' htmlFor="password">Your Password</label>
                <input required onChange={handleChange}  value={values.password} className='form-control' type="password" name="password" id="password"/>
            </div>
            <div className='mt-3'>
                <button disabled={!values.email || !values.password.length > 4} className="btn btn-primary d-block w-100 fs-4">Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login