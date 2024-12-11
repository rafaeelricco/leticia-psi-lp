'use client'

import { Hero } from '@/features/home/components/hero'

import dynamic from 'next/dynamic'
import React from 'react'

const Header = dynamic(() => import('@/src/components/ui/header').then((mod) => mod.Header), { ssr: false })

const AboutMe = dynamic(() => import('@/features/home/components/about-me').then((mod) => mod.AboutMe), { ssr: false })

const Services = dynamic(() => import('@/features/home/components/services').then((mod) => mod.Services), {
   ssr: false
})

const Approach = dynamic(() => import('@/features/home/components/approach').then((mod) => mod.Approach), {
   ssr: false
})

const Benefits = dynamic(() => import('@/features/home/components/benefits').then((mod) => mod.Benefits), {
   ssr: true
})

const Footer = dynamic(() => import('@/features/home/components/footer').then((mod) => mod.Footer), {
   ssr: false
})

export const HomePageComponent: React.FC = () => {
   return (
      <React.Fragment>
         <React.Suspense>
            <Header />
         </React.Suspense>
         <Hero />
         <React.Suspense>
            <AboutMe />
            <Services />
            <Approach />
            <Benefits />
            <Footer />
         </React.Suspense>
      </React.Fragment>
   )
}
