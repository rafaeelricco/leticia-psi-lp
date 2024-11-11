'use client'

import { Button } from '@/src/components/ui/button'

import Image from 'next/image'
import React from 'react'

export const Hero: React.FC = () => {
   const handleScrollTo = (scrollTo: string) => {
      const element = document.querySelector(scrollTo)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   return (
      <React.Fragment>
         <div className="min-h-screen flex flex-col justify-between relative" id="hero">
            <div className="flex-1 flex items-center container px-4 md:px-0">
               <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center w-full">
                  <div className="flex flex-col gap-6 mt-8 sm:mt-0">
                     <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-semibold tracking-tight">
                           kkkkk
                           <br className="hidden md:block" /> lslslsl
                           <span className="from-gradient-start to-gradient-end bg-gradient-to-tl bg-clip-text text-transparent">
                              lslslsl
                           </span>
                        </h1>
                        <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-paragraph sm:max-w-[80%] lg:max-w-[70%]"></p>
                        rsrsrs
                     </div>
                     <div className="flex flex-col sm:flex-row gap-6">
                        <Button variant="outline" className="w-full sm:w-auto">
                           button
                        </Button>
                     </div>
                  </div>
               </div>
            </div>
            <Image
               src="/assets/leticia-psi-hero.png"
               alt="Floresta hero"
               fill
               priority
               quality={100}
               className="absolute h-svh w-screen -z-10 object-cover"
            />
         </div>
      </React.Fragment>
   )
}
