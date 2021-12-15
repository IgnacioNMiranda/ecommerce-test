import React from 'react'
import { ContentfulBlock } from '@lib/contentful-sdk-types'
import { MenuItem, OrTabVertical } from '@lib/react'
import { BlockList } from '../../components'

export interface TmSidebarProps {
  menuItems: MenuItem[]
  blocks: ContentfulBlock[]
}

export const TmSidebar = ({ menuItems, blocks }: TmSidebarProps) => {
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 md:gap-16">
        <OrTabVertical menuItems={menuItems} className="h-full" />
        <BlockList className="col-span-3 w-full" blocks={blocks} />
      </div>
    </div>
  )
}
