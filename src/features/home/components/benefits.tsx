import React from 'react'

export const Benefits: React.FC = () => {
   return (
      <React.Fragment>
         <div className="relative overflow-hidden w-full -mt-12 pt-32 pb-56 container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               <div className="grid gap-4">
                  <div>
                     <div className="bg-support06 w-full h-[290px] rounded-xl shadow"></div>
                  </div>
                  <div>
                     <div className="bg-support06 w-full h-[290px] rounded-xl shadow"></div>
                  </div>
                  <div>
                     <div className="bg-support06 w-full h-[174px] rounded-xl shadow"></div>
                  </div>
               </div>
               <div className="grid gap-4">
                  <div>
                     <div className="bg-support06 w-full h-[155px] rounded-xl shadow"></div>
                  </div>
                  <div>
                     <div className="bg-support06 w-full h-[349px] rounded-xl shadow"></div>
                  </div>
                  <div>
                     <div className="bg-support06 w-full h-[250px] rounded-xl shadow"></div>
                  </div>
               </div>
               <div className="grid gap-4">
                  <div>
                     <div className="bg-support06 w-full h-[349px] rounded-xl shadow"></div>
                  </div>
                  <div>
                     <div className="bg-support06 w-full h-[155px] rounded-xl shadow"></div>
                  </div>
                  <div>
                     <div className="bg-support06 w-full h-[250px] rounded-xl shadow"></div>
                  </div>
               </div>
               <div className="flex flex-col gap-4">
                  <div className="bg-support06 w-full min-h-[309px] rounded-xl shadow"></div>
                  <div className="bg-support06 w-full min-h-[155px] rounded-xl shadow"></div>
                  <div className="bg-support06 w-full h-full rounded-xl shadow"></div>
               </div>
            </div>
         </div>
      </React.Fragment>
   )
}
