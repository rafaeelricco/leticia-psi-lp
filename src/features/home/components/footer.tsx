import * as React from 'react'

import { FooterPattern } from '@/src/components/icons/footer'

export const Footer: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative bg-green overflow-hidden w-full pt-12 md:pt-8 min-h-[224px] h-full">
            <FooterPattern className="absolute inset-0 w-full h-full object-cover min-h-[224px]" />
         </div>
      </React.Fragment>
   )
}
