'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

type Message = { role: 'user' | 'assistant'; content: string }

const sugestoes = [
  'Como funciona o ressarcimento de ICMS-ST?',
  'Minha empresa pode aproveitar créditos de CIAP?',
  'O que é crédito presumido de ICMS?',
  'Qual a diferença entre PIS cumulativo e não cumulativo?',
]

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3 bg-white/5 rounded-lg w-fit">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block w-1.5 h-1.5 bg-teal rounded-full"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

export default function AssistenteIA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text: string) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const newMessages: Message[] = [...messages, { role: 'user', content: trimmed }]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      if (data.content) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.content }])
      } else {
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: 'Erro ao obter resposta. Tente novamente.' },
        ])
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Erro de conexão. Verifique sua internet e tente novamente.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <section id="assistente" ref={ref} className="bg-dark py-28 lg:py-36">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <span className="label-tag">— Assistente Tributário IA</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-4 leading-tight"
        >
          Tire suas dúvidas{' '}
          <em className="text-teal not-italic">tributárias.</em>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/50 text-center text-sm font-sans leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Nosso assistente é treinado na legislação tributária brasileira — LC 87/96, RICMS/RS,
          RICMS/SC, RICMS/SP, RICMS/PR, RICMS/MG, Convênios ICMS, jurisprudência STF/STJ/CARF.
        </motion.p>

        {/* Chat window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="border border-white/10 bg-white/[0.02] overflow-hidden"
        >
          {/* Chat header */}
          <div className="border-b border-white/10 px-6 py-4 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-white/60 text-xs font-sans font-semibold uppercase tracking-widest">
              Consultor Tributário Opera
            </span>
          </div>

          {/* Messages */}
          <div className="h-96 overflow-y-auto chat-scroll p-6 space-y-4">
            {messages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-white/30 text-sm font-sans mb-2">Faça uma pergunta tributária ou escolha uma sugestão abaixo.</p>
              </div>
            )}

            <AnimatePresence initial={false}>
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-5 py-3.5 text-sm font-sans leading-relaxed whitespace-pre-wrap ${
                      m.role === 'user'
                        ? 'bg-teal text-dark font-medium'
                        : 'bg-white/5 text-white/80 border border-white/10'
                    }`}
                  >
                    {m.content}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {loading && (
              <div className="flex justify-start">
                <TypingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Digite sua dúvida tributária..."
                disabled={loading}
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 px-4 py-3 text-sm font-sans focus:outline-none focus:border-teal/50 transition-colors duration-200 disabled:opacity-50"
                aria-label="Mensagem para o assistente tributário"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="bg-teal text-dark font-semibold px-6 py-3 text-sm font-sans disabled:opacity-40 hover:bg-opacity-90 transition-all duration-200 active:scale-95"
                aria-label="Enviar mensagem"
              >
                Enviar
              </button>
            </div>
          </div>
        </motion.div>

        {/* Sugestões */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-6"
        >
          <p className="text-white/30 text-xs font-sans uppercase tracking-widest mb-3">Perguntas sugeridas:</p>
          <div className="flex flex-wrap gap-2">
            {sugestoes.map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                disabled={loading}
                className="text-white/50 border border-white/10 text-xs font-sans px-4 py-2 hover:border-teal/40 hover:text-teal transition-all duration-200 disabled:opacity-40 text-left"
              >
                {s}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white/20 text-xs font-sans text-center mt-8 leading-relaxed"
        >
          Este assistente fornece orientação técnica preliminar com base na legislação brasileira vigente.
          Para análise completa e documentada, solicite nosso diagnóstico fiscal estratégico.
        </motion.p>
      </div>
    </section>
  )
}
