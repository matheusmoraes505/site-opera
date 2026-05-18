'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

const etapas = [
  {
    num: '01',
    title: 'Acesso',
    desc: 'Coleta de documentos, SPEDs, XMLs e livros fiscais dos períodos em análise. Assinamos acordo de confidencialidade (NDA) antes de qualquer acesso.',
  },
  {
    num: '02',
    title: 'Diagnóstico',
    desc: 'Análise profunda de até 60 meses de escrituração fiscal. Cruzamento de dados, identificação de créditos não aproveitados e mapeamento de riscos.',
  },
  {
    num: '03',
    title: 'Apresentação',
    desc: 'Relatório executivo com o potencial exato de recuperação por tributo, base legal de cada tese e cronograma de aproveitamento. Sem surpresas.',
  },
  {
    num: '04',
    title: 'Retificação',
    desc: 'Execução técnica: retificação de obrigações acessórias, pedidos de restituição (PER/DCOMP) ou aproveitamento como crédito futuro.',
  },
  {
    num: '05',
    title: 'Fruição',
    desc: 'Acompanhamento até a efetiva compensação ou recebimento. Monitoramos o processo junto ao Fisco e entregamos resultado mensurável.',
  },
]

export default function Metodologia() {
  const sectionRef = useRef(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-80px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.8', 'end 0.2'] })
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section id="metodologia" ref={sectionRef} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="label-tag">— Metodologia</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-20 leading-tight"
        >
          Cinco etapas para{' '}
          <em className="text-teal not-italic">resultado real.</em>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line track */}
          <div className="absolute left-[2.75rem] md:left-1/2 top-0 bottom-0 w-px bg-black/5 -translate-x-1/2 hidden md:block" />
          {/* Animated fill */}
          <div className="absolute left-1/2 top-0 w-px -translate-x-1/2 overflow-hidden hidden md:block" style={{ height: '100%' }}>
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-teal origin-top"
            />
          </div>

          <div className="space-y-16 md:space-y-0">
            {etapas.map((e, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={e.num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className={`relative md:flex md:items-center md:gap-12 md:mb-20 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-8 border border-black/5 hover:border-teal/30 transition-colors duration-300">
                      <p className="text-teal text-xs font-sans font-semibold uppercase tracking-widest mb-3">{e.num}</p>
                      <h3 className="font-serif text-2xl font-bold text-text-main mb-3">{e.title}</h3>
                      <p className="text-text-main/60 text-sm font-sans leading-relaxed">{e.desc}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-teal border-4 border-white shadow-md items-center justify-center z-10" />

                  {/* Spacer */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
