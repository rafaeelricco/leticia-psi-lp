import { useFlipAnimation } from '@/src/hooks/useFlipAnimation'
import React from 'react'

export const Benefits: React.FC = () => {
   const flip1 = useFlipAnimation({ id: 'benefit-1', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip2 = useFlipAnimation({ id: 'benefit-2', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip3 = useFlipAnimation({ id: 'benefit-3', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip4 = useFlipAnimation({ id: 'benefit-4', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip5 = useFlipAnimation({ id: 'benefit-5', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip6 = useFlipAnimation({ id: 'benefit-6', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip7 = useFlipAnimation({ id: 'benefit-7', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip8 = useFlipAnimation({ id: 'benefit-8', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip9 = useFlipAnimation({ id: 'benefit-9', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip10 = useFlipAnimation({ id: 'benefit-10', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip11 = useFlipAnimation({ id: 'benefit-11', className: 'min-h-[200px] md:min-h-0 h-full' })
   const flip12 = useFlipAnimation({ id: 'benefit-12', className: 'min-h-[200px] md:min-h-0 h-full' })

   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 pt-32 pb-56 container">
            <div className="grid gap-4 w-full [&>*]:w-full">
               {/* row 1 - Ajustado grid-rows para MD */}
               <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-rows-[300px] lg:grid-cols-[2fr_1fr_1fr] gap-4 [&>*]:w-full">
                  <div {...flip1}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 1</div>
                        <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 1</div>
                     </div>
                  </div>
                  <div {...flip2}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 2</div>
                        <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 2</div>
                     </div>
                  </div>
                  <div className="grid grid-rows-2 gap-4 min-w-0">
                     <div {...flip3}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 3</div>
                           <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 3</div>
                        </div>
                     </div>
                     <div {...flip4}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 4</div>
                           <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 4</div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* row 2 - Ajustado grid para MD */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-rows-[448px] lg:grid-cols-4 gap-4 [&>*]:w-full">
                  <div className="grid gap-4 lg:grid-rows-[41%_20%_auto] md:col-span-2 lg:col-span-1">
                     <div {...flip5}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 5</div>
                           <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 5</div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div {...flip6}>
                           <div className="flipper-card h-full">
                              <div className="flipper-front bg-support06 rounded-3xl shadow h-full">
                                 Front Content 6
                              </div>
                              <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 6</div>
                           </div>
                        </div>
                        <div {...flip7}>
                           <div className="flipper-card h-full">
                              <div className="flipper-front bg-support06 rounded-3xl shadow h-full">
                                 Front Content 7
                              </div>
                              <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 7</div>
                           </div>
                        </div>
                     </div>
                     <div {...flip8}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 8</div>
                           <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 8</div>
                        </div>
                     </div>
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
                  <div {...flip10}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 10</div>
                        <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 10</div>
                     </div>
                  </div>
                  <div {...flip11}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 11</div>
                        <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 11</div>
                     </div>
                  </div>
                  <div {...flip12}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full">Front Content 12</div>
                        <div className="flipper-back bg-primary rounded-3xl shadow h-full">Back Content 12</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
