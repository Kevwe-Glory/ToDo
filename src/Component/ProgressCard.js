import React from 'react';

const ProgressCard = ({ percentage }) => {
    return (
        <>
        <h4 className='text-3xl font-montserrat font-bold mb-5'>Let's make an habit Together!!</h4>
        <div className="p-4 bg-[#75A7F9] rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Progress Card</h2>
            <div className="relative h-6 bg-indigo-200 rounded-full">
                <div style={{ width: `${percentage}%` }} className="h-full bg-indigo-500 rounded-full"></div>
            </div>
            <p className="text-sm mt-2">{percentage}% Complete</p>
        </div>
        </>
    );
};

export default ProgressCard;
