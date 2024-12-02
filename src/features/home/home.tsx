'use client'

import { Footer } from '@/features/home/components/footer'
import { Hero } from '@/features/home/components/hero'
import { Header } from '@/src/components/ui/header'

import dynamic from 'next/dynamic'
import React from 'react'

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

export const HomePageComponent: React.FC = () => {
   return (
      <React.Suspense>
         <Header />
         <Hero />
         <AboutMe />
         <Services />
         <Approach />
         <Benefits />
         <Footer />
      </React.Suspense>
   )
}
