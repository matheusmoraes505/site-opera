import { NextRequest } from 'next/server'

export const dynamic = 'force-dynamic'

const MODEL = 'gemini-2.5-flash'

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

REGRA MAIS IMPORTANTE — PRECISÃO ACIMA DE TUDO:
- Você TEM acesso à busca do Google. SEMPRE pesquise para confirmar leis, decretos,
  artigos, alíquotas, prazos e jurisprudência antes de afirmar qualquer coisa.
- NUNCA invente número de lei, decreto, artigo, alíquota ou prazo. Se a busca não
  confirmar, diga claramente: "Não tenho como confirmar esse ponto com segurança —
  isso exige análise documental da Opera."
- Prefira admitir incerteza a dar uma informação errada. Errar sobre legislação
  tributária pode causar prejuízo real ao cliente.

Regras de resposta:
- Seja técnico mas acessível — fale com gestores financeiros e contadores
- Cite a base legal (lei, decreto, artigo) apenas quando tiver confirmado via busca
- Identifique oportunidades de recuperação de crédito quando pertinente
- Ao final de respostas complexas, sugira solicitar a análise completa da Opera
- Responda em português brasileiro
- Seja objetivo, sem enrolação`

type ChatMessage = { role: string; content: string }

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Mensagens inválidas' }, { status: 400 })
    }

    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      console.error('GEMINI_API_KEY não configurada')
      return Response.json({ error: 'Serviço temporariamente indisponível' }, { status: 500 })
    }

    const contents = (messages as ChatMessage[]).map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }))

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          tools: [{ google_search: {} }],
          generationConfig: {
            temperature: 0.3,
            maxOutputTokens: 2048,
          },
        }),
      }
    )

    if (!res.ok) {
      const errBody = await res.text()
      console.error('Gemini API error:', res.status, errBody)
      return Response.json(
        { error: 'Erro ao processar sua mensagem. Tente novamente.' },
        { status: 500 }
      )
    }

    const data = await res.json()

    const text: string =
      data?.candidates?.[0]?.content?.parts
        ?.map((p: { text?: string }) => p.text ?? '')
        .join('')
        .trim() ?? ''

    if (!text) {
      console.error('Gemini empty response:', JSON.stringify(data).slice(0, 800))
      return Response.json({
        content:
          'Desculpe, não consegui elaborar uma resposta segura para isso. Reformule a pergunta ou solicite a análise completa da Opera.',
      })
    }

    return Response.json({ content: text })
  } catch (error) {
    console.error('Chat API error:', error)
    return Response.json(
      { error: 'Erro ao processar sua mensagem. Tente novamente.' },
      { status: 500 }
    )
  }
}
