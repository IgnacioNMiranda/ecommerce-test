import React from 'react'
import { AtImage } from '../../atoms'

export interface MlProductCartInfoProps {
  title: string
  subtitle: string
  size?: number
  color?: string
  quantity: number
  imageSrc: string
  imageAlt: string
  className?: string
}

export const MlProductCartInfo = ({
  title,
  subtitle,
  size,
  color,
  quantity,
  imageSrc,
  imageAlt,
  className,
}: MlProductCartInfoProps) => {
  return (
    <div className={`flex ${className ?? ''}`}>
      <AtImage
        style={{ maxWidth: 144 }}
        className="w-24 sm:w-auto h-24 sm:h-36 object-cover"
        src={imageSrc}
        alt={imageAlt}
      />
      <div className="flex flex-col justify-between ml-4 sm:ml-6">
        <div>
          <p className="text-base sm:text-lg font-bold text-neutral-dark">{title}</p>
          <p className="text-sm sm:text-base text-neutral-dark sm:mb-4">{subtitle}</p>
        </div>
        <div>
          <p className="text-xs font-medium text-neutral-dark">{size ? `Size: ${size}` : ' '}</p>
          <p className="text-xs font-medium text-neutral-dark">{color ? `Color: ${color}` : ' '}</p>
        </div>
        <div>
          <p className="text-xs sm:text-base font-bold text-neutral-dark sm:mt-4">{`${quantity} ${
            quantity > 1 ? 'products' : 'product'
          }`}</p>
        </div>
      </div>
    </div>
  )
}
