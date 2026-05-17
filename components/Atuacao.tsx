'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const estados = [
  { uf: 'RS', label: 'Rio Grande do Sul', pct: 40, desc: 'Sede e maior volume de operações' },
  { uf: 'SC', label: 'Santa Catarina', pct: 20, desc: 'RICMS/SC e substituição tributária' },
  { uf: 'SP', label: 'São Paulo', pct: 20, desc: 'Maior mercado nacional' },
  { uf: 'PR', label: 'Paraná', pct: 10, desc: 'ICMS e operações interestaduais' },
  { uf: 'MG', label: 'Minas Gerais', pct: 10, desc: 'Expansão regional estratégica' },
]

export default function Atuacao() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="atuacao" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="label-tag">— Área de Atuação</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight"
            >
              Cinco estados,{' '}
              <em className="text-teal not-italic">uma metodologia.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-main/60 text-base font-sans leading-relaxed mb-12"
            >
              Dominamos as particularidades legislativas de cada RICMS estadual.
              Isso significa que identificamos créditos que consultores genéricos ignoram
              — especificidades de Convênios, regimes especiais e benefícios fiscais locais.
            </motion.p>

            {/* Barras de progresso */}
            <div className="space-y-6">
              {estados.map((e, i) => (
                <motion.div
                  key={e.uf}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span className="font-serif font-bold text-text-main w-8">{e.uf}</span>
                      <span className="text-text-main/50 text-xs font-sans">{e.label}</span>
                    </div>
                    <span className="text-teal font-semibold text-sm font-sans">{e.pct}%</span>
                  </div>
                  <div className="h-1.5 bg-black/5 w-full rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${e.pct}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                      className="h-full bg-teal rounded-full"
                    />
                  </div>
                  <p className="text-text-main/40 text-xs font-sans mt-1">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — métricas */}
          <div className="space-y-6">
            {[
              { val: '+500M', label: 'R$ em performance gerada', sub: 'Créditos recuperados e planejamentos executados' },
              { val: '05', label: 'UFs de atuação', sub: 'RS · SC · SP · PR · MG' },
              { val: '06', label: 'Tributos analisados', sub: 'ICMS · IPI · PIS · COFINS · IRPJ · CSLL' },
            ].map((m, i) => (
              <motion.div
                key={m.val}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
                className="bg-dark p-8 border border-teal/10"
              >
                <p className="font-serif text-5xl font-bold text-teal mb-1">{m.val}</p>
                <p className="text-white font-semibold text-sm font-sans mb-1">{m.label}</p>
                <p className="text-white/40 text-xs font-sans">{m.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
