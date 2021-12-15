import React from 'react'
import { colors, themeColor } from '../../types'
import { IconType, typeIcon } from './icon-types'

export type { IconType }

export interface AtIconProps {
  className?: string
  src?: string
  color?: themeColor
  size?: number
  type?: IconType
}

export const AtIcon = ({ className, src, color, size, type }: AtIconProps) => {
  return type ? (
    typeIcon(type, colors[color ?? 'secondary-dark'], size, className)
  ) : (
    <img className={className} src={src} alt={type} width={size} height={size} />
  )
}
