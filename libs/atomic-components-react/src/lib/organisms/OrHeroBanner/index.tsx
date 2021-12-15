import React, { useEffect, useState } from 'react'
import { BannerSlide, MlBannerLarge } from '../../molecules/MlBannerLarge'

export interface OrHeroBannerProps {
  slides?: BannerSlide[]
  interval?: number
  hideIndicators?: boolean
  className?: string
}

export const OrHeroBanner = ({ slides, interval, hideIndicators, className }: OrHeroBannerProps) => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const sliderInterval = setInterval(handleChangeSlide, interval ?? 5000)

    return () => {
      clearInterval(sliderInterval)
    }
  })

  const handleChangeSlide = (index?: number) => {
    if (!slides) {
      return
    }

    if (typeof index === 'number') {
      setActiveSlide(index)
      return
    }

    setActiveSlide((prevSlide) => {
      if (prevSlide === slides.length - 1) {
        return 0
      }

      return prevSlide + 1
    })
  }

  return (
    <div className={`relative ${className}`}>
      {slides?.map((slide, index) => (
        <MlBannerLarge key={index} slide={slide} isHidden={activeSlide !== index} minHeight={500} />
      ))}

      {!hideIndicators && (
        <div className="absolute bottom-5 flex w-full justify-center gap-3">
          {slides?.map((_slide, index) => (
            <div
              key={index}
              className={`border border-primary rounded-full h-3 w-3 cursor-pointer ${
                activeSlide === index ? 'bg-primary' : ''
              }`}
              role="button"
              aria-hidden
              onClick={() => handleChangeSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
