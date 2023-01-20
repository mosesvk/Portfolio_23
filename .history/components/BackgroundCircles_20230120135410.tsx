import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] animate-ping' />
      <div className='absolute border [#333333] rounded-full h-[300px] w-[300px] ' />
      <div className='absolute border [#333333] rounded-full h-[500px] w-[500px] ' />
      <div />
      <div />
    </div>
  );
};

export default BackgroundCircles;
