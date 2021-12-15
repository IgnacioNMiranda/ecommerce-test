import React, { FormEventHandler } from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'
import { SearchBoxProvided } from 'react-instantsearch-core'
import { AtBaseInput } from '../../..'
import { ProductHits } from './ProductHits'
import { ClearHitsButton } from './Buttons'
import { getSearchUrl } from './utils'

const ProductSearchBox = ({ currentRefinement, refine }: SearchBoxProvided) => {
  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    refine(value)
  }

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    if (typeof window !== 'undefined' && currentRefinement !== '') {
      window.location.href = getSearchUrl(currentRefinement)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <AtBaseInput
          placeholder="Search"
          value={currentRefinement}
          onChange={onChange}
          icon={currentRefinement ? <ClearHitsButton clearsQuery /> : 'search'}
          required
        />
      </form>
      <ProductHits />
    </>
  )
}

export const Searchbox = connectSearchBox(ProductSearchBox)
