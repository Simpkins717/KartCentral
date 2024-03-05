import React from 'react';
import { FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
interface FooterProps {
  companyName: string;
  year: number;
}

const Footer: React.FC<FooterProps> = ({ companyName, year }) => {
  return (
    <footer className=' bg-gray-200 min-h-64   py-12'>
      <p>
        &copy; {year} {companyName}
      </p>

      <div className='flex justify-center space-x-2'>
        <a
          href='https://www.linkedin.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin size={48} />
        </a>
        <a
          href='https://twitter.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSquareXTwitter size={48} />
        </a>
        <a
          href='https://www.instagram.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaInstagramSquare size={48} />
        </a>
      </div>
      <p>Version 1.0.2</p>
    </footer>
  );
};

export default Footer;
