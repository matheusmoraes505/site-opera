'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const diferenciais = [
  {
    num: '01',
    title: 'Especialização cirúrgica',
    desc: 'Não somos escritório generalista. Cada profissional da Opera é especialista em legislação tributária — legislação que muda todo mês e exige atualização permanente.',
  },
  {
    num: '02',
    title: 'Teses consolidadas',
    desc: 'Operamos somente com teses jurídicas pacificadas em STJ, STF ou CARF. Sem risco de glosa futura ou autuação que anulem o crédito recuperado.',
  },
  {
    num: '03',
    title: 'Horizonte de 5 anos',
    desc: 'Analisamos até 60 meses retroativos — o prazo prescricional tributário completo. Outros param em 12 ou 24 meses. A diferença é crédito que fica na mesa.',
  },
  {
    num: '04',
    title: 'Foco em EBITDA',
    desc: 'Nosso relatório é construído para falar com CFO e conselho. Traduzimos cada crédito em impacto direto no resultado operacional da empresa.',
  },
  {
    num: '05',
    title: 'Presença estadual real',
    desc: 'Conhecemos os particularismos de cada RICMS. SC e RS têm tratamentos distintos de CIAP, energia e insumos — esse detalhe vale milhões para indústrias.',
  },
  {
    num: '06',
    title: 'Honorários por resultado',
    desc: 'Alinhamos nosso interesse ao seu: parte dos honorários é vinculada ao crédito efetivamente recuperado. Só ganhamos quando você ganha.',
  },
]

export default function PorQueOpera() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="por-que-opera" ref={ref} className="bg-dark py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="label-tag">— Por Que Opera</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white mb-16 leading-tight max-w-2xl"
        >
          Seis razões para escolher a{' '}
          <em className="text-teal not-italic">Opera.</em>
        </motion.h2>

        {/* Grid 2x3 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {diferenciais.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
              className="group border border-white/5 p-8 hover:border-teal/40 hover:shadow-lg hover:shadow-teal/5 transition-all duration-300 cursor-default"
            >
              <span className="font-serif text-4xl font-bold text-white/10 group-hover:text-teal/20 transition-colors duration-300 mb-6 block">
                {d.num}
              </span>
              <h3 className="font-serif text-xl font-bold text-white mb-3 group-hover:text-teal transition-colors duration-300">
                {d.title}
              </h3>
              <p className="text-white/50 text-sm font-sans leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Positioning box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="border border-teal/20 p-10 text-center"
        >
          <p className="text-gold text-xs font-sans font-semibold uppercase tracking-widest mb-4">
            — Nosso posicionamento
          </p>
          <p className="font-serif text-2xl md:text-3xl text-white font-semibold leading-relaxed max-w-3xl mx-auto">
            "Não auditamos para encontrar conformidade.
            Auditamos para encontrar{' '}
            <em className="text-teal">dinheiro que é seu e ainda está no Fisco."</em>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
