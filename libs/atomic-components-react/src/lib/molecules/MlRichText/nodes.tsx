import React from 'react'
import { BLOCKS, Node } from '@contentful/rich-text-types'

export const nodes = {
  [BLOCKS.EMBEDDED_ASSET]: (node: Node) => {
    return <img alt={node.data.target.fields.title} src={node.data.target.fields.file.url} />
  },
}
