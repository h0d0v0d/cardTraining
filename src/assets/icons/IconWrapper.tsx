import * as React from 'react'

export type IconProps = {
  color?: string
  size?: number
  autoSize?: boolean
  svgProps?: React.SVGProps<SVGSVGElement>
} & Omit<React.HTMLProps<HTMLSpanElement>, 'color' | 'size'>

export const IconWrapper: React.FC<{ icon: React.ReactNode } & IconProps> = ({
  icon,
  color: colorProp,
  size: sizeProp,
  autoSize,
  ...restProps
}) => {
  const color = colorProp ? colorProp : '#fff'
  const size = sizeProp ? `${sizeProp}px` : '24px'

  return (
    <span
      role="img"
      aria-hidden="true"
      style={{
        color: color,
        width: size,
        height: size,
        display: 'inline-flex',
      }}
      {...restProps}
    >
      {icon}
    </span>
  )
}
