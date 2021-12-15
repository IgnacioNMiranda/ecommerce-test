import { ContentfulBaseInput } from './BaseInput'
import { ContentfulCard } from './Card'
import { ContentfulContentStrip } from './ContentStrip'
import { ContentfulForm } from './Form'
import { ContentfulMediaVertical } from './MediaVertical'
import { ContentfulRichText } from './RichText'
import { ContentfulBannerLarge } from './BannerLarge'
import { ContentfulHeroBanner } from './HeroBanner'
import { ContentfulDiscountBar } from './DiscountBar'
import { ContentfulSlider } from './Slider'
import { ContentfulCardCategory } from './CardCategory'
import { ContentfulFooterNewsletter } from './FooterNewsletter'
import { ContentfulContainer } from './Container'
import { ContentfulProductRef } from './ProductRef'

export enum ContentfulBlockTypes {
  MlBannerLarge = 'mlBannerLarge',
  MlCardCategory = 'mlCardCategory',
  AtBaseInput = 'atBaseInput',
  MlCard = 'mlCard',
  OrContainer = 'orContainer',
  MlContentStrip = 'mlContentStrip',
  MlDiscountBar = 'mlDiscountBar',
  OrFooterNewsletter = 'orFooterNewsletter',
  OrForm = 'orForm',
  OrHeroBanner = 'orHeroBanner',
  MlMediaVertical = 'mlMediaVertical',
  ProductRef = 'elasticPathProductRef',
  OrSlider = 'orSlider',
  MlRichText = 'mlRichText',
}

export type ContentfulBlock = (
  | ContentfulBannerLarge
  | ContentfulCardCategory
  | ContentfulBaseInput
  | ContentfulCard
  | ContentfulContainer
  | ContentfulContentStrip
  | ContentfulDiscountBar
  | ContentfulFooterNewsletter
  | ContentfulForm
  | ContentfulHeroBanner
  | ContentfulMediaVertical
  | ContentfulProductRef
  | ContentfulSlider
  | ContentfulRichText
) & {
  type: ContentfulBlockTypes
  className?: string
}
