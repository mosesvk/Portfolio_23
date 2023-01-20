import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border [#333333] rounded-full h-[200px] w-[200px] mt-54 animate-ping' />
      <div className='border border-[#333333] rounded-full h-[300px] w-[300px] absolute mt-54' />
      <div className='border border-[#333333] rounded-full h-[500px] w-[500px] absolute mt-54' /> 
      <div className='absolute border border-[#F7AB0A] rounded-full h-[500px] w-[500px] mt-52 animate-pule' />
      <div />
    </div>
  );
};

export default BackgroundCircles;