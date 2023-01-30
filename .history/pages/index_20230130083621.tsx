import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import About from '@/components/About';
import Experience from '@/sections/Experience';
import Skills from '@/sections/Skills';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Moses Portfolio</title>
      </Head>
      
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start bg-[rgb(36,36,36)]'>
        <Hero />
      </section>

      {/* About  */}
      <section id='about' className='snap-center bg-[rgb(57,55,47)]'>
        <About />
      </section>

      {/* Experience  */}
      <section id='experience' className='snap-center bg-[rgb(36,36,36)]'>
        <Experience />
      </section>

      {/* Skills  */}
      {/* <section id='skills' className='snap-center bg-[rgb(57,55,47)]'>
        <Skills />
      </section> */}

      {/* Projects  */}

      {/* Contact  */}

    </div>
  );
}
