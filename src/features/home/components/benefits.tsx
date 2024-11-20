import React from 'react'

export const Benefits: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 md:pt-20 lg:pt-32 pb-56 container">
            <div className="grid grid-rows-3 gap-4">
               <div className="grid grid-cols-[45%_35%_auto] gap-4 h-[372px]">
                  <div id="box-1" className="bg-support06 w-full h-full rounded-3xl py-4  px-6"></div>
                  <div id="box-2" className="bg-support06 w-full h-full rounded-3xl py-4 px-6"></div>
                  <div id="box-3" className="bg-support06 w-full h-full rounded-3xl py-4  px-6"></div>
               </div>

               <div className="grid grid-cols-[45%_35%_auto] gap-4 h-[335px]">
                  <div id="box-4" className="bg-support06 w-full h-full rounded-3xl py-4  px-6"></div>
                  <div id="box-5" className="bg-support06 w-full h-full rounded-3xl py-4  px-6"></div>
                  <div id="box-6" className="bg-support06 w-full h-full rounded-3xl py-4  px-6"></div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
