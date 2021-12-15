import { ContentfulButton } from './Button'
import { ContentfulFile } from './File'

export interface BannerSlide {
  title: string
  subtitle: string
  image: ContentfulFile
  leftButton?: ContentfulButton
  rightButton?: ContentfulButton
}

export interface ContentfulBannerLarge extends BannerSlide {
  isHidden?: boolean
  minHeight?: number
}
