import React from 'react'
import { ContentfulBlock, ContentfulBlockTypes, ContentfulDiscountBar } from '@lib/contentful-sdk-types'
import { MlDiscountBar } from '@lib/react'
import { BlockList } from '../../components'

export interface TmGenericProps {
  blocks: ContentfulBlock[]
}

export const TmGeneric = ({ blocks = [] }: TmGenericProps) => {
  let discountBarBlock = null
  const templateBlocks = blocks.map((block) => {
    if (discountBarBlock === null && block.type === ContentfulBlockTypes.MlDiscountBar) {
      discountBarBlock = block as ContentfulDiscountBar
      return ({ type: 'none' } as unknown) as ContentfulBlock
    }
    return block
  })

  return (
    <>
      {discountBarBlock && <MlDiscountBar className="order-first" {...discountBarBlock} />}
      <BlockList className="w-full flex-1" blocks={templateBlocks} />
    </>
  )
}
