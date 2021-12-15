import React from 'react'
import { MlProductCardProps, MlCardCategoryProps, MlCardProps, MlProductCard, MlCardCategory, MlCard } from '../..'

export type SliderItem = MlProductCardProps & MlCardCategoryProps & MlCardProps

export const SwiperItem = (item: SliderItem) => {
  if ('productName' in item && 'price' in item && 'linkProps' in item) return <MlProductCard {...item} />
  if ('title' in item && 'actionUrl' in item && 'button' in item) return <MlCardCategory {...item} />
  if ('title' in item && 'paragraph' in item) return <MlCard {...item} />
  return null
}
