import React from 'react'
import { BffProduct } from '@lib/ecommerce-bff-types'
import { TmProductDetail } from './TmProductDetail'

export interface TmProductDetailPageProps {
  product: BffProduct
  breadcrumbFirstElement: string
}

export const TmProductDetailPage = ({ product, breadcrumbFirstElement }: TmProductDetailPageProps) => {
  // TODO: missing rating, favorites, size chart, add to cart functionality
  const toImplement = () => false

  let composedHierarchyLink = '/catalog'
  const breadcrumb = {
    links: [
      { label: breadcrumbFirstElement, disabled: true },
      ...product.hierarchies[0].map((hierarchy) => {
        composedHierarchyLink = `${composedHierarchyLink}/${hierarchy.name}`
        return {
          label: hierarchy.name,
          actionUrl: composedHierarchyLink,
        }
      }),
    ],
  }

  const formattedProduct = {
    imageUrl: product.images[0].src,
    imageAlt: product.images[0].alt,
    pageUrl: `/product/${product.id}/${product.slug}`,
    ...product,
  }

  return (
    <TmProductDetail
      mlBreadcrumbProps={breadcrumb}
      addProductToCart={toImplement}
      openSizeChartHandler={toImplement}
      sendUserRating={toImplement}
      toggleFavoriteHandler={toImplement}
      product={formattedProduct}
    />
  )
}
