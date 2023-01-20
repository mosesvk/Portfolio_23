import React from 'react';
import { SocialIcon } from 'react-social-icons';

const Header = () => {
  return (
    <header>
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

      <div className='flex'>
        <SocialIcon
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
        />

        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
        </p>
          Get in Touch
      </div>
    </header>
  );
};

export default Header;
