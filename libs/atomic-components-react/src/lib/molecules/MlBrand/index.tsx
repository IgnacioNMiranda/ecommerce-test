import React from 'react'

export interface MlBrandProps {
  images: string[]
}

export const MlBrand = ({ images }: MlBrandProps) => {
  return (
    <div className="max-w-2xl mx-auto flex flex-wrap">
      {images.map((image, index) => (
        <div key={index} className="w-1/2 lg:w-1/4 flex items-center justify-center px-4">
          <img src={image} alt="" className="max-h-26" />
        </div>
      ))}
    </div>
  )
}
