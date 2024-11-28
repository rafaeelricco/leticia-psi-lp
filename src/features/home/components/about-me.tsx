import { Background, Title } from '@/src/components/icons/about-me'

import React from 'react'

export const AboutMe: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative bg-green overflow-hidden w-full pt-12 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between relative">
               <div className="w-full md:w-1/2 order-2 md:order-1">
                  <img src={'/assets/leticia-about-me-hero.png'} alt="Letícia" className="object-contain" />
               </div>
               <div className="w-full md:w-1/2 flex flex-col gap-4 order-1 md:order-2">
                  <div className="flex flex-col justify-start gap-4">
                     <h1 className="text-3xl text-center md:text-left text-white md:text-4xl font-thin font-forum tracking-tight">
                        Olá, me chamo
                     </h1>
                     <Title className="mx-auto md:mx-0 w-[40%] md:w-[20vw]" />
                     <p className="hidden max-w-[85%] md:inline-flex flex-col gap-4 text-base lg:text-lg font-medium text-white text-center md:text-start md:max-w-[90%] font-gadugi">
                        <span>
                           Sou psicóloga clínica (CRP 072459), formada há mais de dez anos e atualmente trabalho com
                           psicoterapia no formato online, tendo como abordagem a Terapia Cognitivo Comportamental
                           (TCC).
                        </span>
                        <span>
                           Pós graduanda em Psicoterapias Baseadas em Evidências: Terapias Cognitivo Comportamentais.
                        </span>
                        <span>
                           Meu propósito é oferecer aos meus pacientes um atendimento comprometido, ético e totalmente
                           individualizado, em um espaço acolhedor e livre de julgamentos. 
                        </span>
                     </p>
                     <p className="inline-flex max-w-[85%] mx-auto flex-col gap-4 md:hidden text-center md:text-start text-sm sm:text-base font-medium text-white md:max-w-[90%] font-gadugi">
                        <span>
                           Sou psicóloga clínica (CRP 072459), formada há mais de dez anos e atualmente trabalho com
                           psicoterapia no formato online, tendo como abordagem a Terapia Cognitivo Comportamental
                           (TCC).
                        </span>
                        <span>
                           Pós graduanda em Psicoterapias Baseadas em Evidências: Terapias Cognitivo Comportamentais.
                        </span>
                        <span>
                           Meu propósito é oferecer aos meus pacientes um atendimento comprometido, ético e totalmente
                           individualizado, em um espaço acolhedor e livre de julgamentos. 
                        </span>
                     </p>
                  </div>
               </div>
            </div>
            <Background className="w-full h-full absolute top-0 left-0 -z-10" />
         </div>
      </React.Fragment>
   )
}
