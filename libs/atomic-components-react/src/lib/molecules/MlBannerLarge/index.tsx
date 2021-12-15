import React from 'react'
import { AtButton, AtButtonProps } from '../../atoms'

export type BannerSlide = {
  title: string
  subtitle: string
  image: string
  leftButton?: AtButtonProps
  rightButton?: AtButtonProps
}

export interface MlBannerLargeProps {
  slide: BannerSlide
  isHidden?: boolean
  minHeight?: number
  className?: string
}

export const MlBannerLarge = ({ slide, isHidden, minHeight, className }: MlBannerLargeProps) => {
  return (
    <div
      className={`bg-cover bg-no-repeat bg-center ${isHidden ? 'hidden' : ''} ${className}`}
      style={{ backgroundImage: `url(${slide.image})` }}
    >
      <div
        className="p-9 sm:p-16 mx-auto text-center lg:text-left text-white relative"
        style={{ minHeight: minHeight ?? 320 }}
      >
        <div className="h-full pt-24 md:pt-28 w-100 px-8 md:px-5 mx-auto md:mx-0">
          <div className="my-auto">
            <h2 className="text-2xl sm:text-3xl leading-tight">{slide.title}</h2>
            <p className="text-xl leading-tight">{slide.subtitle}</p>

            {(slide.leftButton || slide.rightButton) && (
              <div className="flex justify-center lg:justify-start">
                <div className="flex flex-col w-52 md:w-auto md:flex-row mt-6 gap-5 justify-center md:justify-start">
                  {slide.leftButton && <AtButton className="xl:px-16" {...slide.leftButton} />}
                  {slide.rightButton && <AtButton className="xl:px-16" {...slide.rightButton} />}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
