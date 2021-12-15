import React, { ReactNode, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Controller, SwiperOptions } from 'swiper'
import { Breakpoints } from '.'
import { NavigationArrow } from './NavigationArrow'
import { getNavigationArrowConfig, onInit } from './utils'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

export interface OrSliderProps {
  title?: string
  items: ReactNode[]
  breakpoints: Record<number, SwiperOptions>
  defaultConfig: SwiperOptions
  className?: string
}

const MIN_ITEMS_QUANTITY = 3

SwiperCore.use([Navigation, Pagination, Controller])
export const OrSlider = ({ title, items, breakpoints, defaultConfig, className }: OrSliderProps) => {
  const [controlledSwiper, setControlledSwiper] = useState<SwiperCore>()
  const [isAtTheBeginning, setIsAtTheBeginning] = useState(true)
  const [isAtTheEnd, setIsAtTheEnd] = useState(false)

  const showArrows = items.length > (breakpoints[Breakpoints.LARGE].slidesPerView ?? MIN_ITEMS_QUANTITY)

  const prevArrow = getNavigationArrowConfig(isAtTheBeginning, 'prev', () => controlledSwiper?.slidePrev())
  const nextArrow = getNavigationArrowConfig(isAtTheEnd, 'next', () => controlledSwiper?.slideNext())

  const onTransitionEnd = ({ isBeginning, isEnd }: SwiperCore) => {
    setIsAtTheBeginning(isBeginning)
    setIsAtTheEnd(isEnd)
  }

  return (
    <section className={`py-8 ${className ?? ''}`}>
      <div className="container justify-center relative">
        {title && (
          <h2 className="text-neutral-dark font-medium leading-10 text-xl sm:text-2xl text-center pb-8">{title}</h2>
        )}
        <div className="flex">
          {showArrows && <NavigationArrow {...prevArrow} />}
          <Swiper
            onSwiper={setControlledSwiper}
            onInit={onInit}
            onTransitionEnd={onTransitionEnd}
            resistanceRatio={0}
            className="swiper-no-swiping flex-1"
            {...defaultConfig}
            breakpoints={breakpoints}
            observeParents
            observer
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>{item}</SwiperSlide>
            ))}
            <div className="swiper-pagination" />
          </Swiper>
          {showArrows && <NavigationArrow {...nextArrow} />}
        </div>
      </div>
    </section>
  )
}
