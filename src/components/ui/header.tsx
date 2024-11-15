'use client'

import { Logo } from '@/components/icons/header'
import { WhatsAppIcon } from '@/components/icons/hero'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

import Link from 'next/link'
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
               <div className="lg:hidden">
                  <Sheet>
                     <SheetTrigger asChild>
                        <div>
                           <HamburgerIcon className="bg-transparent" />
                           <span className="sr-only">toggle-menu</span>
                        </div>
                     </SheetTrigger>
                     <SheetContent side="left" className="sm:max-w-xs">
                        <nav className="grid gap-6 text-lg font-medium">
                           <Link
                              href="#"
                              className="bg-primary text-primary-foreground group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold md:text-base"
                              prefetch={false}
                           >
                              <span className="sr-only">© 2024 Ricco Ltda. All rights reserved.</span>
                           </Link>
                           {items.map((item, index) => (
                              <Link
                                 key={item.id + index}
                                 href={item.link}
                                 className="text-muted-foreground flex items-center gap-4 px-2.5 hover:text-foreground hover:underline"
                                 prefetch={false}
                              >
                                 {item.label}
                              </Link>
                           ))}
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
                  'relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md',
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
