import '@/styles/globals.css'
import '@/styles/reset.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
   title: 'Leticia Mathias | Psicóloga Clínica - Terapia Online (CRP 072459)',
   description:
      'Psicóloga clínica especialista em Terapia Cognitivo Comportamental (TCC) com mais de 10 anos de experiência. Atendimento online personalizado, ético e acolhedor para ajudar você a alcançar bem-estar emocional.',
   authors: [{ name: 'Leticia Mathias' }],
   keywords: [
      'psicóloga online',
      'terapia online',
      'psicoterapia',
      'TCC',
      'Terapia Cognitivo Comportamental',
      'psicóloga São Paulo',
      'atendimento psicológico'
   ],
   openGraph: {
      title: 'Leticia Mathias | Psicóloga Clínica - Terapia Online (CRP 072459)',
      description:
         'Psicóloga clínica especialista em Terapia Cognitivo Comportamental (TCC) com mais de 10 anos de experiência. Atendimento online personalizado, ético e acolhedor.',
      type: 'website'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Leticia Mathias | Psicóloga Clínica - Terapia Online (CRP 072459)',
      description:
         'Psicóloga clínica especialista em Terapia Cognitivo Comportamental (TCC) com mais de 10 anos de experiência. Atendimento online personalizado, ético e acolhedor.'
   }
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="pt-BR">
         <body className="antialiased">{children}</body>
      </html>
   )
}
