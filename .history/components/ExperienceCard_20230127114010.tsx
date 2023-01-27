/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { motion } from 'framer-motion';

interface Props {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
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

      <div>
        <h4>Analytics</h4>
        <p>Clearlink</p>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="typescript" />
        </div>
      </div>
    </article>
  );
};
