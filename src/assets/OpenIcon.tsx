import { SVGProps } from 'react'

export const OpenIcon = (props: SVGProps<SVGElement>) => (
  <svg
    aria-hidden='false'
    aria-label='Open Detail View'
    role='img'
    height='14px'
    preserveAspectRatio='xMidYMid meet'
    viewBox='0 0 72.5 72.5'
  >
    <polygon
      fill={props.fill}
      strokeWidth='0px'
      points='72.5 0 .8 0 .8 6 62.2 6 2.9 65.4 7.1 69.6 66.5 10.3 66.5 71.7 72.5 71.7 72.5 0'
    />
  </svg>
)
