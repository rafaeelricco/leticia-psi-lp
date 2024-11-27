import React from 'react'

export const Benefits: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 pt-32 pb-56 container">
            <div className="grid gap-4 w-full [&>*]:w-full">
               {/* row 1 - Ajustado grid-rows para MD */}
               <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-rows-[300px] lg:grid-cols-[2fr_1fr_1fr] gap-4 [&>*]:w-full">
                  <div className="bg-support06 rounded-3xl shadow min-w-0 min-h-[200px] md:min-h-[300px] lg:min-h-0"></div>
                  <div className="bg-support06 rounded-3xl shadow min-w-0 min-h-[200px] md:min-h-[300px] lg:min-h-0"></div>
                  <div className="grid grid-cols-2 md:grid-cols-2 md:col-span-2 lg:col-span-1 lg:grid-cols-1 gap-4 min-w-0">
                     <div className="bg-support06 rounded-3xl shadow min-h-[100px] md:min-h-[145px] lg:min-h-0"></div>
                     <div className="bg-support06 rounded-3xl shadow min-h-[100px] md:min-h-[145px] lg:min-h-0"></div>
                  </div>
               </div>

               {/* row 2 - Ajustado grid para MD */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-rows-[448px] lg:grid-cols-4 gap-4 [&>*]:w-full">
                  <div className="grid gap-4 lg:grid-rows-[41%_20%_auto] md:col-span-2 lg:col-span-1">
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                     <div className="grid grid-cols-2 gap-4">
                        <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                        <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                     </div>
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                  </div>

                  <div className="grid gap-4 grid-rows-[2fr_1fr] md:col-span-1 lg:col-span-1">
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                  </div>

                  <div className="grid gap-4 grid-rows-[2fr_1fr] md:col-span-1 lg:col-span-1">
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                  </div>

                  <div className="grid gap-4 grid-rows-[0.3fr_auto] md:col-span-2 lg:col-span-1">
                     <div className="grid grid-flow-col gap-4 h-full">
                        <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                        <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                     </div>
                     <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                  </div>
               </div>

               {/* row 3 - Ajustado grid para MD */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:grid-rows-[auto] lg:grid-rows-[124px] lg:grid-cols-[2fr_1.5fr_0.5fr] gap-4 [&>*]:w-full">
                  <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] md:col-span-2 lg:col-span-1 lg:min-h-0"></div>
                  <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
                  <div className="bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0"></div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
