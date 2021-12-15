import React, { ReactNode, useState } from 'react'
import { Target } from '../..'
import { themeColor } from '../../types/colors'
import { AtIcon, AtIconProps } from '../AtIcon'

export enum IconPositions {
  LEFT = 'left',
  RIGHT = 'right',
}

interface OnClickProps {
  gtmData?: unknown
}

export interface AtLinkProps {
  label?: string
  extraClass?: string
  className?: string
  dataTest?: string
  gtmData?: unknown
  children?: ReactNode
  iconProps?: AtIconProps
  iconHoverProps?: AtIconProps
  iconPosition?: IconPositions
  target?: Target
  actionUrl?: string
  onClick?: (e?: React.MouseEvent, props?: OnClickProps) => void
  color?: themeColor
  colorHover?: themeColor
}

export const AtLink = ({
  children,
  iconProps,
  iconHoverProps,
  iconPosition = IconPositions.RIGHT,
  target,
  actionUrl,
  color = 'neutral-dark',
  colorHover = 'secondary',
  onClick,
  className,
  gtmData,
  label,
  ...props
}: AtLinkProps) => {
  const [hover, setHover] = useState(false)

  const iconIsPresent = iconProps || iconHoverProps
  const iconExtraClass =
    iconPosition === IconPositions.LEFT
      ? `order-first self-center ${label ? 'mr-1' : ''}`
      : `${label ? 'self-center ml-1' : ''}`

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      onClick(e, { gtmData })
    }
  }

  const handleMouseEnter = () => {
    setHover(true)
  }

  const handleMouseLeave = () => {
    setHover(false)
  }

  return (
    <a
      href={actionUrl}
      data-test={props.dataTest}
      onClick={handleClick}
      target={target}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${iconIsPresent ? 'flex' : ''} ${
        className ??
        `${iconIsPresent ? '' : 'inline-block'} text-${color} hover:text-${colorHover} text-base ${
          props.extraClass ?? ''
        }`
      }`}
    >
      {children ?? (
        <>
          <span className="flex items-center">{label}</span>

          {(iconProps || iconHoverProps) && (
            <span className={`${iconExtraClass}`}>
              {iconProps && (!iconHoverProps || !hover) && <AtIcon {...iconProps} />}
              {iconHoverProps && (!iconProps || hover) && <AtIcon {...iconHoverProps} />}
            </span>
          )}
        </>
      )}
    </a>
  )
}
