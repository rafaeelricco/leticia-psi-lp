import * as React from 'react'

import { cn } from '@/lib/utils'

export const useFlipAnimation = ({ id, perspective = 800, className }: UseFlipAnimationProps) => {
   const handleFlip = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      const container = event.currentTarget
      const isFlipped = container.getAttribute('data-flipped') === 'true'
      container.setAttribute('data-flipped', (!isFlipped).toString())
   }, [])

   return {
      id,
      className: cn('flipper w-full h-full min-h-[100px]', className, { [`flipper-${id}`]: id }),
      style: { perspective: `${perspective}px` },
      onClick: handleFlip,
      'data-flipped': 'false'
   }
}

interface UseFlipAnimationProps {
   id: string
   perspective?: number
   className?: string
}
