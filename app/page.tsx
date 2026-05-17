'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import QuemSomos from '@/components/QuemSomos'
import Servicos from '@/components/Servicos'
import Tributos from '@/components/Tributos'
import Metodologia from '@/components/Metodologia'
import Atuacao from '@/components/Atuacao'
import PorQueOpera from '@/components/PorQueOpera'
import AssistenteIA from '@/components/AssistenteIA'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })

  return (
    <motion.div
      id="progress-bar"
      style={{ scaleX }}
    />
  )
}

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Navbar />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Tributos />
        <Metodologia />
        <Atuacao />
        <PorQueOpera />
        <AssistenteIA />
        <Contato />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
