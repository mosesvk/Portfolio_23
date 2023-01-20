import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Moses Portfolio</title>
      </Head>

      {/* Header  */}
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About  */}


      {/* Experience  */}
      
      {/* Skills  */}

      {/* Projects  */}

      {/* Contact  */}

    <div>
  )
}
