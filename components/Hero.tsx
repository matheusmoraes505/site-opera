'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

function useAnimatedCounter(target: number, duration: number = 2000, start: boolean = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!start) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])

  return value
}

const tributos = ['ICMS', 'IPI', 'PIS/COFINS', 'IRPJ/CSLL']

const slides = [
  {
    label: 'Recuperação de Créditos',
    title: 'Crédito que ficou no Fisco volta para o seu caixa.',
    desc: 'Analisamos até 60 meses retroativos para identificar tudo o que sua empresa pagou a mais.',
  },
  {
    label: 'Diagnóstico Estratégico',
    title: 'Cada tributo é uma oportunidade de eficiência.',
    desc: 'ICMS, IPI, PIS/COFINS, IRPJ e CSLL sob análise técnica profunda.',
  },
  {
    label: 'Impacto no EBITDA',
    title: 'Falamos a língua da diretoria financeira.',
    desc: 'Traduzimos cada crédito recuperado em lucro operacional real.',
  },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const [started, setStarted] = useState(false)
  const [slide, setSlide] = useState(0)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const circleY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const r500 = useAnimatedCounter(500, 2200, started)
  const anos = useAnimatedCounter(5, 1500, started)
  const ufs = useAnimatedCounter(5, 1500, started)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 600)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleScroll = (href: string) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-screen bg-dark flex items-center overflow-hidden"
    >
      {/* Concentric circles — parallax */}
      <motion.div
        style={{ y: circleY }}
        className="absolute right-[-15%] top-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block"
      >
        {[700, 560, 420, 280, 140].map((size, i) => (
          <motion.div
            key={size}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + i * 0.12, duration: 1.2, ease: 'easeOut' }}
            className="absolute rounded-full border border-white/[0.04]"
            style={{
              width: size,
              height: size,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
        <div
          className="absolute rounded-full border border-teal/15"
          style={{ width: 350, height: 350, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 pt-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Opera Soluções Contábeis" className="h-20 w-auto" />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-gold text-xs font-sans font-semibold uppercase tracking-widest">
                — Performance Tributária
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="font-serif text-5xl md:text-6xl font-bold text-white leading-[1.05] mb-6"
            >
              Arquitetura Fiscal{' '}
              <em className="text-teal not-italic">Estratégica</em>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white/60 text-lg font-sans leading-relaxed mb-10 max-w-xl"
            >
              Recuperamos créditos tributários e estruturamos eficiência fiscal
              para empresas que buscam impacto real no EBITDA.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button onClick={() => handleScroll('#contato')} className="btn-primary">
                Solicitar Análise
              </button>
              <button onClick={() => handleScroll('#metodologia')} className="btn-outline">
                Ver Metodologia
              </button>
            </motion.div>

            {/* Tributos badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap gap-2"
            >
              {tributos.map((t) => (
                <span
                  key={t}
                  className="text-xs font-sans font-semibold text-white/50 border border-white/10 px-3 py-1.5 rounded-sm"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right column — slideshow */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative h-[26rem] rounded-2xl overflow-hidden border border-teal/20 bg-gradient-to-br from-primary to-dark">
              {/* Decorative mosaic pattern */}
              <div className="absolute inset-0 opacity-[0.07]">
                <div className="grid grid-cols-8 gap-1 h-full w-full p-2">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div key={i} className="bg-teal rounded-sm" />
                  ))}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute inset-0 flex flex-col justify-center p-10"
                >
                  <span className="text-gold text-xs font-sans font-semibold uppercase tracking-widest mb-5">
                    — {slides[slide].label}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-white leading-tight mb-4">
                    {slides[slide].title}
                  </h3>
                  <p className="text-white/50 text-sm font-sans leading-relaxed max-w-sm">
                    {slides[slide].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Slide indicators */}
              <div className="absolute bottom-6 left-10 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setSlide(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === slide ? 'w-8 bg-teal' : 'w-2 bg-white/20'
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Counters under slideshow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="grid grid-cols-3 gap-4 mt-6"
            >
              {[
                { v: `+R$${r500}M`, l: 'performance' },
                { v: `0${anos}`, l: 'anos' },
                { v: `0${ufs}`, l: 'UFs' },
              ].map((c) => (
                <div key={c.l} className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-teal">{c.v}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mt-1 font-sans">{c.l}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  )
}
