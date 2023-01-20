import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className='relative flex justify-center items-center'>
      <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-54 animate-ping' />
      <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-54' />
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-54' /> 
      <div className='rounded-full absolute border border-[#F7AB0A] h-[650px] w-[650px] mt-52 animate-pule' />
      <div className='rounded-full absolute border border-[#333333] h-[800px] w-[800px] mt-52 animate-pule' />
    </div>
  );
};

export default BackgroundCircles;
