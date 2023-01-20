import React, { use } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor='#F7ABBA' />
      </h1>
    </div>
  );
};

export default Hero;
