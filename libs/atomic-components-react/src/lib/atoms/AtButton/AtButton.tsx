import React, { ReactNode, useState } from 'react'
import { AtIcon } from '..'
import { typeClasses } from './classes'
import { Target, AtButtonIconPosition, AtButtonState, AtButtonTypes, AtButtonActionType } from '../../types'
import { buttonHandlers, OnClickProps } from './handlers'
import { LoadingIcon } from './LoadingIcon'

export interface AtButtonProps {
  target?: Target
  actionType?: AtButtonActionType
  actionValue?: string
  children: React.ReactNode
  dataTest?: string
  gtmData?: unknown
  icon?: ReactNode | string
  iconHover?: ReactNode | string
  iconPosition?: AtButtonIconPosition
  onClick?: <T = React.MouseEvent<HTMLButtonElement>>(e: T, onClickProps: OnClickProps) => void
  state?: AtButtonState
  type: AtButtonTypes
  className?: string
  buttonType?: 'button' | 'submit' | 'reset' | undefined
  disabled?: boolean
}

const baseClass = 'tracking-wider text-sm font-bold inline-flex items-center justify-center px-8 py-1 uppercase'

export const AtButton = ({
  target,
  actionType,
  actionValue,
  children,
  dataTest,
  gtmData,
  icon,
  iconHover,
  iconPosition,
  onClick,
  state,
  type,
  className,
  buttonType,
  disabled,
}: AtButtonProps) => {
  const [hiddenIconHover, setHiddenIconHover] = useState(true)

  const iconComponent = !!icon && typeof icon === 'string' ? <AtIcon src={icon} size={24} /> : icon
  const iconHoverComponent =
    !!iconHover && typeof iconHover === 'string' ? <AtIcon src={iconHover} size={24} /> : iconHover

  const hasIcons = !!iconComponent && !!iconHoverComponent

  const onMouseEnter = () => {
    setHiddenIconHover(false)
  }

  const onMouseLeave = () => {
    setHiddenIconHover(true)
  }

  const handleOnClick = onClick
    ? (e: React.MouseEvent<HTMLButtonElement>) => onClick(e, { gtmData, actionType, actionValue })
    : (e: React.MouseEvent<HTMLButtonElement>) =>
        buttonHandlers[actionType ?? AtButtonActionType.OPEN_URL](e, { actionValue, target })

  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={buttonType ?? 'button'}
      className={`flex ${baseClass} ${className ?? ''} ${typeClasses[type].base} ${
        state === AtButtonState.DISABLED || state === AtButtonState.LOADING
          ? 'opacity-60 cursor-default'
          : typeClasses[type].hover
      }`}
      data-test={dataTest}
      onClick={handleOnClick}
      onMouseEnter={hasIcons ? onMouseEnter : () => null}
      onMouseLeave={hasIcons ? onMouseLeave : () => null}
      disabled={disabled}
    >
      <span className="leading-7">{children}</span>

      {iconComponent && state !== AtButtonState.LOADING && (
        <span className={`${iconPosition === AtButtonIconPosition.LEFT ? 'order-first mr-0.5' : 'ml-0.5'}`}>
          {iconHoverComponent && !hiddenIconHover ? iconHoverComponent : iconComponent}
        </span>
      )}

      {state === AtButtonState.LOADING && <LoadingIcon iconPosition={iconPosition} type={type} />}
    </button>
  )
}
