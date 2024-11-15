'use client'

import { Logo } from '@/components/icons/header'
import { WhatsAppIcon } from '@/components/icons/hero'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { PanelLeftIcon } from 'lucide-react'

import React from 'react'

const Header: React.FC<HeaderProps> = ({ className }: HeaderProps) => {
   const handleScrollTo = (scrollTo: string) => {
      const element = document.querySelector(scrollTo)
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' })
      }
   }

   const items = [
      {
         id: 1,
         label: 'Sobre mim',
         tooltip: 'home',
         disabled: false,
         scrollTo: '#hero',
         link: '/',
         external: false
      },
      {
         id: 2,
         label: 'O atendimento',
         tooltip: 'why-buy-ucs',
         disabled: false,
         scrollTo: '#why-buy-ucs',
         link: '/',
         external: false
      },
      {
         id: 3,
         label: 'Abordagem',
         tooltip: 'sustainability',
         disabled: false,
         scrollTo: '#sustainability',
         link: '/',
         external: false
      },
      {
         id: 4,
         label: 'Como sei de devo fazer terapia?',
         tooltip: 'bank-of-amazonia',
         disabled: false,
         scrollTo: '#bank-of-amazonia',
         link: '/',
         external: false
      }
   ]

   return (
      <React.Fragment>
         <nav
            className={cn(
               'fixed z-50 backdrop-blur-sm py-4 px-8 grid container rounded-3xl border-[rgba(255,255,255,0.28)] border [background:rgba(103,120,85,0.6)_0_0_/_100%,rgba(150,143,135,0.16)_0_0_/_100%] [background-blend-mode:multiply] top-12 left-1/2 -translate-x-1/2',
               className
            )}
         >
            <div className="flex items-center justify-between w-full container px-4 md:px-0 gap-12">
               <Logo className="w-fit h-[36px]" />
               <div className="hidden grid-flow-col items-center gap-6 md:grid">
                  {items.map((item, index) => (
                     <React.Fragment key={item.id + index}>
                        <ul className="w-full flex items-center gap-2">
                           <li>
                              <TooltipProvider>
                                 <Tooltip>
                                    <TooltipTrigger asChild>
                                       <div>
                                          {item.disabled ? (
                                             <p className="font-gadugi text-white font-medium flex-shrink cursor-default opacity-50">
                                                {item.label}
                                             </p>
                                          ) : (
                                             <button
                                                onClick={() => handleScrollTo(item.scrollTo)}
                                                className="font-gadugi text-white hover:text-white/80 flex-shrink cursor-pointer hover:underline font-medium whitespace-nowrap"
                                             >
                                                {item.label}
                                             </button>
                                          )}
                                       </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="bottom">
                                       <p className="font-gadugi text-base font-medium">{item.tooltip}</p>
                                    </TooltipContent>
                                 </Tooltip>
                              </TooltipProvider>
                           </li>
                        </ul>
                        {index < items.length - 1 && <Separator orientation="vertical" className="h-6" />}
                     </React.Fragment>
                  ))}
               </div>
               <Button variant="default" className="w-full sm:w-auto hidden md:block">
                  <span className="flex items-center gap-2">
                     <WhatsAppIcon className="w-4 h-4" />
                     <span className="text-base">Agendamentos</span>
                  </span>
               </Button>
               <div className="md:hidden">
                  <Drawer direction="right" shouldScaleBackground={false}>
                     <DrawerTrigger asChild>
                        <Button size="icon" variant="outline">
                           <PanelLeftIcon className="h-5 w-5" />
                           <span className="sr-only">toggle-menu</span>
                        </Button>
                     </DrawerTrigger>
                     <DrawerContent className="max-w-xs fixed w-[40rem] h-screen overflow-y-scroll overflow-x-hidden flex flex-col top-0 right-0 z-[998] py-12 2xl:py-14 px-12 focus:outline-none space-y-8">
                        <DrawerHeader className="p-0">
                           <DrawerTitle className="p-0">
                              <Logo className="w-[197px] h-[28px]" />
                           </DrawerTitle>
                        </DrawerHeader>
                        <div className="grid gap-8">
                           {/* <SelectLanguage className="w-fit" /> */}
                           <div className="grid gap-6">
                              {items.map((item, index) => (
                                 <div key={item.id + index}>
                                    <TooltipProvider>
                                       <Tooltip>
                                          <TooltipTrigger asChild>
                                             <div>
                                                {item.disabled ? (
                                                   <p className="font-sf-pro-display text-green-default font-semibold opacity-50">
                                                      {item.label}
                                                   </p>
                                                ) : (
                                                   <button
                                                      onClick={() => handleScrollTo(item.scrollTo)}
                                                      className="font-sf-pro-display text-green-default hover:text-green-default/80 hover:underline font-semibold"
                                                   >
                                                      {item.label}
                                                   </button>
                                                )}
                                             </div>
                                          </TooltipTrigger>
                                          <TooltipContent side="right">
                                             <p className="font-sf-pro-display text-base font-medium">{item.tooltip}</p>
                                          </TooltipContent>
                                       </Tooltip>
                                    </TooltipProvider>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </DrawerContent>
                  </Drawer>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

type HeaderProps = {
   className?: string
}

export { Header }
