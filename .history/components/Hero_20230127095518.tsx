/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
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
    <div className='h-screen flex flex-col space-y-8 items-center  justify-center text-center overflow-hidden'>
      {/* <BackgroundCircles /> */}

      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://images.unsplash.com/photo-1492632736198-174776a820f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='profile'
      />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-slate-400 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F5EDCE' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>Experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
