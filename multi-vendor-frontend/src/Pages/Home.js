import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = async () => {
        const data = await axios.get('http://localhost:3001/users')
        setUsers(data.data)
    }
    const DeleteUser = async (i) => {
        await axios.delete(`http://localhost:3001/users/${i}`)
        alert('are you sure!!')
        loadUsers()
    }
    return (
        <div className='container'>

            <table className="table">
                <thead className='bg-secondary text-white'>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/about/${user.id}`}>
                                    <button className='btn btn-outline-info'>View</button>
                                </Link>
                                <Link to={`/edit/user/${user.id}`}>
                                    <button className='btn btn-outline-secondary'>Edit</button>
                                </Link>
                                <Link>
                                    <button className='btn btn-outline-danger' onClick={() => DeleteUser(user.id)}>Delete</button>
                                </Link>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default Home