import '@/styles/animation.css'
import '@/styles/globals.css'
import '@/styles/reset.css'

import { Metadata } from 'next'

export const metadata: Metadata = {
   metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
   title: 'Leticia Mathias | Psicóloga Clínica - Terapia Online (CRP 0724591)',
   description:
      'Psicóloga clínica com mais de 10 anos de experiência e especializanda em Terapia Cognitivo Comportamental (TCC). Atendimento online personalizado, ético e baseado em evidências científicas para ansiedade, depressão, autoestima e desenvolvimento pessoal.',
   authors: [{ name: 'Leticia Mathias' }],
   keywords: [
      'psicóloga online',
      'terapia online',
      'psicoterapia',
      'TCC',
      'Terapia Cognitivo Comportamental',
      'psicóloga São Paulo',
      'atendimento psicológico',
      'ansiedade',
      'depressão',
      'autoestima',
      'psicóloga TCC',
      'terapia evidências científicas',
      'saúde mental',
      'desenvolvimento pessoal',
      'procrastinação',
      'relacionamentos',
      'perfeccionismo',
      'gestão emocional',
      'psicóloga CRP 0724591',
      'terapia individual'
   ],
   openGraph: {
      title: 'Leticia Mathias | Psicóloga Clínica - Terapia Online (CRP 0724591)',
      description:
         'Atendimento psicológico online com abordagem em TCC. Psicóloga com mais de 10 anos de experiência, especializanda em TCC. Atendimento para ansiedade, depressão, autoestima e desenvolvimento pessoal. Sessões individualizadas e baseadas em evidências científicas.',
      type: 'website'
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Leticia Mathias | Psicóloga Clínica - Terapia Online (CRP 0724591)',
      description:
         'Psicoterapia online com TCC. Atendimento psicológico por psicóloga com mais de 10 anos de experiência, especializanda em TCC (CRP 0724591). Sessões focadas em ansiedade, depressão, autoestima e desenvolvimento pessoal.'
   }
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="pt-BR">
         <head>
            <link rel="preload" href="/fonts/Forum-Regular.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
            <link rel="preload" href="/fonts/RetroSignature.otf" as="font" type="font/otf" crossOrigin="anonymous" />
            <meta
               name="description"
               content="Psicóloga clínica especialista em Terapia Cognitivo Comportamental (TCC) com mais de 10 anos de experiência. Atendimento online personalizado, ético e acolhedor para ajudar você a alcançar bem-estar emocional."
            />
            <meta
               name="keywords"
               content="psicóloga online, terapia online, psicoterapia, TCC, Terapia Cognitivo Comportamental, psicóloga São Paulo, atendimento psicológico"
            />
            <meta name="author" content="Leticia Mathias" />
         </head>
         <body className="antialiased" aria-label="Página principal de Leticia Mathias, Psicóloga Clínica">
            <main role="main">{children}</main>
         </body>
      </html>
   )
}
