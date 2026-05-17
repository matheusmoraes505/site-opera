'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const indiretos = {
  title: 'Tributos Indiretos',
  items: ['ICMS Próprio', 'ICMS Substituição Tributária', 'IPI', 'PIS/COFINS'],
  color: 'text-teal',
}

const diretos = {
  title: 'Tributos Diretos',
  items: ['IRPJ — Lucro Real e Presumido', 'CSLL', 'Contribuição Previdenciária'],
  color: 'text-gold',
}

const documentos = [
  'XML de Notas Fiscais de Entrada e Saída',
  'SPED EFD ICMS/IPI (Registros C170, C176, C197…)',
  'EFD-Contribuições (Registros A, C, D, F, M…)',
  'PGDAS-D (Simples Nacional)',
  'Livros fiscais e registros de apuração',
  'CIAP — Controle de Crédito do Ativo Permanente',
  'GIA / DAPI / GIA-ST por estado',
  'Laudos de insumos e materiais intermediários',
]

export default function Tributos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="tributos" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="label-tag">— Escopo de Análise</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-16 leading-tight"
        >
          Seis tributos sob{' '}
          <em className="text-primary not-italic">análise profunda.</em>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Indiretos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-black/5 p-8"
          >
            <p className={`text-xs font-sans font-semibold uppercase tracking-widest mb-6 ${indiretos.color}`}>
              {indiretos.title}
            </p>
            <ul className="space-y-4">
              {indiretos.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-teal">▸</span>
                  <span className="font-serif text-xl font-semibold text-text-main">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Diretos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white border border-black/5 p-8"
          >
            <p className={`text-xs font-sans font-semibold uppercase tracking-widest mb-6 ${diretos.color}`}>
              {diretos.title}
            </p>
            <ul className="space-y-4">
              {diretos.items.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: 15 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-gold">▸</span>
                  <span className="font-serif text-xl font-semibold text-text-main">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Documentos analisados */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-dark p-10"
        >
          <p className="label-tag mb-8">— Documentos e Arquivos Analisados</p>
          <div className="grid md:grid-cols-2 gap-3">
            {documentos.map((doc, i) => (
              <motion.div
                key={doc}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.06 }}
                className="flex items-start gap-3"
              >
                <span className="text-teal mt-1 text-xs flex-shrink-0">✓</span>
                <span className="text-white/60 text-sm font-sans">{doc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
