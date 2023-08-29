import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewSettings = () => {
    const [selectedColor, setSelectedColor] = useState('blue'); // Default color

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    useEffect(() => {
        // Update CSS variables when selectedColor changes
        document.documentElement.style.setProperty('--primary-color', selectedColor);
    }, [selectedColor]);

    const themeColors = ['blue', 'green', 'purple', 'red', 'yellow'];

    return (
        <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">View Settings</h2>
            <div className="mb-4">
                <label className="block font-semibold mb-1">Select Theme Color:</label>
                <select
                    value={selectedColor}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="border p-1 rounded-md"
                >
                    {themeColors.map(color => (
                        <option key={color} value={color}>{color}</option>
                    ))}
                </select>
            </div>
            {/* Other view settings UI */}
            <Link to="/settings/feedback">Go to Feedback and Support</Link>
        </div>
    );
};

export default ViewSettings;
