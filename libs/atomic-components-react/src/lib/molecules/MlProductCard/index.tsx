import React from 'react'
import { AtLink, AtLinkProps } from '../../index'

export interface MlProductCardProps {
  productName: string
  link: AtLinkProps
  imageUrl: string
  imageAlt: string
  price: number
  discountPrice?: number
  discountPercentage?: number
  className?: string
}

export const MlProductCard = ({
  productName,
  link,
  imageUrl,
  imageAlt,
  price,
  discountPrice = 0,
  discountPercentage = 0,
  className,
}: MlProductCardProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="h-36 sm:h-56 relative bg-neutral-light">
        <AtLink className="w-full" {...link}>
          <img className="object-cover w-full h-36 sm:h-56" src={imageUrl} alt={imageAlt} />
        </AtLink>
        {discountPercentage && discountPrice ? (
          <div className="bg-tertiary absolute top-2 left-2 sm:top-3 sm:left-3" style={{ borderRadius: 4 }}>
            <p
              className="text-xs sm:text-sm capitalize py-1 px-2 sm:p-2 text-neutral-dark leading-3 sm:leading-4"
              style={{ letterSpacing: 0.5 }}
            >
              {discountPercentage}% OFF
            </p>
          </div>
        ) : null}
      </div>
      <h4 className="text-sm sm:text-xl font-bold text-center text-neutral-dark py-1 sm:py-2">{productName}</h4>
      <div className="flex justify-center items-center text-sm sm:text-lg leading-4 sm:leading-5">
        {discountPercentage && discountPrice ? (
          <>
            <span className="line-through" style={{ letterSpacing: 0.2 }}>
              ${price}
            </span>
            <div className="mx-1 sm:mx-2" />
            <span className="text-accent" style={{ letterSpacing: 0.2 }}>
              ${discountPrice}
            </span>
          </>
        ) : (
          <span style={{ letterSpacing: 0.2 }}>${price}</span>
        )}
      </div>
    </div>
  )
}
