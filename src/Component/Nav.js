import React from 'react';
import { NavLink } from 'react-router-dom';
// import search from '../asset/icon/search.png';
// import setting from '../asset/icon/setting.png';
import home from '../asset/icon/home.png';

const Nav = () => {
    return (
        <nav className="bg-stone-300 p-4 rounded-lg flex justify-center">
            <ul className="flex space-x-20">
                <NavLink
                    to="/"
                    id="home"
                    className="text-white flex items-center space-x-2"
                    aria-current="page"
                >
                <li>
                    <img src={home} alt="Home" className="w-6 h-6" />
                </li>
                </NavLink>
                {/* <NavLink
                    to="/search"
                    id="search"
                    className="flex items-center"
                >
                    <li>
                        <img src={search} alt="Search" className="w-6 h-6" />
                    </li>
                </NavLink> */}
                {/* <NavLink
                    to="/setting"
                    id="setting"
                    className="text-white flex items-center"
                >
                    <li>
                        <img src={setting} alt="Setting" className="w-6 h-6" />
                    </li>
                </NavLink> */}
            </ul>
        </nav>
    );
}

export default Nav;


// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import search from '../asset/icon/search.png';
// import setting from '../asset/icon/setting.png';
// import home from '../asset/icon/home.png';
// import Setting from './Setting'; // Import the SettingComponent

// const Nav = () => {
//     const [showSettings, setShowSettings] = useState(false);

//     const toggleSettings = () => {
//         setShowSettings(!showSettings);
//     };

//     return (
//         <nav className="rounded-full p-5 bg-[#75A7F9] flex justify-center">
//         <ul className="flex space-x-4">
//             <NavLink
//             to="/"
//             id="home"
//             className="text-white flex items-center space-x-2"
//             aria-current="page"
//             >
//             <li>
//                 <img src={home} alt="Home" className="w-6 h-6" />
//             </li>
//             </NavLink>
//             <button
//             className="flex items-center"
//             onClick={toggleSettings} // Toggle the settings component
//             >
//             <li>
//                 <img src={setting} alt="Setting" className="w-6 h-6" />
//             </li>
//             </button>
//             <NavLink
//             to="/search"
//             id="search"
//             activeClassName="text-coral-red"
//             className="flex items-center"
//             >
//             <li>
//                 <img src={search} alt="Search" className="w-6 h-6" />
//             </li>
//             </NavLink>
//         </ul>
//         {showSettings && <Setting />} {/* Display the settings component */}
//         </nav>
//     );
// };

// export default Nav;
