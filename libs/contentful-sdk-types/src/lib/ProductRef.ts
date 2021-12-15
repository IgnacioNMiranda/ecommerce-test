import { ContentfulLink } from './Link'

export interface ContentfulProductRef {
  productName: string
  link: ContentfulLink
  imageUrl: string
  imageAlt: string
  price: number
  discountPrice?: number
  discountPercentage?: number
}
