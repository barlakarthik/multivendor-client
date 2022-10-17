import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
const About = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: ""
    })
    const { id } = useParams()
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = async () => {
        const data = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(data.data)
    }
    return (
        <div className='container'>

            <h1><center>
                <Link to='/'>
                    <button className='btn btn-outline-success'>Back To Home Page</button>
                </Link>
                User:ID{id}
            </center></h1>
            <form>
                <div className='form-group mb-3 mt-5'>
                    <ul className='list-group w-50'>
                        <li className='list-group-items'>{user.name}</li>
                        <li className='list-group-items'>{user.username}</li>
                        <li className='list-group-items'>{user.email}</li>
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default About