import { SVGAttributes } from 'react'

export const GoogleIcon = ({
  width = 30,
  height = 30,
  ...props
}: SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0,0,256,256'
    width={width}
    height={height}
    fill='#ffffff'
    fill-rule='nonzero'
    {...props}
  >
    <g
      fill-rule='nonzero'
      stroke='none'
      stroke-width='1'
      stroke-linecap='butt'
      stroke-linejoin='miter'
      stroke-miterlimit='10'
      stroke-dasharray=''
      stroke-dashoffset='0'
      font-family='none'
      font-weight='none'
      font-size='none'
      text-anchor='none'
    >
      <g transform='scale(3.55556,3.55556)'>
        <path d='M36.005,31.774l22.623,0.032c1.975,9.355 -1.635,28.194 -22.623,28.194c-13.257,0 -24.005,-10.745 -24.005,-24c0,-13.255 10.748,-24 24.005,-24c6.227,0 11.899,2.371 16.164,6.257l-6.755,6.753c-2.532,-2.169 -5.813,-3.487 -9.409,-3.487c-7.996,0 -14.48,6.481 -14.48,14.476c0,7.995 6.482,14.476 14.48,14.476c6.716,0 11.359,-3.975 13.067,-9.532h-13.067z'></path>
      </g>
    </g>
  </svg>
)
