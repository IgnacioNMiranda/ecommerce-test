import React from 'react'
import { AtIcon } from '..'
import { typeClasses } from './classes'
import { AtButtonIconPosition, AtButtonTypes } from '../../types'

interface LoadingIconProps {
  iconPosition?: AtButtonIconPosition
  type: AtButtonTypes
}

export const LoadingIcon = ({ iconPosition, type }: LoadingIconProps) => {
  return (
    <div className={`animate-spin ${iconPosition === AtButtonIconPosition.LEFT ? 'order-first mr-0.5' : 'ml-0.5'}`}>
      <AtIcon type="loading" color={typeClasses[type].color ?? 'secondary'} />
    </div>
  )
}
