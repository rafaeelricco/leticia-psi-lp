declare global {
   interface Window {
      gtag: (...args: any[]) => void
   }
}

export const handleWhatsAppClick = () => {
   if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
         send_to: 'AW-16849677199/BonJCLTlr5gaEI_XxuI-'
      })
   }
}
