'use client'

import { Logo } from '@/components/icons/header'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
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
         label: 'home',
         tooltip: 'home',
         disabled: false,
         scrollTo: '#hero',
         link: '/',
         external: false
      },
      {
         id: 2,
         label: 'why-buy-ucs',
         tooltip: 'why-buy-ucs',
         disabled: false,
         scrollTo: '#why-buy-ucs',
         link: '/',
         external: false
      },
      {
         id: 3,
         label: 'sustainability',
         tooltip: 'sustainability',
         disabled: false,
         scrollTo: '#sustainability',
         link: '/',
         external: false
      },
      {
         id: 4,
         label: 'bank-of-amazonia',
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
               'w-fit fixed top-0 z-50 backdrop-blur-sm py-4 px-8 md:py-6 grid justify-items-center border rounded-3xl border-gray-border bg-gradient-to-r from-[#67785530] to-[#968F8716]',
               className
            )}
         >
            <div className="flex items-center justify-between w-full container px-4 md:px-0">
               <Logo className="w-fit h-[36px]" />
               <div className="grid items-center gap-12">
                  <div className="hidden grid-flow-col items-center gap-12 md:grid">
                     {items.map((item, index) => (
                        <ul className="w-full" key={item.id + index}>
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
                                                className="font-gadugi text-white hover:text-white/80 flex-shrink cursor-pointer hover:underline font-medium"
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
                     ))}
                  </div>
               </div>
               <div className="md:hidden">
                  <Drawer direction="right" shouldScaleBackground={false}>
                     <DrawerTrigger asChild>
                        <Button size="icon" variant="outline">
                           <PanelLeftIcon className="h-5 w-5" />
                           <span className="sr-only">toggle-menu</span>
                        </Button>
                     </DrawerTrigger>
                     <DrawerContent className="max-w-xs bg-white-default fixed w-[40rem] h-screen overflow-y-scroll overflow-x-hidden flex flex-col top-0 right-0 z-[998] py-12 2xl:py-14 px-12 focus:outline-none space-y-8">
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
