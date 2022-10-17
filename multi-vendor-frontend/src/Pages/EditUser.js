import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
const EditUser = () => {
    const [editUser, setEditUser] = useState({
        name: "",
        username: "",
        email: ""
    })
    const { name, username, email } = editUser;
    useEffect(() => {
        loadUsers()
    }, [])
    const Inputs = (e) => {
        const { name, value } = e.target
        setEditUser({ ...editUser, [name]: value })
    }
    const Submit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, editUser)
        Navigate('/')

    }
    const loadUsers = async () => {
        const data = await axios.get(`http://localhost:3001/users/${id}`)
        setEditUser(data.data)
    }
    const { id } = useParams()
    const Navigate = useNavigate();
    return (
        <div className='container'>
            <form onSubmit={Submit}>
                <div className='form-group mb-3 mt-5'>
                    <input type='text' className='form-control mt-3' placeholder='name...' value={name} name='name' onChange={Inputs} />
                    <input type='text' className='form-control mt-3' placeholder='username...' value={username} name='username' onChange={Inputs} />
                    <input type='email' className='form-control mt-3' placeholder='email...' value={email} name='email' onChange={Inputs} />
                    <button type='submit' className='btn btn-outline-warning'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default EditUser