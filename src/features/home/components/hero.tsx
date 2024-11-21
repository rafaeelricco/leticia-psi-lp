import { cn } from '@/lib/utils'
import { WhatsAppIcon } from '@/src/components/icons/hero'
import { Button } from '@/src/components/ui/button'

import HeroImage from '@/public/assets/leticia-psi-hero.png'
import Image from 'next/image'
import React from 'react'

export const Hero: React.FC = () => {
   const [isSafari, setIsSafari] = React.useState<boolean | null>(null)

   React.useEffect(() => {
      setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent))
   }, [])

   return (
      <React.Fragment>
         <div className="min-h-svh flex flex-col justify-between relative" id="hero">
            <div className="flex-1 flex items-end md:items-center container px-4 pb-12 md:pb-0 md:px-0">
               <div className="flex flex-col gap-6 w-full">
                  <div className="flex flex-col gap-2">
                     <h1
                        className={cn(
                           'text-3xl text-center md:text-left text-white md:text-5xl lg:text-6xl font-thin font-forum tracking-tight',
                           { 'opacity-0': isSafari === null }
                        )}
                     >
                        <span className="uppercase">Buscar ajuda é um</span>
                        <br className="hidden md:block" />
                        <span className="flex items-center gap-4 justify-center md:justify-start h-[33px] md:h-[48px]">
                           <span className="uppercase">ato de</span>
                           <span
                              className={cn(
                                 'font-retro-signature text-[100px] md:text-[120px] lg:text-[140px] flex leading-[0] h-[33px] md:h-[48px]',
                                 isSafari && 'items-center'
                              )}
                           >
                              coragem,
                           </span>
                        </span>
                        <span className="uppercase">e não um sinal</span> <br className="hidden md:block" />
                        <span className="uppercase">de fraqueza.</span>
                     </h1>
                     <p
                        className={cn(
                           'text-sm hidden md:block sm:text-base lg:text-lg font-medium text-gray-paragraph text-center md:text-left text-white font-gadugi',
                           { 'opacity-0': isSafari === null }
                        )}
                     >
                        Dê um passo na direção da vida que você deseja viver!
                     </p>
                     <p
                        className={cn(
                           'text-sm block md:hidden sm:text-base lg:text-lg font-medium text-gray-paragraph text-center md:text-left text-white font-gadugi',
                           { 'opacity-0': isSafari === null }
                        )}
                     >
                        Cuide de você com quem entende e acolhe.
                     </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-6">
                     <Button variant="default" className="w-[64%] mx-auto md:w-auto md:mx-0 h-10">
                        <span className="flex items-center gap-2">
                           <WhatsAppIcon className="w-4 h-4" />
                           <span className="text-base">Agendamentos</span>
                        </span>
                     </Button>
                  </div>
               </div>
            </div>
            <Image
               src={HeroImage}
               alt="Floresta hero"
               fill
               priority
               quality={100}
               placeholder="blur"
               className="absolute h-svh w-screen -z-10 object-cover md:object-top object-[75%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent -z-[5] md:hidden" />
            <Image
               src="/assets/whatsapp-icon.png"
               alt="WhatsApp"
               width={48}
               height={48}
               className="fixed bottom-4 right-4 z-50 md:hidden cursor-pointer"
            />
         </div>
      </React.Fragment>
   )
}
