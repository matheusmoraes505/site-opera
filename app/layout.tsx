import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Opera Soluções Contábeis | Arquitetura Fiscal Estratégica',
  description:
    'Consultoria tributária especializada em recuperação de créditos e eficiência fiscal. Mais de R$500M em performance gerada em RS, SC, SP, PR e MG.',
  keywords:
    'contabilidade, ICMS, PIS, COFINS, IRPJ, CSLL, crédito tributário, recuperação fiscal, consultoria tributária, Opera Soluções Contábeis',
  authors: [{ name: 'Opera Soluções Contábeis' }],
  openGraph: {
    title: 'Opera Soluções Contábeis | Arquitetura Fiscal Estratégica',
    description:
      'Consultoria tributária especializada em recuperação de créditos e eficiência fiscal.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Opera Soluções Contábeis',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opera Soluções Contábeis',
    description: 'Arquitetura Fiscal Estratégica. +R$500M em performance gerada.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
