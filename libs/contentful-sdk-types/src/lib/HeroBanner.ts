import { BannerSlide } from './BannerLarge'

export interface ContentfulHeroBanner {
  slides: BannerSlide[]
  interval?: number
  hideIndicators?: boolean
}
