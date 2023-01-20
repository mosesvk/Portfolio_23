import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const BackgroundCircles = (props: Props) => {
  return (
    <div>
      <div className='border border-red-500 rounded-full h-[200px] w-[200px] animate-ping' />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default BackgroundCircles;
