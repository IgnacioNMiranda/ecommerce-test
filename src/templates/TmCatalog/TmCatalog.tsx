import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
  AtLink,
  MlBreadcrumb,
  MlBreadcrumbProps,
  MlSelectedFilters,
  MlSelectedFiltersProps,
  OrSearchFilters,
  OrSearchFiltersProps,
} from '@lib/react'
import { InstantSearch } from 'react-instantsearch-core'
import { Configure } from 'react-instantsearch-dom'
import { algoliaClient } from '../../services/algolia'
import { index, sortOptions } from '../../services/algolia/config'
import { CatalogTitle } from './CatalogTitle'
import { ProductGridAlgolia } from './algolia-widgets/ProductGrid'
import { StatsAlgolia } from './algolia-widgets/Stats'
import { SortBy } from './algolia-widgets/SortBy'
import { filterBuilder } from '../../utils'

export interface TmCatalogProps {
  title: string
  mlBreadcrumbProps: MlBreadcrumbProps
  mlSelectedFiltersProps: MlSelectedFiltersProps
  orSearchFiltersProps: OrSearchFiltersProps
}

export const TmCatalog = ({
  title,
  mlBreadcrumbProps,
  mlSelectedFiltersProps,
  orSearchFiltersProps,
}: TmCatalogProps) => {
  const [showFilters, setShowFilters] = useState(false)
  const onCloseClick = () => setShowFilters(false)
  const onOpenFilterClick = () => setShowFilters(true)
  const router = useRouter()

  return (
    // TODO: make breadcrumb based on filtered categories
    // TODO: that object also contains the page title
    <InstantSearch searchClient={algoliaClient} indexName={index}>
      {showFilters && (
        <OrSearchFilters {...orSearchFiltersProps} onCloseClick={onCloseClick} onDoneClick={onCloseClick} />
      )}
      <Configure filters={filterBuilder(router.asPath, 'hierarchies.name')} />
      {/* Catalog margins */}
      <div className="my-8 md:mt-11 md:mb-20 lg:mt-16 lg:mb-32 mx-4 md:mx-5 xl:mx-10">
        {/* Mobile and tablet view */}
        <div className="lg:hidden">
          <div className="mb-5 md:mb-6">
            <MlBreadcrumb {...mlBreadcrumbProps} />
          </div>
          <div className="flex justify-between items-center mb-6 md:mb-7">
            {/* Filter and sorting buttons */}
            <AtLink
              onClick={onOpenFilterClick}
              label="Filter by"
              className="underline font-medium text-lg md:text-xl leading-5 md:leading-7 tracking-wide text-neutral-dark"
            />
            <SortBy defaultRefinement={index} items={sortOptions} />
          </div>
          {/* Page title and counter: Mobile view */}
          <div className="md:hidden mb-7">
            <div className="mb-2">
              <StatsAlgolia />
            </div>
            <CatalogTitle text={title} />
          </div>
          {/* Page title and counter: Tablet view */}
          <div className="hidden md:grid md:grid-cols-5 items-center mb-6">
            <div />
            <div className="col-span-3">
              <CatalogTitle text={title} />
            </div>
            <div className="">
              <StatsAlgolia />
            </div>
          </div>
          {!!mlSelectedFiltersProps && (
            <div className="flex justify-center mb-7 md:mb-14">
              <MlSelectedFilters {...mlSelectedFiltersProps} />
            </div>
          )}
          <div className="flex justify-center">
            <ProductGridAlgolia />
          </div>
        </div>

        {/* Desktop view */}
        <div className="hidden lg:block lg:mr-8 xl:w-max xl:mx-auto">
          <div className="grid grid-cols-3 items-center align-baseline mb-5">
            <MlBreadcrumb {...mlBreadcrumbProps} />
            <CatalogTitle text={title} />
          </div>
          <div className="flex gap-1 xl:gap-32 w-full">
            <div className="relative top-3">
              <OrSearchFilters {...orSearchFiltersProps} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-12">
                <SortBy defaultRefinement={index} items={sortOptions} />
                <StatsAlgolia />
              </div>
              <ProductGridAlgolia />
            </div>
          </div>
        </div>
      </div>
    </InstantSearch>
  )
}
