import type { sliderColumnMobile, sliderColumnTablet, sliderColumnDesktop, sliderGap } from '@lib/react/types'
import { ContentfulCard, ContentfulCardCategory } from '.'
import { ContentfulProductRef } from './ProductRef'

export interface ContentfulSlider {
  title?: string
  columns: sliderColumnDesktop
  columnsTablet: sliderColumnTablet
  columnsMobile: sliderColumnMobile
  gap: sliderGap
  items: Array<ContentfulProductRef | ContentfulCardCategory | ContentfulCard>
}
