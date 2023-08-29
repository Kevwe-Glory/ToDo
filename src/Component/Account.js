import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountForm = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Password:', password);
        console.log('Image:', image);
        navigate('/login');
    };

    return (
        <div className="flex justify-center items-center  h-screen">
            <form onSubmit={handleSubmit} className=" p-8  bg-[#75A7F9] rounded-lg ">
                <h2 className="text-2xl font-semibold mb-4">Create an Account</h2>
                <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
                Name:
            </label>
            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border rounded-full"
                placeholder="Enter your name"
                required
            />
            </div>
            <div className="mb-4">
            <label htmlFor="password" className="block mb-1">
                Password:
            </label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-full"
                placeholder="Enter your password"
                required
            />
            </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block mb-1">
                        Image:
                    </label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full p-2 border rounded-full"
                        accept="image/*"
                        required
                    />
                </div>
                <button
                    className='bg-black hover:bg-stone-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                    type='submit'
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default AccountForm;
