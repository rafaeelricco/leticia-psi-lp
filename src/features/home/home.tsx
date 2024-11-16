'use client'

import { AboutMe } from '@/features/home/components/about-me'
import { Hero } from '@/features/home/components/hero'
import { Header } from '@/src/components/ui/header'

import React from 'react'

export const HomePageComponent: React.FC = () => {
   return (
      <React.Fragment>
         <Header />
         <Hero />
         <AboutMe />
      </React.Fragment>
   )
}
