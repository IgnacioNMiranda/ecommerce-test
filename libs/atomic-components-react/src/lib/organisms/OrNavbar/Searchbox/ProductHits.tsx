import React, { PropsWithChildren } from 'react'
import { connectHits, StateResultsProvided } from 'react-instantsearch-core'
import { connectStateResults } from 'react-instantsearch-dom'
import { BffProduct } from '@lib/ecommerce-bff-types'
import { ProductResultInfo, ProductResultInfoProps } from './ProductResultInfo'
import { AtLink } from '../../..'
import { getSearchUrl } from './utils'

const mapProductHits = (hit: BffProduct, index: number) => {
  const { id, name, description, price, images } = hit
  const { src: imageSrc, alt: imageAlt } = images[0]
  const productProps: ProductResultInfoProps = {
    id,
    name,
    description,
    price,
    imageSrc,
    imageAlt,
  }

  return <ProductResultInfo key={`${index}-${hit.slug ?? hit.sku}`} {...productProps} />
}

const Results = connectStateResults(
  ({ searchState, searchResults, children }: PropsWithChildren<StateResultsProvided>) => {
    const hasQuery = searchState && searchState.query
    const hasResults = searchResults && searchResults.nbHits !== 0

    if (!hasQuery) return null

    return (
      <div
        className={`absolute ${
          hasResults ? 'right-0 sm:right-auto' : ''
        }  bg-white p-7 pr-2 xl:pr-7 mt-1 z-10 shadow-md max-w-xl`}
      >
        {hasResults ? (
          <>
            {children}
            <AtLink actionUrl={getSearchUrl(searchState.query)} className="flex mt-4">
              <span className="text-secondary font-bold text-sm underline">
                See all results &#40;{searchResults.nbHits}&#41;
              </span>
            </AtLink>
          </>
        ) : (
          <p className="whitespace-normal text-sm font-bold underline text-secondary truncate w-48 md:w-80 lg:w-48 xl:w-64 2xl:w-80">
            No results have been found for &ldquo;{searchState.query}&rdquo;
          </p>
        )}
      </div>
    )
  },
)

const Hits = ({ hits }: { hits: BffProduct[] }) => {
  return (
    <Results>
      <div className="flex flex-wrap gap-x-5 gap-y-3 2xl:gap-y-4">
        {hits.map(mapProductHits)}
        {hits.length === 1 && <div className="w-60" />}
        <div className="w-60" />
      </div>
    </Results>
  )
}

export const ProductHits = connectHits(Hits)
