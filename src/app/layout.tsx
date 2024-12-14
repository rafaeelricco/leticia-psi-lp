import '@/styles/animation.css'
import '@/styles/globals.css'
import '@/styles/reset.css'

import { cn } from '@/lib/utils'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'

import localFont from 'next/font/local'

const forum = localFont({
   src: '../../public/fonts/Forum-Regular.ttf',
   variable: '--font-forum',
   display: 'swap',
   preload: true,
   fallback: ['sans-serif']
})

const gadugi = localFont({
   src: [
      {
         path: '../../public/fonts/Gadugi/gadugi-normal.ttf',
         weight: '400',
         style: 'normal'
      },
      {
         path: '../../public/fonts/Gadugi/gadugi-bold.ttf',
         weight: '700',
         style: 'normal'
      }
   ],
   variable: '--font-gadugi',
   display: 'swap',
   preload: true,
   fallback: ['sans-serif']
})

const notoSerifOriya = localFont({
   src: [
      {
         path: '../../public/fonts/NotoSerifOriya/NotoSerifOriya-Regular.ttf',
         weight: '400',
         style: 'normal'
      },
      {
         path: '../../public/fonts/NotoSerifOriya/NotoSerifOriya-Medium.ttf',
         weight: '500',
         style: 'normal'
      },
      {
         path: '../../public/fonts/NotoSerifOriya/NotoSerifOriya-SemiBold.ttf',
         weight: '600',
         style: 'normal'
      }
   ],
   variable: '--font-noto-serif-oriya',
   display: 'swap',
   preload: true,
   fallback: ['serif']
})

const retroSignature = localFont({
   src: '../../public/fonts/RetroSignature.otf',
   variable: '--font-retro-signature',
   display: 'swap',
   preload: true,
   fallback: ['cursive']
})

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
   },
   alternates: {
      canonical: 'https://www.leticiamathiaspsi.com.br/'
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1
      }
   },
   icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico'
   }
}

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html
         lang="pt-BR"
         className={cn(forum.variable, gadugi.variable, notoSerifOriya.variable, retroSignature.variable)}
      >
         <head>
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
            <SpeedInsights />
         </body>
      </html>
   )
}
