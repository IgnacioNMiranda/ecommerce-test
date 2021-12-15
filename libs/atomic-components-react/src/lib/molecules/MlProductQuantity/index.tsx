import React from 'react'
import { AtIcon } from '../..'

export interface MlProductQuantityProps {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
  minQuantity?: number
  maxQuantity?: number
}

export const MlProductQuantity = ({
  quantity,
  onIncrement,
  onDecrement,
  minQuantity = 1,
  maxQuantity,
}: MlProductQuantityProps) => {
  const isMinQuantity = quantity === minQuantity
  const isMaxQuantity = quantity === maxQuantity

  return (
    <div className="bg-white w-20 sm:w-36 h-7 sm:h-10 text-neutral-dark flex text-lg sm:text-xl gap-1 sm:gap-3 justify-center items-center border border-neutral-dark">
      <button
        type="button"
        className="flex justify-center items-center focus:outline-none"
        aria-disabled={isMinQuantity}
        disabled={isMinQuantity}
        onClick={onDecrement}
      >
        <AtIcon
          type="minus"
          color={isMinQuantity ? 'neutral' : 'neutral-dark'}
          className="transform scale-75 sm:scale-100"
        />
      </button>
      <span
        className={`flex justify-center items-center w-7 h-7 ${isMinQuantity || isMaxQuantity ? 'text-neutral' : ''}`}
      >
        {quantity}
      </span>
      <button
        type="button"
        className="flex justify-center items-center focus:outline-none"
        aria-disabled={isMaxQuantity}
        disabled={isMaxQuantity}
        onClick={onIncrement}
      >
        <AtIcon
          type="plus"
          color={isMaxQuantity ? 'neutral' : 'neutral-dark'}
          className="transform scale-75 sm:scale-100"
        />
      </button>
    </div>
  )
}
