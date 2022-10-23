import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import herobanner from '../public/herobanner.jpg'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Navbar from '../pages/navbar.js'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className='scroll-smooth'>
      <Head>
        <title>Tayte Bitton Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="px-10">
        <div>
          <div className="flex mx-auto justify-center px-1 py-20">
            <motion.div 
            animate={{ opacity: 100 }}
            transition={{ ease: "easeOut", duration: 2}}>

              <h1 className=" font-JosefinRegular text-9xl">Hello! I'm Tayte</h1>

            </motion.div>
              
          </div>
          
        </div>
      </main>
    </div>
  )
}
