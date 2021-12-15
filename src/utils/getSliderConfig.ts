import {
  sliderColumnDesktop,
  sliderColumnTablet,
  sliderColumnMobile,
  sliderColumns,
  sliderGap,
  sliderGaps,
} from '@lib/react/types'
import { SwiperOptions } from 'swiper'
import { Breakpoints } from '@lib/react'

export const getSliderConfig = (
  columns: sliderColumnDesktop,
  columnsTablet: sliderColumnTablet,
  columnsMobile: sliderColumnMobile,
  gap: sliderGap,
) => {
  const defaultConfig: SwiperOptions = {
    noSwiping: false,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: sliderGaps[gap],
  }

  const mobileSlides = sliderColumns[columnsMobile]
  const mobileConfig: SwiperOptions = {
    ...defaultConfig,
    slidesPerView: mobileSlides,
    slidesPerGroup: mobileSlides,
  }

  const tabletSlides = sliderColumns[columnsTablet]
  const tabletConfig: SwiperOptions = {
    ...defaultConfig,
    slidesPerView: tabletSlides,
    slidesPerGroup: tabletSlides,
  }

  const desktopSlides = sliderColumns[columns]
  const desktopConfig: SwiperOptions = {
    ...defaultConfig,
    noSwiping: true,
    slidesPerView: desktopSlides,
    slidesPerGroup: desktopSlides,
  }

  return {
    defaultConfig,
    breakpoints: {
      [Breakpoints.SMALL]: mobileConfig,
      [Breakpoints.MEDIUM]: tabletConfig,
      [Breakpoints.LARGE]: desktopConfig,
    },
  }
}
