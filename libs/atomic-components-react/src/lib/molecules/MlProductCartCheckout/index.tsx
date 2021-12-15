import React from 'react'
import { AtButton, AtButtonProps, AtLink, AtLinkProps, AtSeparator } from '../../atoms'

export interface MlProductCartCheckoutProps {
  paragraph: string
  totalPrice: string
  button: AtButtonProps
  link: AtLinkProps
}

export const MlProductCartCheckout = ({ paragraph, button, totalPrice, link }: MlProductCartCheckoutProps) => {
  return (
    <div>
      <AtSeparator />
      <div className="flex justify-between mt-6">
        <p className="text-lg sm:text-xl font-bold text-neutral-dark">{paragraph}</p>
        <span className="text-lg sm:text-xl font-bold text-neutral-dark">{totalPrice}</span>
      </div>
      <div className="text-center sm:justify-center">
        <AtButton className="text-primary bg-secondary hover:bg-secondary-dark w-44 h-9 mt-6" {...button} />
      </div>

      <AtLink className="flex justify-center text-base font-medium underline text-neutral-dark mt-6" {...link} />
    </div>
  )
}
