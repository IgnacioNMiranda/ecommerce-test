import React, { useEffect, useState } from 'react'
import { AtButton, AtButtonProps } from '../../atoms'
import { MlRichText, MlRichTextProps } from '../MlRichText'

export interface MlContentStripProps {
  images: string[]
  imagePosition?: 'left' | 'right'
  textColumns: 1 | 2
  paragraphs: MlRichTextProps[]
  button: AtButtonProps
  interval?: number
  className?: string
}

export const MlContentStrip = ({
  images,
  imagePosition,
  textColumns,
  paragraphs,
  button,
  interval,
  className,
}: MlContentStripProps) => {
  const containerClass = `justify-center grid ${paragraphs.length === 1 ? 'md:grid-cols-10' : 'lg:grid-cols-10'} ${
    className ?? ''
  }`

  const sliderWrapperClass = `relative h-52 md:h-full ${
    paragraphs.length > 1 ? 'hidden md:block md:col-span-5' : 'col-span-4'
  } ${imagePosition === 'left' ? '' : 'md:order-2'}`

  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const sliderInterval = setInterval(handleChangeSlide, interval ?? 5000)

    return () => {
      clearInterval(sliderInterval)
    }
  })

  const handleChangeSlide = (index?: number) => {
    if (images.length === 1) {
      return
    }

    if (typeof index === 'number') {
      setActiveSlide(index)
      return
    }

    setActiveSlide((prevSlide) => {
      if (prevSlide === images.length - 1) {
        return 0
      }

      return prevSlide + 1
    })
  }

  const renderSlides = (image: string, index: number) => {
    if (index !== activeSlide) {
      return null
    }

    return (
      <div
        key={index}
        className="bg-cover bg-no-repeat bg-center h-full"
        style={{ backgroundImage: `url(${image})` }}
      />
    )
  }

  return (
    <div className={containerClass}>
      {images.length === 1 ? (
        <div
          className={`bg-cover bg-no-repeat bg-left h-52 md:h-full ${
            paragraphs.length > 1 ? 'hidden md:block md:col-span-5' : 'md:col-span-4'
          } ${imagePosition === 'left' ? '' : 'md:order-2'}`}
          style={{ backgroundImage: `url(${images[0]})` }}
        />
      ) : (
        <div className={sliderWrapperClass}>
          {images.map((image, index) => renderSlides(image, index))}

          <div className="absolute bottom-5 flex w-full justify-center gap-3">
            {images.map((_image, index) => (
              <div
                key={index}
                className={`border border-secondary rounded-full h-3 w-3 cursor-pointer ${
                  activeSlide === index ? 'bg-secondary' : ''
                }`}
                role="button"
                aria-hidden
                onClick={() => handleChangeSlide(index)}
              />
            ))}
          </div>
        </div>
      )}

      <div
        className={`${
          paragraphs.length > 1
            ? 'md:col-span-5 p-7 md:p-20'
            : 'md:col-span-6 pt-10 pl-7 pr-9 pb-9 md:p-10 md:pr-20 lg:p-10'
        } bg-white`}
      >
        <div
          className={`grid ${paragraphs.length > 1 && textColumns === 2 && 'md:grid-cols-2'} gap-10 ${
            paragraphs.length > 1 ? 'mb-10' : 'mb-10 md:mb-7'
          }`}
        >
          {paragraphs.map((paragraph, index) => (
            <div className="text-center md:text-left" key={index}>
              <MlRichText {...paragraph} className="text-sm text-md md:text-base lg:text-base text-neutral-dark" />
            </div>
          ))}
        </div>

        <AtButton {...button} className="w-full sm:w-auto" />
      </div>
    </div>
  )
}
