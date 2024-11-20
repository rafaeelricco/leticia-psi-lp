'use client'

import * as React from 'react'

export const Container: React.FC<React.SVGProps<SVGSVGElement> & { children?: React.ReactNode }> = ({
   children,
   ...props
}) => {
   return (
      <svg viewBox="0 0 743 825" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <rect x={0.5} y={0.5} width={742} height={824} rx={64.5} fill="url(#paint0_linear_2142_18490)" stroke="#fff" />
         {children}
         <defs>
            <linearGradient
               id="paint0_linear_2142_18490"
               x1={371.5}
               y1={0}
               x2={371.5}
               y2={825}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#677855" stopOpacity={0.8} />
               <stop offset={0.07} stopColor="#859970" />
               <stop offset={1} stopColor="#A9C191" />
            </linearGradient>
         </defs>
      </svg>
   )
}

export const ApproachBackground: React.FC<React.SVGProps<SVGSVGElement>> = (props: React.SVGProps<SVGSVGElement>) => {
   return (
      <svg
         viewBox="0 0 1925 619"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="xMidYMid slice"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         {...props}
      >
         <g clipPath="url(#clip0_2411_429)">
            <path fill="#677855" d="M0 0H1925V619H0z" />
            <circle cx={1021} cy={309.5} r={309.5} fill="url(#paint0_radial_2411_429)" fillOpacity={0.9} />
            <mask id="a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={5} y={0} width={1920} height={619}>
               <path fill="#677855" d="M5 0H1925V619H5z" />
            </mask>
            <g mask="url(#a)">
               <path opacity={0.3} fill="url(#pattern0_2411_429)" fillOpacity={0.45} d="M873 -440H1925V1136H873z" />
            </g>
         </g>
         <defs>
            <pattern id="pattern0_2411_429" patternContentUnits="objectBoundingBox" width={1} height={1}>
               <use xlinkHref="#image0_2411_429" transform="scale(.00042 .00028)" />
            </pattern>
            <radialGradient
               id="paint0_radial_2411_429"
               cx={0}
               cy={0}
               r={1}
               gradientUnits="userSpaceOnUse"
               gradientTransform="matrix(0 309.5 -309.5 0 1021 309.5)"
            >
               <stop stopColor="#FAF3EB" />
               <stop offset={1} stopColor="#CCB79F" stopOpacity={0} />
            </radialGradient>
            <clipPath id="clip0_2411_429">
               <path fill="#fff" d="M0 0H1925V619H0z" />
            </clipPath>
            <image
               id="image0_2411_429"
               width={2404}
               height={3600}
            />
         </defs>
      </svg>
   )
}