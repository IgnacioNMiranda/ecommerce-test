import React from 'react'
import { Page } from '../../components/layouts'
import { TmSidebar } from './TmSidebar'

export const TmSidebarPage = ({ template }: Page) => {
  return <TmSidebar menuItems={template.menuItems} blocks={template.blocks} />
}
