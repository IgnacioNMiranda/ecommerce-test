import React from 'react'
import { connectHits } from 'react-instantsearch-core'
import { BffProduct } from '@lib/ecommerce-bff-types'
import { MlProductCardProps, OrProductCardGrid } from '@lib/react'

const mapProductToCard = (product: BffProduct): MlProductCardProps => ({
  productName: product.name,
  imageUrl: product.images[0].src,
  imageAlt: product.images[0].alt,
  price: product.price,
  discountPercentage: product.discountPercentage,
  discountPrice: product.discountPrice,
  link: {
    actionUrl: `/product/${product.id}/${product.slug}`,
  },
})

const ProductGrid = ({ hits }: { hits: Array<unknown> }) => {
  const products = hits.map(mapProductToCard)

  return <OrProductCardGrid cards={products} />
}

export const ProductGridAlgolia = connectHits(ProductGrid)
