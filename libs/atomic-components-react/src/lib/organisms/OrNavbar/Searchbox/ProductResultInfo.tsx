import React from 'react'
import { AtImage, AtLink } from '../../..'

export interface ProductResultInfoProps {
  id: string
  name: string
  description: string
  shortDescription?: string
  price: number
  imageSrc: string
  imageAlt: string
}

export const ProductResultInfo = ({
  id,
  name,
  description,
  shortDescription,
  price,
  imageSrc,
  imageAlt,
}: ProductResultInfoProps) => {
  const productUrl = `/product/${id}`

  return (
    <div className="flex h-24 w-60">
      <AtLink className="w-24 h-24" actionUrl={productUrl}>
        <AtImage className=" h-full object-cover" src={imageSrc} alt={imageAlt} />
      </AtLink>
      <div className="flex flex-col justify-between ml-3 py-2">
        <div>
          <AtLink
            actionUrl={productUrl}
            label={name}
            className="text-base sm:text-lg font-bold text-neutral-dark hover:underline leading-5 truncate"
          />
          <p className="leading-4 text-xs text-neutral-dark mt-0.5">
            {shortDescription ?? description.split(' ').slice(0, 4).join(' ')}
          </p>
        </div>
        <span className="text-sm font-bold text-neutral-dark">${price}</span>
      </div>
    </div>
  )
}
