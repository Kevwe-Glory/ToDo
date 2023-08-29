// components/LoginForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        // <div className='max-w-md mx-auto mt-9'>
        <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
            <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                Username
            </label>
            <input
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='username'
                type='text'
                placeholder='Username'
                value={username}
                onChange={handleUsernameChange}
            />
            </div>
            <div className='mb-6'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
            </label>
            <input
                className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                id='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={handlePasswordChange}
            />
            </div>
            <div className='flex items-center justify-between'>
            <Link to='/home'>
                    <button className='bg-black hover:bg-stone-700 text-white border rounded-full py-2 px-4 mt-4'>
                        Login
                    </button>
                </Link>
            </div>
        </form>
        </div>
    );
};

export default Login;
