import React from 'react'
import { ContentfulBlock } from '@lib/contentful-sdk-types'
import { Block } from '../OrContainer/Block'

export interface BlockListProps {
  blocks: ContentfulBlock[]
  className?: string
}

export const BlockList = ({ blocks, className = '' }: BlockListProps) => {
  return (
    <div className={className}>
      {blocks.map((block, index) => (
        <Block key={`${block.type}-${index}`} block={block} />
      ))}
    </div>
  )
}
