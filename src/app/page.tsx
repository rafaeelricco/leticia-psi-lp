import dynamic from 'next/dynamic'

const HomePageComponent = dynamic(() => import('@/features/home/home').then((mod) => mod.HomePageComponent), {
   ssr: true
})

export default function HomePage() {
   return <HomePageComponent />
}
