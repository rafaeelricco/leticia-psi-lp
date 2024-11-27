import * as React from 'react'

import { cn } from '@/lib/utils'

interface UseFlipAnimationProps {
   id: string
   perspective?: number
   className?: string
}

export const useFlipAnimation = ({ id, perspective = 800, className }: UseFlipAnimationProps) => {
   const handleFlip = React.useCallback((event: React.MouseEvent<HTMLDivElement>) => {
      const container = event.currentTarget
      const isFlipped = container.getAttribute('data-flipped') === 'true'
      container.setAttribute('data-flipped', (!isFlipped).toString())
   }, [])

   return {
      id,
      className: cn('flipper', className, { [`flipper-${id}`]: id }),
      style: { perspective: `${perspective}px` },
      onClick: handleFlip,
      'data-flipped': 'false'
   }
}
