import React from 'react'

export const Benefits: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 pt-32 pb-56 container">
            <div className="grid gap-4 w-full [&>*]:w-full">
               {/* row 1 */}
               <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-[378px] gap-4 [&>*]:w-full">
                  <div className="bg-support06 rounded-3xl shadow min-w-0"></div>
                  <div className="bg-support06 rounded-3xl shadow min-w-0"></div>
                  <div className="grid gap-4 min-w-0">
                     <div className="bg-support06 rounded-3xl shadow"></div>
                     <div className="bg-support06 rounded-3xl shadow"></div>
                  </div>
               </div>

               {/* row 2 */}
               <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[448px] gap-4 [&>*]:w-full">
                  <div className="grid gap-4">
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                     <div className="grid grid-flow-col gap-4">
                        <div className="bg-support06 h-full rounded-3xl shadow"></div>
                        <div className="bg-support06 h-full rounded-3xl shadow"></div>
                     </div>
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                  </div>

                  <div className="grid gap-4 grid-rows-[2fr_1fr]">
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                  </div>

                  <div className="grid gap-4 grid-rows-[2fr_1fr]">
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                  </div>

                  <div className="grid gap-4 grid-rows-[0.3fr_auto]">
                     <div className="grid grid-flow-col gap-4 h-full">
                        <div className="bg-support06 h-full rounded-3xl shadow"></div>
                        <div className="bg-support06 h-full rounded-3xl shadow"></div>
                     </div>
                     <div className="bg-support06 h-full rounded-3xl shadow"></div>
                  </div>
               </div>

               {/* row 3 */}
               <div className="grid grid-cols-[2fr_1.5fr_0.5fr] grid-rows-[138px] gap-4 [&>*]:w-full">
                  <div className="bg-support06 h-full rounded-3xl shadow"></div>
                  <div className="bg-support06 h-full rounded-3xl shadow"></div>
                  <div className="bg-support06 h-full rounded-3xl shadow"></div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
