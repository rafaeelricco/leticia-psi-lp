'use client'

import { AboutMe } from '@/features/home/components/about-me'
import { Approach } from '@/features/home/components/approach'
import { Benefits } from '@/features/home/components/benefits'
import { Hero } from '@/features/home/components/hero'
import { Services } from '@/features/home/components/services'
import { Header } from '@/src/components/ui/header'

import React from 'react'

export const HomePageComponent: React.FC = () => {
   return (
      <React.Fragment>
         <Header />
         <Hero />
         <AboutMe />
         <Services />
         <Approach />
         <Benefits />
      </React.Fragment>
   )
}
