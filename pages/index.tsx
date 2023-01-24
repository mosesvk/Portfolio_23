import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-full snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Moses Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      
      {/* About  */}
      <section id="about">
        <About />
      </section>

      {/* Experience  */}

      {/* Skills  */}

      {/* Projects  */}

      {/* Contact  */}
    </div>
  );
}
