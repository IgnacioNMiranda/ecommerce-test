import { BffCatalog, BffHierarchyNode, BffProductImage, BffProductVariant } from '.'

export interface BffProduct {
  id: string
  slug: string
  name: string
  sku: string
  price: number
  stock: number
  catalog: BffCatalog
  images: BffProductImage[]
  starsRating: 1 | 2 | 3 | 4 | 5
  discountPercentage?: number
  discountPrice?: number
  variants: BffProductVariant[]
  hierarchies: BffHierarchyNode[][]
  hierarchyIds: string[]
  description: string
  material: string
}
