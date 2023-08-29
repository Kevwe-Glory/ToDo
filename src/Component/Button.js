import React from 'react';

const Button = ({ onClick }) => {
    return (
        <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={onClick}
        >
        Add More Project
        </button>
    );
};

export default Button;
