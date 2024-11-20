import { ServicesBackground } from '@/src/components/icons/services'
import { useIsMobile } from '@/src/hooks/useMobile'

import React from 'react'

export const Services: React.FC = () => {
   const isMobile = useIsMobile()

   if (isMobile) {
      return (
         <React.Fragment>
            <div className="relative overflow-hidden w-full py-12 md:py-20 lg:py-28">
               <div className="flex flex-col items-center justify-center gap-4 container px-4 lg:px-0">
                  <h1 className="text-3xl md:text-3xl lg:text-4xl text-center text-green font-thin font-forum tracking-tight">
                     O atendimento
                  </h1>
                  <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                     <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                        O tratamento que você irá receber é baseado em ferramentas e técnicas validadas cientificamente
                        e totalmente adaptadas para atender as suas necessidades. 
                     </p>
                  </div>
                  <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                     <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                        O trabalho feito no tratamento será colaborativo, o que quer dizer que você participará
                        ativamente de todo o processo. 
                     </p>
                  </div>
                  <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                     <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                        O processo psicoterapêutico se estende para além do tempo da sessão, através de atividades
                        práticas que você poderá realizar no seu dia a dia a fim de desenvolver e praticar as
                        habilidades e comportamentos necessários para atingir suas metas.
                     </p>
                  </div>
                  <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                     <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                        O objetivo do tratamento é te ensinar estratégias e te dar ferramentas para que você tenha
                        autonomia para manejar as suas emoções e resolver os seus problemas de forma efetiva. 
                     </p>
                  </div>
               </div>
               <ServicesBackground className="w-full h-full absolute top-0 left-0 -z-10" />
            </div>
         </React.Fragment>
      )
   }
   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full py-12 md:py-20 lg:py-28">
            <div className="flex flex-col items-center justify-center gap-4 container px-4 lg:px-0">
               <h1 className="text-3xl md:text-3xl lg:text-4xl text-center text-green font-thin font-forum tracking-tight">
                  O atendimento
               </h1>
               <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                  <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                     O tratamento que você irá receber é baseado em ferramentas e técnicas validadas cientificamente e
                     totalmente adaptadas para atender as suas necessidades. 
                  </p>
               </div>
               <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                  <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                     O trabalho feito no tratamento será colaborativo, o que quer dizer que você participará ativamente
                     de todo o processo. 
                  </p>
               </div>
               <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                  <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                     O processo psicoterapêutico se estende para além do tempo da sessão, através de atividades práticas
                     que você poderá realizar no seu dia a dia a fim de desenvolver e praticar as habilidades e
                     comportamentos necessários para atingir suas metas.
                  </p>
               </div>
               <div className="bg-green/95 w-full h-full rounded-3xl py-4 md:py-6 lg:py-8 px-6 md:px-12 lg:px-20 min-h-[120px]">
                  <p className="text-lg md:text-lg lg:text-xl font-medium text-center text-white font-gadugi line-clamp-none md:line-clamp-none lg:line-clamp-2">
                     O objetivo do tratamento é te ensinar estratégias e te dar ferramentas para que você tenha
                     autonomia para manejar as suas emoções e resolver os seus problemas de forma efetiva. 
                  </p>
               </div>
            </div>
            <ServicesBackground className="w-full h-full absolute top-0 left-0 -z-10" />
         </div>
      </React.Fragment>
   )
}
