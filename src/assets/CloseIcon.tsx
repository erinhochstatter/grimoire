import React, { SVGProps } from 'react'

export const CloseIcon = (props: SVGProps<SVGElement>) => (
  <svg
    aria-hidden='false'
    aria-label='Close Post Detail View'
    role='img'
    height='14px'
    viewBox='0 0 72.5 72.5'
  >
    <polygon
      fill={props.fill}
      points='72.31 4.43 68.07 .19 36.25 32.01 4.43 .19 .19 4.43 32.01 36.25 .19 68.07 4.43 72.31 36.25 40.49 68.07 72.31 72.31 68.07 40.49 36.25 72.31 4.43'
    />
  </svg>
)
