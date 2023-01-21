import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      'Hi, Im Moses',
      'Guy-who-loves-music.tsx',
      '<ButLovesCodingMore />'
    ],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <div className='h-screen flex flex-col items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
        <img className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://images.unsplash.com/photo-1492632736198-174776a820f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="profile" />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7ABBA' />
      </h1>
    </div>
  );
};

export default Hero;
