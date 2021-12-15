import React from 'react'
import { ContentfulProductRef, ContentfulCardCategory, ContentfulCard } from '@lib/contentful-sdk-types'
import { MlProductCard, MlCardCategory, MlCard, MlCardProps, MlProductCardProps } from '@lib/react'
import { normalizeButton, normalizeFile } from '.'

export const normalizeSliderItems = (items: Array<ContentfulProductRef | ContentfulCardCategory | ContentfulCard>) => {
  return items.map((item: ContentfulProductRef | ContentfulCardCategory | ContentfulCard) => {
    if ('productName' in item && 'price' in item && 'link' in item) {
      return <MlProductCard {...(item as MlProductCardProps)} />
    }
    if ('title' in item && 'actionUrl' in item && 'button' in item) {
      return <MlCardCategory {...item} imageUrl={normalizeFile(item.image)} button={normalizeButton(item.button)} />
    }
    if ('title' in item && 'paragraph' in item) {
      const { image, ...props } = item as ContentfulCard
      return <MlCard imageSrc={normalizeFile(image)} {...(props as MlCardProps)} />
    }
    return null
  })
}
