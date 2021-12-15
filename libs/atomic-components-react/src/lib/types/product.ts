import { Ratings } from '../atoms'
import { Filter } from './filter'

export type Product = {
  name: string
  sku: string
  slug?: string
  price: number
  stock: number
  imageUrl: string
  imageAlt: string
  starsRating: Ratings
  pageUrl: string
  quantity?: number
  discountPercentage?: number
  discountPrice?: number
  selectedVariant?: Filter
  variants: Filter[]
  description: string
  material?: string
}
