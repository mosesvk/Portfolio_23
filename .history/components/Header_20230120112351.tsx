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

      <div>
        <SocialIcon 
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
        </div>
        
        <p className="uppercase">Get in Touch</p>
    </header>
  );
};

export default Header;
