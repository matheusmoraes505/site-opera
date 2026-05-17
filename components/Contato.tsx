'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const faturamentos = [
  'Até R$ 5M/ano',
  'R$ 5M – R$ 20M/ano',
  'R$ 20M – R$ 100M/ano',
  'R$ 100M – R$ 500M/ano',
  'Acima de R$ 500M/ano',
]

const estados = ['RS', 'SC', 'SP', 'PR', 'MG', 'Outro']

const contatos = [
  {
    icon: '📞',
    label: 'Telefone / WhatsApp',
    value: '(51) 98993-0870',
    href: 'https://wa.me/5551989930870',
  },
  {
    icon: '✉',
    label: 'E-mail',
    value: 'contabilidade.operars@gmail.com',
    href: 'mailto:contabilidade.operars@gmail.com',
  },
  {
    icon: '📷',
    label: 'Instagram',
    value: '@opera.contabilidade',
    href: 'https://instagram.com/opera.contabilidade',
  },
]

export default function Contato() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contato" ref={ref} className="bg-cream py-28 lg:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="label-tag">— Contato</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-text-main mb-6 leading-tight"
            >
              Comece pela análise{' '}
              <em className="text-primary not-italic">preliminar.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-text-main/60 text-base font-sans leading-relaxed mb-12"
            >
              Sem compromisso. Em 48 horas nosso time analisa seu perfil tributário
              e retorna com uma estimativa inicial do potencial de recuperação da sua empresa.
            </motion.p>

            {/* Contatos */}
            <div className="space-y-6">
              {contatos.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <span className="text-xl w-10 text-center">{c.icon}</span>
                  <div>
                    <p className="text-text-main/40 text-xs font-sans uppercase tracking-wider">{c.label}</p>
                    <p className="text-text-main font-semibold font-sans group-hover:text-teal transition-colors duration-200">
                      {c.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/5551989930870?text=Olá! Gostaria de solicitar uma análise tributária preliminar."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="inline-flex items-center gap-3 mt-10 border border-primary/20 px-6 py-4 text-primary font-semibold font-sans text-sm hover:border-teal hover:text-teal transition-all duration-200 group"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar pelo WhatsApp
            </motion.a>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            {submitted ? (
              <div className="bg-dark p-12 text-center border border-teal/20">
                <div className="text-teal text-4xl mb-4">✓</div>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Mensagem enviada!</h3>
                <p className="text-white/50 text-sm font-sans">
                  Retornaremos em até 48 horas com uma análise preliminar do seu perfil tributário.
                </p>
              </div>
            ) : (
              <form
                name="contato-opera"
                method="POST"
                data-netlify="true"
                onSubmit={(e) => {
                  e.preventDefault()
                  const form = e.target as HTMLFormElement
                  const data = new FormData(form)
                  fetch('/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
                  })
                    .then(() => setSubmitted(true))
                    .catch(() => setSubmitted(true))
                }}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contato-opera" />

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-tag block mb-2">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Seu nome completo"
                      className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm font-sans text-text-main placeholder-text-main/30 focus:outline-none focus:border-teal/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-tag block mb-2">Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      placeholder="Razão social"
                      className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm font-sans text-text-main placeholder-text-main/30 focus:outline-none focus:border-teal/60 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="label-tag block mb-2">Cargo</label>
                    <input
                      type="text"
                      name="cargo"
                      placeholder="CFO, Diretor, Contador…"
                      className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm font-sans text-text-main placeholder-text-main/30 focus:outline-none focus:border-teal/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="label-tag block mb-2">Estado</label>
                    <select
                      name="estado"
                      required
                      className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm font-sans text-text-main focus:outline-none focus:border-teal/60 transition-colors appearance-none"
                    >
                      <option value="">Selecione</option>
                      {estados.map((e) => (
                        <option key={e} value={e}>{e}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label-tag block mb-2">Faturamento Anual</label>
                  <select
                    name="faturamento"
                    className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm font-sans text-text-main focus:outline-none focus:border-teal/60 transition-colors appearance-none"
                  >
                    <option value="">Selecione a faixa</option>
                    {faturamentos.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="label-tag block mb-2">Mensagem</label>
                  <textarea
                    name="mensagem"
                    rows={4}
                    placeholder="Descreva brevemente o contexto tributário da sua empresa ou a dúvida que deseja esclarecer…"
                    className="w-full bg-white border border-black/10 px-4 py-3.5 text-sm font-sans text-text-main placeholder-text-main/30 focus:outline-none focus:border-teal/60 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-center"
                >
                  Solicitar Análise Gratuita
                </button>

                <p className="text-text-main/30 text-xs font-sans text-center">
                  Sem compromisso. Retorno em até 48 horas.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
