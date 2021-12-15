import React from 'react'
import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { nodes } from './nodes'

export type RichTextAlignment = 'start' | 'center' | 'end'

export const richTextAlignmentClasses: Record<RichTextAlignment, string> = {
  start: 'text-left',
  center: 'text-center mx-auto',
  end: 'text-right',
}

const options: Options = {
  renderNode: nodes,
}

export interface MlRichTextProps {
  text: Document
  textAlignment: RichTextAlignment
  className?: string
}

export const MlRichText = ({ text, textAlignment, className = '' }: MlRichTextProps) => {
  return (
    <div className={`ml-rich-text ${className} ${richTextAlignmentClasses[textAlignment]}`}>
      {documentToReactComponents(text, options)}
    </div>
  )
}
