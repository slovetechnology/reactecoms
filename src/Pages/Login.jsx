import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
    const [forms, setForms] = useState({
        email: '',
        password: ''
    })
    const handleform = (e) => {
        e.persist();
        setForms({...forms, [e.target.name]: e.target.value});
    }
    const submitForm = e => {
        e.preventDefault();
        const data = {
            "email": forms.email,
            "password": forms.password,
        }
        console.log(data)
    }
  return (
    <div className='bg-light vh-100 bg-gradient'>
        <div className="row">
            <div className="col-lg-6 vh-100 overflow-hidden d-none d-lg-block">
                <div className="formimg vh-100 w-100"></div>
            </div>
            <div className="col-lg-6">
                <div className="container">
                    <form className='w-350 bg-white p-3 rounded shadow mx-auto mt-5 position-relative' onSubmit={submitForm}>
                        <div className="text-center text-muted"> <i className="fas fa-user-alt fa-3x fa-fw"></i> </div>
                        <div className="fs-4 text-center fw-semibold text-secondary">Login your User Account</div>
                        <div className="position-absolute top-0 end-0 mt-3 me-2"> <Link to="/" className='btn btn-sm btn-primary py-0'>Home</Link> </div>
                        <div className="form-group mb-3">
                            <div className="text-end">Enter Email</div>
                            <input type="email" name="email" value={forms.email} onChange={handleform} className="form-control" />
                        </div>
                        <div className="form-group mb-2 position-relative">
                            <div className="text-end">Enter Password</div>
                            <input type="password" name="password" value={forms.password} onChange={handleform} className="form-control" />
                            <div className="position-absolute top-0 end-0 mt-4 pt-1 me-2 text-muted"> <i className="fas fa-eye-slash fa-lg fa-fw cs-pointer"></i> </div>
                        </div>
                        <div className="text-end mb-2"> <Link to="">Forgot Password..</Link> </div>
                        <div className="form-group">
                            <button className="btn btn-success w-100 py-2 text-capitalize shadow fw-semibold">create account</button>
                        </div>
                        <div className="text-center mt-3">Dont have an account? <Link to="/register">Create one</Link> </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login
