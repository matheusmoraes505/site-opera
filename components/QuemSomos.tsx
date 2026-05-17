'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const metrics = [
  { value: '+R$500M', label: 'em performance gerada' },
  { value: '05', label: 'anos de horizonte' },
  { value: '05', label: 'UFs atendidas' },
  { value: '06', label: 'tributos analisados' },
]

export default function QuemSomos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="quem-somos" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="label-tag">— Sobre a Opera</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-text-main leading-tight mb-4"
            >
              Engenharia de eficiência{' '}
              <em className="text-primary not-italic">fiscal.</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-xl italic text-gold mb-8"
            >
              A consultoria que fala a língua da diretoria financeira.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-4 text-text-main/70 text-base leading-relaxed font-sans"
            >
              <p>
                A Opera nasceu com um propósito claro: transformar obrigações tributárias em
                vantagens competitivas. Somos especialistas em identificar e recuperar créditos
                fiscais que passam despercebidos por auditorias convencionais.
              </p>
              <p>
                Nosso método combina análise documental profunda, cruzamento de dados fiscais e
                conhecimento atualizado da legislação de RS, SC, SP, PR e MG — um trabalho que
                vai muito além da conformidade.
              </p>
              <p>
                Trabalhamos com horizontes de até 5 anos retroativos, maximizando o retorno
                para nossos clientes sem risco jurídico.
              </p>
            </motion.div>

            {/* Quote box */}
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 bg-dark text-white p-8 border-l-4 border-teal"
            >
              <p className="font-serif text-lg italic leading-relaxed">
                "Vendemos impacto no EBITDA. Quando a Opera entrega, o cliente para de ouvir
                <span className="text-gold"> 'imposto'</span> e passa a ouvir
                <span className="text-teal"> lucro operacional."</span>
              </p>
            </motion.blockquote>
          </div>

          {/* Right — metrics */}
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                className="bg-white border border-black/5 p-8 shadow-sm"
              >
                <p className="font-serif text-4xl font-bold text-teal mb-2">{m.value}</p>
                <p className="text-text-main/50 text-xs uppercase tracking-widest font-sans">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
