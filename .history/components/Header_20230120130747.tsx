import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between mx-auto z-20 xl:items-center'>
      <div className='flex flex-row items-center'>
        {/* Social Icons - react_social_icons  */}
        <SocialIcon
          url='https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA'
          fgColor='gray'
          bgColor='transparent'
        />

        <SocialIcon
          url='https://www.youtube.com/channel/UChlB6LMekxCh917bjumDcCA'
          fgColor='gray'
          bgColor='transparent'
        />
      </div>

      <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />

        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch
        </p>
          
      </div>
    </header>
  );
};

export default Header;
