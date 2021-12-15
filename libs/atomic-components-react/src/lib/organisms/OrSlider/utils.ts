import SwiperCore from 'swiper'
import { NavigationArrowProps } from './NavigationArrow'

export const onInit = (swiper: SwiperCore) => {
  if (swiper?.params?.pagination && typeof swiper.params.pagination === 'object') {
    const { pagination } = swiper.params
    pagination.el = '.swiper-pagination'
    pagination.clickable = true
    pagination.renderBullet = () => `<span class="swiper-pagination-bullet" role="button"></span>`
    swiper.pagination.init()
    swiper.pagination.update()
  }
}

const NAVIGATION_ARROW_SIZE = 50
export const getNavigationArrowConfig = (disabled: boolean, type: 'prev' | 'next', onClick: () => void) => {
  const isPrevButton = type === 'prev'

  return {
    color: disabled ? 'secondary-light' : 'secondary-dark',
    size: NAVIGATION_ARROW_SIZE,
    type: isPrevButton ? 'swiper-button-prev' : 'swiper-button-next',
    iconType: isPrevButton ? 'angle-left' : 'angle-right',
    disabled,
    onClick,
  } as NavigationArrowProps
}
