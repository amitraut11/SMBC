import React from 'react';
import './Footer.css';

interface FooterProps {
  email: string;
  year: number;
  backgroundColor?: string; // Optional prop for background color
  textColor?: string; // Optional prop for text color
}

const Footer: React.FC<FooterProps> = ({
  email,
  year,
  backgroundColor = '#3b82f6', // Default color if not provided
  textColor = 'white', // Default text color if not provided
}) => {
  return (
    <footer className="footer" style={{ backgroundColor, color: textColor }}>
      <div className="container">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm">&copy; {year} XYZ Bank. All rights reserved.</p>
          <p className="text-sm">
            For inquiries, email: <a href={`mailto:${email}`} className="underline">{email}</a>
          </p>
        </div>

        <div className="flex space-x-6">
          <a href="#privacy" className="text-sm hover:text-gray-200 transition duration-300">Privacy Policy</a>
          <a href="#terms" className="text-sm hover:text-gray-200 transition duration-300">Terms of Service</a>
          <a href="#contact" className="text-sm hover:text-gray-200 transition duration-300">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
