import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%']
      }}
      transition={{
        duration: 2.5
      }}
      className='relative flex justify-center'
    >
      <div className='absolute border border-[#3a769d] rounded-full h-[200px] w-[200px] mt-54 animate-ping' />
      {/* <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-54' />
      <div className='rounded-full border border-[#333333] h-[500px] w-[500px] absolute mt-54' />
      <div className='rounded-full border border-[#333333] h-[650px] w-[650px] absolute mt-54 animate-pulse' />
      <div className='rounded-full border border-[#3a769d] h-[800px] w-[800px] absolute mt-54' /> */}
    </motion.div>
  );
};

export default BackgroundCircles;
