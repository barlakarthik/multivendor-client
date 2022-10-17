import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const Navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })
    const { name, username, email } = user;
    const Inputs = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }
    const Submit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/users', user)
        Navigate('/')
    }
    return (
        <div className='container'>
            <h4><center>Add User</center></h4>
            <form onSubmit={Submit}>
                <div className='form-group mb-3 mt-5'>
                    <input type='text' className='form-control mt-3' placeholder='name...' value={name} name='name' onChange={Inputs} />
                    <input type='text' className='form-control mt-3' placeholder='username...' value={username} name='username' onChange={Inputs} />
                    <input type='email' className='form-control mt-3' placeholder='email...' value={email} name='email' onChange={Inputs} /><br />
                    <button type='submit' className='btn btn-outline-primary'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddUser