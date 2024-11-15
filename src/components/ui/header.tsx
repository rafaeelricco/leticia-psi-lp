'use client'

import { Logo } from '@/components/icons/header'
import { WhatsAppIcon } from '@/components/icons/hero'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

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
               'fixed z-50 backdrop-blur-sm w-[calc(100%-2rem)] md:w-auto py-4 md:px-4 grid rounded-3xl border-[rgba(255,255,255,0.28)] border [background:rgba(103,120,85,0.6)_0_0_/_100%,rgba(150,143,135,0.16)_0_0_/_100%] [background-blend-mode:multiply] top-12 left-1/2 -translate-x-1/2 transition-all duration-300 overflow-hidden',
               className
            )}
         >
            <div className="flex items-center justify-between w-full container sm:px-4 md:px-0 gap-4 sm:gap-10">
               <Logo className="h-[32px] sm:h-[36px]" />
               <div className="hidden md:grid grid-flow-col items-center gap-4 md:gap-6">
                  {items.map((item, index) => (
                     <React.Fragment key={item.id + index}>
                        <ul className="w-full flex items-center gap-2">
                           <li>
                              <TooltipProvider>
                                 <Tooltip>
                                    <TooltipTrigger asChild>
                                       <div>
                                          {item.disabled ? (
                                             <p className="font-gadugi text-white text-sm lg:text-base font-medium flex-shrink cursor-default opacity-50">
                                                {item.label}
                                             </p>
                                          ) : (
                                             <button
                                                onClick={() => handleScrollTo(item.scrollTo)}
                                                className="font-gadugi text-white hover:text-white/80 text-sm lg:text-base flex-shrink cursor-pointer hover:underline font-medium whitespace-nowrap"
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
               <Button variant="default" className="w-full sm:w-auto hidden lg:block">
                  <span className="flex items-center gap-2">
                     <WhatsAppIcon className="w-4 h-4" />
                     <span className="text-base">Agendamentos</span>
                  </span>
               </Button>
               <div className="md:hidden">
                  <Sheet>
                     <SheetTrigger asChild>
                        <div>
                           <HamburgerIcon className="bg-green rounded-lg" />
                           <span className="sr-only">toggle-menu</span>
                        </div>
                     </SheetTrigger>
                     <SheetContent side="right" className="border-none">
                        <nav className="grid gap-8 mt-8 text-lg">
                           <div className="grid gap-4">
                              {items.map((item, index) => (
                                 <React.Fragment key={item.id + index}>
                                    <div className="flex flex-col">
                                       <button
                                          onClick={() => handleScrollTo(item.scrollTo)}
                                          className="text-green hover:text-green/80 text-left font-gadugi font-medium hover:underline"
                                          disabled={item.disabled}
                                       >
                                          {item.label}
                                       </button>
                                    </div>
                                    {index < items.length - 1 && <Separator className="bg-white/20" />}
                                 </React.Fragment>
                              ))}
                           </div>
                           <Button variant="default" className="w-full mt-4">
                              <span className="flex items-center gap-2">
                                 <WhatsAppIcon className="w-4 h-4" />
                                 <span className="text-base">Agendamentos</span>
                              </span>
                           </Button>
                        </nav>
                     </SheetContent>
                  </Sheet>
               </div>
            </div>
         </nav>
      </React.Fragment>
   )
}

const HamburgerIcon: React.FC<{ className?: string }> = ({ className }) => {
   return (
      <div>
         <button className="relative group">
            <div
               className={cn(
                  'relative flex overflow-hidden items-center justify-center rounded-full p-2.5 transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md',
                  className
               )}
            >
               <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg]"></div>
                  <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-translate-x-10"></div>
                  <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg]"></div>
               </div>
            </div>
         </button>
      </div>
   )
}

type HeaderProps = {
   className?: string
}

export { Header }