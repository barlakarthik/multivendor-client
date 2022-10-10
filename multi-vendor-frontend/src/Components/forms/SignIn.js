import React, { useState } from 'react';
import axios from 'axios';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
// import { FaSymbol } from '@fortawesome/fontawesome-svg-core';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
    // const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const Submit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:5000/api/user/login`, {
                email, password
            });
            localStorage.getItem('userInfo', JSON.stringify(data))
            // navigate('/')
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='form-row'>
            <div className='form'>
                <form onSubmit={Submit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' value={email} name='email' onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Email</label>
                        <input type='password' id='password' value={password} name='passwword' onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div className='form-btn'>
                        <button>Login</button>
                    </div>
                    <div className='form-footer'>
                        <Link to='/register'>Register</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn