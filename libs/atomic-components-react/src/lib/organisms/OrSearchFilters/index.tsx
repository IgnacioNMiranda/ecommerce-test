import React from 'react'
import { FilterGroup, Filter, AtButtonTypes } from '../../types'
import { AtButton, AtIcon } from '../../atoms'
import { MlFilterDropdown, MlSelectedFilters } from '../../molecules'

export interface OrSearchFiltersProps {
  categories: FilterGroup[]
  selectedFilters?: Filter[]
  addFilterHandler(filter: Filter): void
  removeFilterHandler(filter: Filter): void
  onCloseClick?(): void
  onDoneClick?(): void
}

const CommonSearchFiltersView = ({
  categories,
  selectedFilters,
  addFilterHandler,
  removeFilterHandler,
}: OrSearchFiltersProps) => {
  return (
    <>
      <h1 className="text-sm md:text-lg lg:text-xl font-bold md:font-medium leading-4 md:leading-5 lg:leading-7 md:text-center lg:text-left text-neutral-dark">
        Filters
      </h1>

      {selectedFilters && (
        <div className="my-2 lg:mt-7">
          <p className="hidden lg:block text-secondary font-bold leading-5 mb-4">Filtered by</p>
          <MlSelectedFilters filters={selectedFilters} removeFilterHandler={removeFilterHandler} />
        </div>
      )}
      {categories.map((category, idx) => (
        <div className="my-4" key={idx}>
          <MlFilterDropdown filterGroup={category} addFilterHandler={addFilterHandler} />
        </div>
      ))}
    </>
  )
}

export const OrSearchFilters = ({
  categories,
  selectedFilters,
  addFilterHandler,
  removeFilterHandler,
  onCloseClick,
  onDoneClick,
}: OrSearchFiltersProps) => {
  return (
    <>
      <div className="lg:hidden">
        <div className="flex-col fixed z-20 w-11/12 h-screen bg-tertiary-light">
          <div className="flex justify-end pt-4 pr-4">
            <button type="button" className="focus:outline-none" onClick={onCloseClick}>
              <AtIcon type="multiply" color="neutral-dark" size={18} />
            </button>
          </div>
          <div className="pl-9 md:pl-14 pr-11 md:pr-40 mb-2 md:mb-6 overflow-scroll h-4/5">
            <CommonSearchFiltersView
              categories={categories}
              selectedFilters={selectedFilters}
              addFilterHandler={addFilterHandler}
              removeFilterHandler={removeFilterHandler}
            />
          </div>
          <div className="flex justify-center pl-9 pr-11 md:px-64">
            <AtButton
              type={AtButtonTypes.SECONDARY}
              className="tracking-wide text-sm font-semibold text-white inline-flex items-center justify-center w-full md:px-16 py-1 bg-secondary hover:bg-secondary-dark uppercase"
              onClick={onDoneClick}
            >
              Done
            </AtButton>
          </div>
        </div>
        <div className="h-screen w-screen fixed z-10 bg-secondary opacity-40" />
      </div>
      <div className="hidden lg:block w-52">
        <CommonSearchFiltersView
          categories={categories}
          selectedFilters={selectedFilters}
          addFilterHandler={addFilterHandler}
          removeFilterHandler={removeFilterHandler}
        />
      </div>
    </>
  )
}
