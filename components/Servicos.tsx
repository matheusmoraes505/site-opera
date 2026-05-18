'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    title: 'Diagnóstico Fiscal Estratégico',
    badge: 'Pontual',
    badgeColor: 'text-gold border-gold/40',
    dark: false,
    desc: 'Análise retroativa de até 5 anos com mapeamento completo de créditos tributários não aproveitados. Entregamos um relatório executivo com o potencial de recuperação e o caminho jurídico para reaver cada valor.',
    items: ['Levantamento documental completo', 'Cruzamento de SPED EFD e NF-e', 'Relatório executivo com potencial de recuperação'],
  },
  {
    num: '02',
    title: 'Outsourcing Tributário Completo',
    badge: 'Recorrente',
    badgeColor: 'text-teal border-teal/40',
    dark: true,
    desc: 'Assumimos integralmente a gestão tributária da sua empresa — desde a escrituração fiscal até o planejamento estratégico. Seu time foca no core business, a Opera cuida da inteligência fiscal.',
    items: ['Escrituração fiscal mensal', 'Obrigações acessórias (SPED, PGDAS)', 'Planejamento tributário contínuo'],
  },
  {
    num: '03',
    title: 'Governança e Conformidade Contínua',
    badge: 'Compliance',
    badgeColor: 'text-white/60 border-white/20',
    dark: false,
    desc: 'Monitoramento permanente das obrigações fiscais, acompanhamento de mudanças legislativas e garantia de conformidade plena. Eliminamos riscos antes que se tornem autuações.',
    items: ['Monitoramento de legislação em tempo real', 'Gestão de riscos fiscais', 'Suporte a fiscalizações e autuações'],
  },
]

const pillars = [
  { label: 'Risco Zero', desc: 'Operamos somente com teses jurídicas consolidadas' },
  { label: 'Segurança Jurídica', desc: 'STJ, STF e CARF como respaldo de cada estratégia' },
  { label: 'Fluxo de Caixa', desc: 'Créditos convertidos em caixa real para sua empresa' },
]

export default function Servicos() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicos" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="label-tag">— Serviços</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-16 max-w-2xl leading-tight"
        >
          Três frentes de{' '}
          <em className="text-teal not-italic">inteligência fiscal.</em>
        </motion.h2>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12 }}
              className={`card-hover border p-8 flex flex-col ${
                s.dark
                  ? 'bg-dark text-white border-teal/20'
                  : 'bg-white text-text-main border-black/5'
              }`}
            >
              <div className="flex items-start justify-between mb-8">
                <span className={`font-serif text-5xl font-bold ${s.dark ? 'text-teal/30' : 'text-teal/20'}`}>
                  {s.num}
                </span>
                <span className={`border text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1 ${s.badgeColor}`}>
                  {s.badge}
                </span>
              </div>

              <h3 className={`font-serif text-2xl font-bold mb-4 ${s.dark ? 'text-white' : 'text-text-main'}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-6 flex-1 ${s.dark ? 'text-white/60' : 'text-text-main/60'}`}>
                {s.desc}
              </p>

              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-teal mt-1 text-xs">▸</span>
                    <span className={`text-xs font-sans ${s.dark ? 'text-white/50' : 'text-text-main/50'}`}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-black/10 pt-12"
        >
          {pillars.map((p) => (
            <div key={p.label} className="text-center">
              <p className="text-gold text-xs font-sans font-semibold uppercase tracking-widest mb-2">{p.label}</p>
              <p className="text-text-main/50 text-sm font-sans">{p.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
