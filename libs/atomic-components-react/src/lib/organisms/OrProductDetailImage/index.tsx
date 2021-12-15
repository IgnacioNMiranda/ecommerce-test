import React from 'react'
import { AtIcon, AtImage } from '../../atoms'
import { Product } from '../../types'

export interface OrProductDetailImageProps {
  product: Product
  isFavorite: boolean
  onFavoriteClick(): void
}

export const OrProductDetailImage = ({ product, isFavorite, onFavoriteClick }: OrProductDetailImageProps) => {
  return (
    <div className="relative max-w-max">
      {!!product.discountPercentage && (
        <div className="absolute left-3 top-5">
          <div
            className="rounded bg-tertiary flex justify-center items-center w-14 h-6 leading-3"
            style={{ fontSize: '0.625rem' }}
          >
            <div>{product.discountPercentage}% OFF</div>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={onFavoriteClick}
        className="absolute right-4 top-5 cursor-pointer focus:outline-none"
      >
        <AtIcon type={isFavorite ? 'solid-heart' : 'heart'} size={24} color="tertiary-dark" />
      </button>
      <AtImage src={product.imageUrl} alt={product.imageAlt} />
    </div>
  )
}
