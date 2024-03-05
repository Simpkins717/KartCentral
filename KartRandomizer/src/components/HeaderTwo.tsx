import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const modalAnimation = useSpring({
    transform: showModal ? 'translateY(0%)' : 'translateY(100%)',
    opacity: showModal ? 1 : 0,
  });

  return (
    <header
      ref={headerRef}
      className='bg-slate-700 p-4 flex justify-between items-center relative'
    >
      <div className='text-white text-lg font-bold'>Kart Enjoyers</div>
      <nav className='hidden md:flex'>
        <a href='/' className='text-white mx-2 md:mx-4'>
          Home
        </a>
        <a href='/tracks' className='text-white mx-2 md:mx-4'>
          Tracks
        </a>
        <a href='/about' className='text-white mx-2 md:mx-4'>
          About
        </a>
      </nav>
      <div
        className='cursor-pointer md:hidden text-white'
        onClick={toggleModal}
      >
        <FaBars />
      </div>
      {showModal && (
        <animated.div
          className='md:hidden fixed bottom-0 right-0 mx-auto bg-slate-700 p-2'
          style={{
            ...modalAnimation,
            maxWidth: '50%',
            margin: '0 auto',
            position: 'absolute',
            width: '100%',
            bottom: '-115px',
            zIndex: 1000,
          }}
        >
          <a href='/' className='text-white block py-1 border-b-2'>
            Home
          </a>
          <a href='/tracks' className='text-white block py-1 border-b-2'>
            Tracks
          </a>
          <a href='/about' className='text-white block py-1'>
            About
          </a>
        </animated.div>
      )}
    </header>
  );
};

export default Header;
