import {
  MlBreadcrumb,
  MlBreadcrumbProps,
  MlTextDropdown,
  OrCardDetail,
  OrProductDetailImage,
  Product,
  Ratings,
} from '@lib/react'
import React, { useState } from 'react'

export interface TmProductDetailProps {
  mlBreadcrumbProps: MlBreadcrumbProps
  product: Product
  toggleFavoriteHandler(product: Product, isFavorite: boolean): void
  addProductToCart(product: Product): void
  openSizeChartHandler(): void
  sendUserRating(product: Product, rating: Ratings): void
}

export const TmProductDetail = ({
  mlBreadcrumbProps,
  product,
  toggleFavoriteHandler,
  addProductToCart,
  openSizeChartHandler,
  sendUserRating,
}: TmProductDetailProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const onFavoriteSet = () => {
    toggleFavoriteHandler(product, !isFavorite)
    setIsFavorite(!isFavorite)
  }

  return (
    <div className="bg-tertiary-light">
      <div className="mt-8 mb-44 md:mt-20 md:mb-28 lg:mx-auto xl:pl-10 xl:max-w-7xl">
        <div className="mb-7 ml-4 md:block md:ml-14 xl:ml-0">
          <MlBreadcrumb {...mlBreadcrumbProps} />
        </div>
        <div className="flex flex-col md:flex-row gap-9 md:gap-6 xl:gap-7">
          <div className="md:w-1/2 xl:w-7/12 max-w-max">
            <OrProductDetailImage product={product} isFavorite={isFavorite} onFavoriteClick={onFavoriteSet} />
          </div>
          <div className="px-4 md:px-0 md:pr-7 xl:pr-0 md:w-1/2 xl:w-5/12">
            <div className="mb-8 md:w-11/12">
              <OrCardDetail
                product={product}
                addProductToCart={addProductToCart}
                openSizeChartHandler={openSizeChartHandler}
                sendUserRating={sendUserRating}
              />
            </div>
            {product.description && <MlTextDropdown title="Description" content={product.description} />}
            {product.material && <MlTextDropdown title="Material" content={product.material} />}
          </div>
        </div>
      </div>
    </div>
  )
}
