import * as React from 'react'

import { FooterPattern, InstagramIcon, WhatsappIcon } from '@/src/components/icons/footer'
import { VARS } from '@/src/lib/variables'

import Image from 'next/image'
import Link from 'next/link'

export const Footer: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative bg-support06 overflow-hidden w-full h-full min-h-[224px] flex flex-col items-center justify-center py-16 md:py-8">
            <FooterPattern className="absolute inset-0 w-full h-full object-cover min-h-[224px]" />
            <div className="container z-10">
               <div className="grid md:grid-cols-2 items-center md:justify-between gap-6 md:gap-0">
                  <div className="grid content-center gap-8 justify-start order-2 md:order-1">
                     <h1
                        className="text-xl text-white font-thin font-forum tracking-tight text-center md:text-left inline-block"
                        aria-label="buscar ajuda é um ato de coragem, e não um sinal de fraqueza"
                     >
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
                           <span>Buscar ajuda é um</span>
                           <span>ato de</span>
                           <span className="font-retro-signature text-[64px] leading-[0] -translate-y-2">coragem,</span>
                           <span>e não um sinal</span>
                           <span>de fraqueza.</span>
                        </div>
                     </h1>
                     <div className="flex items-center justify-center md:justify-start gap-4">
                        <Link prefetch={false} href={VARS.WHATSAPP_LINK} target="_blank" aria-label="whatsapp">
                           <div className="flex items-center gap-2">
                              <WhatsappIcon className="w-6 h-6 md:w-8 md:h-8" />
                              <span className="text-base font-gadugi text-white hover:underline cursor-pointer">
                                 (55) 9937-1594
                              </span>
                           </div>
                        </Link>
                        <Link prefetch={false} href={VARS.INSTAGRAM_LINK} target="_blank" aria-label="instagram">
                           <div className="flex items-center gap-2">
                              <InstagramIcon className="w-6 h-6 md:w-8 md:h-8" />
                              <span className="text-base font-gadugi text-white hover:underline cursor-pointer">
                                 @psi.na.rotina
                              </span>
                           </div>
                        </Link>
                     </div>
                  </div>
                  <Image
                     src="/assets/leticia-psi-logo.png"
                     alt="Letícia Mathias - Logo"
                     width={0}
                     height={0}
                     sizes="100vw"
                     className="order-1 md:order-2 w-full h-auto object-contain"
                     role="img"
                  />
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
