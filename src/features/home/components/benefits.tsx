import React from 'react'

export const Benefits: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 pt-32 pb-56 container space-y-4">
            <div className="grid grid-cols-[0.5fr_0.25fr_0.25fr] grid-rows-[378px] gap-4">
               <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
               <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
               <div className="grid gap-4">
                  <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
                  <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
               </div>
            </div>
            <div className="grid grid-cols-[0.5fr_0.25fr_0.25fr] grid-rows-[335px] gap-4">
               <div className="flex flex-col flex-1 gap-4">
                  <div className="bg-support06 w-full h-[211px] rounded-3xl shadow"></div>
                  <div className="flex items-center gap-4 h-[120px]">
                     <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
                     <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
                  </div>
               </div>
               <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
               <div className="flex flex-col flex-1 gap-4">
                  <div className="flex items-center gap-4 h-[120px]">
                     <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
                     <div className="bg-support06 w-full h-full rounded-3xl shadow"></div>
                  </div>
                  <div className="bg-support06 w-full h-[361px] rounded-3xl shadow"></div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
