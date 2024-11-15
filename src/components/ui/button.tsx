import * as React from 'react'

import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
   'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300 font-gadugi font-medium',
   {
      variants: {
         variant: {
            default:
               'bg-[#677855] rounded-xl text-white font-forum hover:bg-primary/90 dark:bg-white-default dark:text-black-primary dark:hover:bg-white-default/90',
            destructive:
               'bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90',
            outline:
               'border border-neutral-200 bg-transparent text-white hover:bg-white/10 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
            secondary:
               'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
            ghost: 'hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50',
            link: 'text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50'
         },
         size: {
            default: 'px-8 py-1.5',
            sm: 'h-9 rounded-md px-3',
            lg: 'h-14 rounded-md px-8',
            icon: 'h-10 w-10'
         }
      },
      defaultVariants: {
         variant: 'default',
         size: 'default'
      }
   }
)

export interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   asChild?: boolean
   loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   ({ className, variant, size, asChild = false, loading = false, ...props }, ref) => {
      const Comp = asChild ? Slot : 'button'
      return (
         <Comp
            className={cn(buttonVariants({ variant, size, className }), loading && 'cursor-wait')}
            disabled={loading || props.disabled}
            ref={ref}
            {...props}
         >
            <div className="relative">
               <span className={cn(loading && 'invisible')}>{props.children}</span>
               {loading && (
                  <span className="loader absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animation-spin" />
               )}
            </div>
         </Comp>
      )
   }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
