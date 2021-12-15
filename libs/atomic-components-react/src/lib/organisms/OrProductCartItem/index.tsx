import React from 'react'
import { AtIcon, MlProductCartInfo, MlProductCartInfoProps, MlProductQuantity, Product } from '../..'

export interface OrProductCartItemProps {
  product: Product
  quantity: number
  onIncrement: () => Promise<void>
  onDecrement: () => Promise<void>
  onDelete: () => Promise<void>
}

export const OrProductCartItem = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
  onDelete,
}: OrProductCartItemProps) => {
  const productInfo = {
    title: product.name,
    subtitle: product.description.split(' ').slice(0, 3).join(' '),
    // TODO: size variant
    // TODO: color variant
    quantity,
    imageSrc: product.imageUrl,
    imageAlt: product.imageAlt,
  } as MlProductCartInfoProps

  return (
    <div className="relative max-w-xs sm:max-w-full flex flex-col sm:flex-row justify-start sm:justify-between">
      <MlProductCartInfo {...productInfo} />

      <div className="absolute sm:static flex justify-center items-center mt-2 sm:mt-0 sm:mr-0 left-28 -bottom-9">
        <MlProductQuantity
          minQuantity={1}
          quantity={quantity}
          maxQuantity={product.stock}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />

        <button type="button" className="cursor-pointer ml-3 sm:ml-7 focus:outline-none" onClick={onDelete}>
          <AtIcon type="trash" />
        </button>
      </div>
    </div>
  )
}
