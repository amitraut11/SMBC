import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Importing CSS styles

interface HeaderProps {
  onTabClick: (tab: string) => void;
  backgroundColor?: string; // Optional prop for background color
  textColor?: string; // Optional prop for text color
}

const Header: React.FC<HeaderProps> = ({ onTabClick, backgroundColor = '#3b82f6', textColor = 'white' }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setDropdownOpen(false);
  };

  return (
    <div className="header" style={{ backgroundColor }}>
      <div className="container flex">
        <div className="flex items-center">
          <button onClick={handleDropdownToggle} className={`text-${textColor} hover:text-gray-200`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <div className="absolute bg-white text-blue-600 shadow-lg mt-2 ml-16 rounded-md z-10" style={{ marginTop: '8rem' }}>
              <ul className="flex flex-col">
                <li>
                  <button
                    onClick={() => handleNavigation('/dashboard')}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/portfolio')}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Wallet
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/settings')}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Settings
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation('/account')}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Profile
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <h1 className={`text-xl font-bold text-${textColor}`}>XYZ BANK</h1>

        <div className="flex space-x-6">
          <button
            onClick={() => onTabClick('portfolio')}
            className={`flex items-center hover:text-gray-200 transition duration-300 text-${textColor}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 3h12a1 1 0 011 1v2H5V4a1 1 0 011-1zm1 14v5a1 1 0 001 1h8a1 1 0 001-1v-5m-9 0V8a1 1 0 011-1h8a1 1 0 011 1v9"
              />
            </svg>
            Portfolio
          </button>

          <button
            onClick={() => onTabClick('account')}
            className={`flex items-center hover:text-gray-200 transition duration-300 text-${textColor}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A4.992 4.992 0 0112 15a4.992 4.992 0 016.879 2.804m-6.879 2.196h0a4.992 4.992 0 01-6.879-2.804m6.879 2.196a4.992 4.992 0 006.879-2.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
