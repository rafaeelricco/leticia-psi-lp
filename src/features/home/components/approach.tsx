import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ApproachBackground } from '@/src/components/icons/approach'

import React from 'react'

export const Approach: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative w-full -mt-12">
            <div className="flex flex-col items-center justify-center gap-4 container">
               <div className="lg:w-[700px] rounded-[32px] lg:rounded-[64px] border border-white bg-gradient-to-b from-[#677855cc] via-[#859970] via-[7%] to-[#A9C191] px-6 py-8 lg:px-20 pt-24 relative lg:-ml-[40%]">
                  <Avatar className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 lg:w-40 lg:h-40 border-8 border-white">
                     <AvatarImage src="https://github.com/shadcn.png" />
                     <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-4">
                     <h1 className="text-3xl md:text-3xl lg:text-4xl text-center text-white font-thin font-forum tracking-tight">
                        Abordagem
                     </h1>
                     <p className="mx-auto md:inline-flex flex-col gap-4 text-base lg:text-lg font-medium text-white text-center md:text-start font-gadugi">
                        <span>
                           A Terapia Cognitivo Comportamental (TCC) é uma abordagem estruturada, prática e baseada em
                           evidências cientificas. Este é um modelo te terapia focada no presente, orientada para a ação
                           e direcionada para objetivos definidos e metas mensuráveis.
                        </span>
                        <span>
                           Um dos objetivos desta abordagem é reestruturar a forma de pensar do paciente, de uma forma
                           muito rígida, para uma mais flexível e funcional.
                        </span>
                        <span>
                           Para a TCC, não são as situações em si que afetam as pessoas gerando sofrimento, mas sim, a
                           forma como cada pessoa interpreta a situação. Isso significa que muitas vezes nós não
                           poderemos mudar eventos ou situações que nos aconteceram, mas sempre podemos modificar a
                           forma como pensamos sobre eles, e isso por consequência modifica também nossos sentimentos e
                           comportamentos.
                        </span>
                     </p>
                  </div>
               </div>
            </div>
            <img
               src={'/assets/pattern-frame.png'}
               alt="letícia-pattern"
               className="object-contain h-full absolute py-12 left-0 top-0 -z-10"
            />
            <ApproachBackground className="w-full py-12 h-full absolute top-0 left-0 -z-20" />
         </div>
      </React.Fragment>
   )
}
