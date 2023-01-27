/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src='https://media.licdn.com/dms/image/C4E0BAQH7TdoSUkji6Q/company-logo_200_200/0/1527006087701?e=2147483647&v=beta&t=LxQMSi8EzCE8_8pYadjzkVGmVt2hLGMDZZcjx8lLEBw'
        alt='clearlink'
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Analytics</h4>
        <p className='font-bold text-2xl mt-1'>Clearlink</p>
        <div className='flex space-x-2 my-2'>
          <img
            className='h-10 w-10 rounded-full'
            src='https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
            alt='typescript'
          />
        </div>

        <p className='uppercase py-5 text-gray-300'>Started work.... -Ended...</p>

        <ul>
            <li>Summary Point</li>
            <li>Summary Point</li>
            <li>Summary Point</li>
            <li>Summary Point</li>
            <li>Summary Point</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
