import * as React from 'react'

export function ServicesBackground(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg
         viewBox="0 0 1921 1216"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
         preserveAspectRatio="xMidYMid slice"
         xmlnsXlink="http://www.w3.org/1999/xlink"
         {...props}
      >
         <path fill="url(#paint0_linear_2400_946)" d="M0 0H1920V1216H0z" />
         <mask id="a" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={3} y={0} width={1918} height={1216}>
            <path fill="url(#paint1_linear_2400_946)" d="M3 0H1921V1216H3z" />
         </mask>
         <g mask="url(#a)">
            <path fill="url(#pattern0_2400_946)" fillOpacity={0.1} d="M-483.493 -889H1918.007V3386H-483.493z" />
         </g>
         <defs>
            <pattern id="pattern0_2400_946" patternContentUnits="objectBoundingBox" width={1} height={1}>
               <use xlinkHref="#image0_2400_946" transform="matrix(.0005 0 0 .00028 -.094 0)" />
            </pattern>
            <linearGradient
               id="paint0_linear_2400_946"
               x1={1622}
               y1={248.781}
               x2={-1810.97}
               y2={2825.18}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#FAF3EB" />
               <stop offset={1} stopColor="#CCB79F" stopOpacity={0.7} />
            </linearGradient>
            <linearGradient
               id="paint1_linear_2400_946"
               x1={1623.31}
               y1={248.781}
               x2={-1808.66}
               y2={2821.75}
               gradientUnits="userSpaceOnUse"
            >
               <stop stopColor="#FAF3EB" />
               <stop offset={1} stopColor="#CCB79F" stopOpacity={0.7} />
            </linearGradient>
            <image
               id="image0_2400_946"
               width={2404}
               height={3600}
            />
         </defs>
      </svg>
   )
}