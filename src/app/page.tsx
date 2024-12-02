import { HomePageComponent } from '@/features/home/home'

import React from 'react'

export default async function HomePage() {
   return (
      <React.Suspense>
         <HomePageComponent />
      </React.Suspense>
   )
}
