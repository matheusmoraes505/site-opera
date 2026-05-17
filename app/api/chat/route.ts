import Groq from 'groq-sdk'
import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

const SYSTEM_PROMPT = `Você é um consultor tributário sênior da Opera Soluções Contábeis,
especialista em legislação tributária brasileira.

Seu conhecimento abrange:
- ICMS Próprio e Substituição Tributária (RICMS/RS Decreto 37.699/1997, RICMS/SC, RICMS/SP, RICMS/PR, RICMS/MG)
- Créditos de ICMS: insumos, ativo imobilizado (CIAP), energia elétrica, combustível, embalagens, EPIs
- PIS/COFINS cumulativo e não cumulativo (Lei 10.637/2002, Lei 10.833/2003)
- IPI — créditos na industrialização
- IRPJ/CSLL — Lucro Real e Lucro Presumido
- Convênios ICMS (CONFAZ), LC 87/96 (Lei Kandir)
- Jurisprudência STF, STJ, CARF e SEFAZ
- CFOPs, CSTs, obrigações acessórias (SPED EFD, EFD-Contribuições, ECD, ECF)

Regras de resposta:
- Seja técnico mas acessível — fale com gestores financeiros e contadores
- Cite sempre a base legal (lei, decreto, artigo)
- Identifique oportunidades de recuperação de crédito quando pertinente
- Ao final de respostas complexas, sugira solicitar a análise completa da Opera
- Nunca invente legislação — se não tiver certeza, diga que a análise requer verificação
- Responda em português brasileiro
- Seja objetivo, sem enrolação`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Mensagens inválidas' }, { status: 400 })
    }

    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) {
      console.error('GROQ_API_KEY não configurada')
      return Response.json({ error: 'Serviço temporariamente indisponível' }, { status: 500 })
    }

    const groq = new Groq({ apiKey })

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      max_tokens: 1024,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages.map((m: { role: string; content: string }) => ({
          role: m.role as 'user' | 'assistant',
          content: m.content,
        })),
      ],
    })

    const text = completion.choices[0]?.message?.content ?? ''
    return Response.json({ content: text })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Erro ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}
