'use client'

import { WhatsAppIcon } from '@/src/components/icons/hero'
import { Button } from '@/src/components/ui/button'

import Image from 'next/image'
import React from 'react'

export const Hero: React.FC = () => {
   return (
      <React.Fragment>
         <div className="min-h-screen flex flex-col justify-between relative" id="hero">
            <div className="flex-1 flex items-center container px-4 md:px-0">
               <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                     <h1 className="text-3xl text-white md:text-5xl lg:text-6xl font-thin font-forum uppercase tracking-tight">
                        Buscar ajuda é um
                        <br className="hidden md:block" />
                        <span className="flex items-center gap-4">
                           ato de
                           <span className="font-retro-signature lowercase h-[60px] inline-flex items-center  text-[140px]">
                              coragem,
                           </span>
                        </span>
                        e não um sinal
                        <br className="hidden md:block" />
                        de fraqueza.
                     </h1>
                     <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-paragraph text-white">
                        Dê um passo na direção da vida que você deseja viver!
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <Button variant="outline" className="w-full sm:w-auto">
                        <span className="flex items-center gap-2">
                           <WhatsAppIcon className="w-4 h-4" />
                           <span className="text-base">Agendamentos</span>
                        </span>
                     </Button>
                  </div>
               </div>
            </div>
            <Image
               src="/assets/leticia-psi-hero.png"
               alt="Floresta hero"
               fill
               priority
               quality={100}
               className="absolute h-svh w-screen object-top -z-10 object-cover"
            />
         </div>
      </React.Fragment>
   )
}
