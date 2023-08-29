import React from 'react';
import notification from '../asset/icon/notification.png';

const Profile = () => {
  return (
    <div className="bg-white border rounded-lg shadow-lg p-6 flex items-center">
      <img
        className="w-16 h-16 rounded-full mr-4"
        src="https://via.placeholder.com/150"
        alt="Profile"
      />
      <div className="flex-1">
        <h4 className="text-xl font-semibold mb-1">John Doe</h4>
        <p className="text-gray-600">Frontend Developer</p>
      </div>
      <div className="flex items-end space-x-2">
        <img
          className="w-6 h-6"
          src={notification}
          alt="Notification"
        />
      </div>
    </div>
  );
};

export default Profile;