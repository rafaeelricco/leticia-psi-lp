import { LineBenefits, Petal01, PetalSimple, WavyLine } from '@/src/components/icons/benefits'
import { useFlipAnimation } from '@/src/hooks/useFlipAnimation'

import React from 'react'

export const Benefits: React.FC = () => {
   const grouped_styles = {
      flip2: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip3: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip4: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip5: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip6: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip7: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip8: 'lg:col-span-1 min-h-[180px]',
      flip9: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip10: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip11: 'lg:col-span-1 min-h-[380px] lg:min-h-0',
      flip13: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip14: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip15: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip16: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip17: 'lg:col-span-1 min-h-[180px] lg:min-h-0',
      flip18: 'lg:col-span-1 min-h-[180px] lg:min-h-0'
   }

   const flip2 = useFlipAnimation({ id: 'benefit-2', className: grouped_styles.flip2 })
   const flip3 = useFlipAnimation({ id: 'benefit-3', className: grouped_styles.flip3 })
   const flip4 = useFlipAnimation({ id: 'benefit-4', className: grouped_styles.flip4 })
   const flip5 = useFlipAnimation({ id: 'benefit-5', className: grouped_styles.flip5 })
   const flip6 = useFlipAnimation({ id: 'benefit-6', className: grouped_styles.flip6 })
   const flip7 = useFlipAnimation({ id: 'benefit-7', className: grouped_styles.flip7 })
   const flip8 = useFlipAnimation({ id: 'benefit-8', className: grouped_styles.flip8 })
   const flip9 = useFlipAnimation({ id: 'benefit-9', className: grouped_styles.flip9 })
   const flip10 = useFlipAnimation({ id: 'benefit-10', className: grouped_styles.flip10 })
   const flip11 = useFlipAnimation({ id: 'benefit-11', className: grouped_styles.flip11 })
   const flip13 = useFlipAnimation({ id: 'benefit-13', className: grouped_styles.flip13 })
   const flip14 = useFlipAnimation({ id: 'benefit-14', className: grouped_styles.flip14 })
   const flip15 = useFlipAnimation({ id: 'benefit-15', className: grouped_styles.flip15 })
   const flip16 = useFlipAnimation({ id: 'benefit-16', className: grouped_styles.flip16 })
   const flip17 = useFlipAnimation({ id: 'benefit-17', className: grouped_styles.flip17 })
   const flip18 = useFlipAnimation({ id: 'benefit-18', className: grouped_styles.flip18 })

   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 pt-32 pb-12 container lg:px-[8vw]">
            <div className="grid gap-4 w-full [&>*]:w-full">
               <div className="grid lg:grid-rows-[378px] lg:grid-cols-[2fr_1fr_1fr] gap-4 [&>*]:w-full">
                  <div className="bg-support06 rounded-3xl shadow h-full flex items-center justify-center px-12 lg:px-[6vw] relative overflow-hidden min-h-[254px] lg:min-h-0">
                     <span className="text-3xl lg:text-4xl font-forum text-white text-start lg:mb-4">
                        Situações que podem indicar benefício em iniciar a psicoterapia:
                     </span>
                     <div className="absolute bottom-0 left-0 w-full">
                        <img
                           loading="lazy"
                           src="/assets/line-benefits-1.png"
                           alt="line-benefits-1"
                           className="w-full h-full object-cover"
                        />
                     </div>
                  </div>
                  <div {...flip2}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full flex items-center justify-center overflow-hidden">
                           <span className="text-lg font-gadugi text-center max-w-[80%] mx-auto text-white">
                              Percebe que <br className="hidden lg:block" /> a sua autoestima
                              <br className="hidden lg:block" /> está muito baixa
                           </span>
                           <div className="absolute -bottom-0.5 -rotate-[4deg] left-0 w-full">
                              <img
                                 loading="lazy"
                                 src="/assets/line-benefits-2.png"
                                 alt="line-benefits-2"
                                 className="w-full lg:scale-[1.02] h-full lg:object-cover hidden lg:block"
                              />
                           </div>
                           <div className="absolute lg:hidden block -top-4 left-40 w-full rotate-[10deg]">
                              <LineBenefits className="w-[600px] h-[60px]" />
                           </div>
                        </div>
                        <div className="flipper-back bg-support06 rounded-3xl shadow h-full overflow-hidden flex flex-col items-center lg:justify-end py-12">
                           <span className="text-lg font-gadugi text-center max-w-[80%] mx-auto text-white">
                              Está passando por uma situação difícil
                              <br className="hidden lg:block" /> para lidar com ela
                           </span>
                           <div className="absolute lg:top-1/2 left-0 w-full">
                              <img
                                 loading="lazy"
                                 src="/assets/img-benefits-5.png"
                                 alt="img-benefits-5"
                                 className="w-full h-full object-cover hidden lg:block"
                              />
                           </div>
                           <div className="absolute lg:hidden block top-0 left-0 w-full">
                              <LineBenefits className="w-full h-[60px]" />
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-rows-2 gap-4 min-w-0 [&>*]:w-full">
                     <div {...flip3}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full overflow-hidden">
                              <img
                                 loading="lazy"
                                 src="/assets/img-benefits-3.png"
                                 alt="line-benefits-2"
                                 className="w-full scale-[1.02] h-full object-cover"
                              />
                           </div>
                           <div className="flipper-back bg-support06 rounded-3xl shadow h-full flex flex-col items-center justify-center py-12">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white">
                                 Se sente desmotivado e frequentemente procrastina tarefas
                              </span>
                           </div>
                        </div>
                     </div>
                     <div {...flip4}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full overflow-hidden">
                              <img
                                 loading="lazy"
                                 src="/assets/img-benefits-4.png"
                                 alt="line-benefits-2"
                                 className="w-full scale-[1.02] h-full object-cover"
                              />
                           </div>
                           <div className="flipper-back bg-support06 rounded-3xl shadow h-full overflow-hidden">
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                                 <Petal01 className="w-[64px]" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               {/* row 2 - Ajustado grid para MD */}
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-rows-[448px] lg:grid-cols-4 gap-4 [&>*]:w-full">
                  <div className="grid gap-4 lg:grid-rows-[0.7fr_0.3fr_auto] md:col-span-2 lg:col-span-1">
                     <div {...flip5}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full">
                              <div className="flipper-front bg-support06 rounded-3xl shadow h-full overflow-hidden">
                                 <img
                                    loading="lazy"
                                    src="/assets/img-benefits-6.png"
                                    alt="line-benefits-2"
                                    className="w-full scale-[1.02] h-full object-cover"
                                 />
                              </div>
                           </div>
                           <div className="flipper-back bg-support06 rounded-3xl shadow h-full">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white">
                                 Tem um perfeccionismo que te paralisa, um sentimento de nunca ser bom o bastante 
                              </span>
                           </div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-4">
                        <div {...flip6}>
                           <div className="flipper-card h-full">
                              <div className="flipper-front bg-support06 rounded-3xl shadow h-full overflow-hidden">
                                 <img
                                    loading="lazy"
                                    src="/assets/img-benefits-7.png"
                                    alt="line-benefits-2"
                                    className="w-full scale-[1.02] h-full object-cover"
                                 />
                              </div>
                              <div className="flipper-back bg-support06 rounded-3xl shadow h-full">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                                    <Petal01 className="w-[42px] -rotate-180" />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div {...flip7}>
                           <div className="flipper-card h-full">
                              <div className="flipper-front bg-support06 rounded-3xl shadow h-full">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden">
                                    <Petal01 className="w-[42px]" />
                                 </div>
                              </div>
                              <div className="flipper-back bg-support06 rounded-3xl shadow h-full overflow-hidden">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center overflow-hidden">
                                    <WavyLine className="w-full scale-[1.02]" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div {...flip8}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 rounded-3xl shadow h-full">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white block">
                                 Vive uma vida muito distante dos seus valores
                              </span>
                           </div>
                           <div className="flipper-back bg-primary rounded-3xl shadow h-full overflow-hidden">
                              <img
                                 loading="lazy"
                                 src="/assets/img-benefits-8.png"
                                 alt="line-benefits-2"
                                 className="w-full scale-[1.02] h-full object-cover"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid gap-4 grid-rows-[2fr_1fr] md:col-span-1 lg:col-span-1">
                     <div {...flip9}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white">
                                 Gostaria de melhorar o relacionamento com pessoas ao seu redor
                              </span>
                           </div>
                           <div className="flipper-back bg-primary h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                              <img
                                 loading="lazy"
                                 src="/assets/img-benefits-9.png"
                                 alt="line-benefits-2"
                                 className="w-full scale-[1.02] h-full object-cover"
                              />
                           </div>
                        </div>
                     </div>
                     <div {...flip10}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                              <img
                                 src="/assets/line-benefits-10.png"
                                 alt="line-benefits-2"
                                 className="w-full h-full object-contain"
                              />
                           </div>
                           <div className="flipper-back bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white block">
                                 Sente que a ansiedade toma conta de você 
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid gap-4">
                     <div {...flip11}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                              <img
                                 src="/assets/img-benefits-10.png"
                                 alt="line-benefits-2"
                                 className="w-full scale-[1.02] h-full object-cover object-top"
                              />
                           </div>
                           <div className="flipper-back bg-primary h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                              <img
                                 src="/assets/img-benefits-11.png"
                                 alt="line-benefits-2"
                                 className="w-full scale-[1.02] h-full object-cover object-center"
                              />
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="grid gap-4 grid-rows-[0.3fr_auto] md:col-span-2 lg:col-span-1">
                     <div className="grid grid-flow-col gap-4 h-full">
                        <div {...flip13}>
                           <div className="flipper-card h-full">
                              <div className="flipper-front bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                                    <PetalSimple className="w-[54px]" />
                                 </div>
                              </div>
                              <div className="flipper-back bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                                 <img
                                    src="/assets/img-benefits-13.png"
                                    alt="line-benefits-2"
                                    className="w-full h-full object-cover"
                                 />
                              </div>
                           </div>
                        </div>
                        <div {...flip14}>
                           <div className="flipper-card h-full">
                              <div className="flipper-front bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                                    <PetalSimple className="w-[54px] -rotate-180" />
                                 </div>
                              </div>
                              <div className="flipper-back bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
                                    <PetalSimple className="w-[54px]" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div {...flip15}>
                        <div className="flipper-card h-full">
                           <div className="flipper-front bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white block">
                                 Deseja mudar alguns comportamentos ou hábitos, mas não está conseguindo
                              </span>
                              <div className="absolute -bottom-10 lg:bottom-[10%] left-0 w-full flex justify-center">
                                 <img
                                    src="/assets/img-benefits-15.png"
                                    alt="line-benefits-2"
                                    className="w-full object-contain"
                                 />
                              </div>
                           </div>
                           <div className="flipper-back bg-support06 h-full rounded-3xl shadow min-h-[100px] lg:min-h-0 overflow-hidden">
                              <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white block">
                                 Tem algum medo que te impede de fazer coisas que você gostaria
                              </span>
                              <div className="absolute -bottom-10 lg:bottom-[10%] left-0 w-full flex justify-center">
                                 <img
                                    src="/assets/img-benefits-15-back.png"
                                    alt="line-benefits-2"
                                    className="w-full h-auto object-contain"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="grid md:grid-cols-[1.55fr_1fr_0.5fr] lg:grid-rows-[124px] gap-4 [&>*]:w-full">
                  <div {...flip16}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full overflow-hidden">
                           <img
                              src="/assets/img-benefits-16.png"
                              alt="line-benefits-2"
                              className="w-full h-auto object-contain"
                           />
                        </div>
                        <div className="flipper-back bg-support06 rounded-3xl shadow h-full overflow-hidden">
                           <div className="px-10">
                              <span className="text-lg font-gadugi text-start max-w-[70%] text-white block">
                                 Tem muitos pensamentos negativos sobre você e ou sobre o mundo 
                              </span>
                              <div className="absolute bottom-0 -right-1/4 w-full flex justify-center">
                                 <img
                                    src="/assets/line-benefits-10-back.png"
                                    alt="line-benefits-2"
                                    className="w-full h-auto object-contain"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div {...flip17}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full">
                           <span className="text-lg font-gadugi text-center max-w-[70%] mx-auto text-white block">
                              Você não consegue lidar com as suas emoções 
                           </span>
                        </div>
                        <div className="flipper-back bg-support06 rounded-3xl shadow h-full">
                           <span className="text-lg font-gadugi text-center mx-auto max-w-[70%] text-white block">
                              Deixou de sentir prazer e realizar atividades que antes gostava 
                           </span>
                        </div>
                     </div>
                  </div>
                  <div {...flip18}>
                     <div className="flipper-card h-full">
                        <div className="flipper-front bg-support06 rounded-3xl shadow h-full overflow-hidden">
                           <img
                              loading="lazy"
                              src="/assets/img-benefits-18.png"
                              alt="line-benefits-2"
                              className="w-full h-auto object-contain"
                           />
                        </div>
                        <div className="flipper-back bg-primary rounded-3xl shadow h-full overflow-hidden">
                           <img
                              loading="lazy"
                              src="/assets/img-benefits-18-back.png"
                              alt="line-benefits-2"
                              className="w-full h-full object-cover"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
