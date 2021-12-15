import React from 'react'
import { AtIcon, themeColor } from '../..'

export interface NavigationArrowProps {
  color: themeColor
  size: number
  type: 'swiper-button-prev' | 'swiper-button-next'
  iconType: 'angle-left' | 'angle-right'
  disabled: boolean
  onClick: () => void
}

export const NavigationArrow = ({ color, size, type, iconType, disabled, onClick }: NavigationArrowProps) => {
  return (
    <div className={`hidden xl:block ${type}`}>
      <button
        type="button"
        aria-disabled={disabled}
        onClick={onClick}
        className={`focus:outline-none ${disabled ? 'cursor-default' : 'cursor-pointer'}`}
      >
        <AtIcon type={iconType} color={color} size={size} />
      </button>
    </div>
  )
}
