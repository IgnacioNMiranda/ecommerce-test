import React, { useState } from 'react'
import { AtButton, AtDropdownElement, AtLink, AtRating, Ratings } from '../../atoms'
import { MlProductQuantity } from '../../molecules'
import { Filter, Product, AtButtonTypes } from '../../types'

export interface OrCardDetailProps {
  product: Product
  openSizeChartHandler(): void
  sendUserRating(product: Product, rating: Ratings): void
  addProductToCart(product: Product): void
}

export const OrCardDetail = ({
  product,
  openSizeChartHandler,
  sendUserRating,
  addProductToCart,
}: OrCardDetailProps) => {
  const [rating, setRating] = useState(product.starsRating)
  const adjustRatingHandler = (ratings: { selectedRating: Ratings }) => {
    setRating(ratings.selectedRating)
    sendUserRating(product, ratings.selectedRating)
  }

  const [quantity, setQuantity] = useState(1)
  const onIncrement = () => setQuantity((q) => q + 1)
  const onDecrement = () => setQuantity((q) => q - 1)

  const [variants, setVariants] = useState(product.variants)
  const [selectedVariant, setSelectedVariant] = useState<Filter>()
  const changeVariantHandler = (filter: Filter) => {
    setSelectedVariant(filter)
    setVariants(variants.map((v) => (v === filter ? { ...filter, isSelected: true } : { ...v, isSelected: false })))
  }

  const addToBagHandler = () => {
    addProductToCart({ ...product, selectedVariant, quantity })
  }
  return (
    <div>
      {/* Product title */}
      <h1 className="text-xl md:text-2xl leading-7 md:leading-10 font-bold tracking-wide text-neutral-dark mb-5 md:mb-4 lg:mb-5">
        {product.name}
      </h1>

      <div className="mb-5 md:mb-4 lg:mb-5">
        <AtRating initialRating={rating} onChange={adjustRatingHandler} />
      </div>

      {/* Prices */}
      <div className="mb-5 md:mb-4 lg:mb-5 flex items-center">
        {!!product.discountPrice && (
          <span className="mr-5 md:mr-4 text-lg md:text-xl leading-5 md:leading-7 text-accent line-through">
            ${product.price}
          </span>
        )}
        <span className="text-xl md:text-2xl leading-7 md:leading-10 md:tracking-wide font-medium text-neutral-dark">
          ${product.discountPrice ?? product.price}
        </span>
      </div>

      <div className="leading-6 text-neutral-dark mb-8 lg:mb-10">Item no. {product.sku}</div>

      {/* Size selectors */}
      <div className="mb-4">
        <div className="flex justify-between">
          <div className="text-lg font-bold leading-5 text-neutral-dark" style={{ letterSpacing: '0.011em' }}>
            Select a size
          </div>
          <AtLink
            label="Size chart"
            className="underline font-medium leading-5 text-secondary cursor-pointer"
            onClick={openSizeChartHandler}
          />
        </div>
      </div>
      <div className="mb-8 lg:mb-10">
        <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(44px, 1fr))' }}>
          {variants.map((filter, idx) => (
            <AtDropdownElement filter={filter} addFilterHandler={changeVariantHandler} key={idx} />
          ))}
        </div>
      </div>

      {/* Desktop-Tablet / Mobile versions for Quantity and Add to Cart button */}
      <div className="hidden md:block md:mb-8 lg:mb-10">
        {/* Quantity button */}
        <div className="text-neutral-dark text-lg leading-5 mb-4" style={{ letterSpacing: '0.011em' }}>
          Quantity
        </div>
        <div className="flex justify-between">
          <MlProductQuantity
            minQuantity={1}
            quantity={quantity}
            maxQuantity={product.stock}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
          <AtButton type={AtButtonTypes.SECONDARY} onClick={addToBagHandler}>
            Add to bag
          </AtButton>
        </div>
      </div>
      <div className="md:hidden">
        <div className="flex justify-between items-center mb-4">
          <div className="text-neutral-dark text-lg leading-5" style={{ letterSpacing: '0.011em' }}>
            Quantity
          </div>
          <MlProductQuantity
            minQuantity={1}
            quantity={quantity}
            maxQuantity={product.stock}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        </div>
        <div className="flex justify-center">
          <AtButton type={AtButtonTypes.SECONDARY} onClick={addToBagHandler} className="w-44 h-10">
            Add to bag
          </AtButton>
        </div>
      </div>
    </div>
  )
}
