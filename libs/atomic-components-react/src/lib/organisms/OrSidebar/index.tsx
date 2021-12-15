import React from 'react'
import { MenuItem } from '../../types'
import { SidebarChild } from './SidebarChild'
import { AtIcon } from '../../atoms'

export interface OrSidebarProps {
  menuItems?: MenuItem[]
  defaultExpanded?: boolean
}

export const OrSidebar = ({ menuItems, defaultExpanded = false }: OrSidebarProps) => {
  return (
    <div className="flex gap-5">
      <menu className="w-80 h-screen bg-primary m-0 p-0">
        <div className="flex justify-end p-4">
          <span className="cursor-pointer">
            <AtIcon type="times" size={30} />
          </span>
        </div>

        <nav className="px-12">
          <div className="relative">
            <div className="absolute inset-y-0 right-4 flex items-center">
              <AtIcon type="search" size={18} />
            </div>

            <input className="h-10 px-6 w-full" placeholder="Buscar" />
          </div>

          {menuItems?.length && (
            <ul className="mr-1">
              {menuItems.map((menuItem, index) => (
                <SidebarChild key={index} menuItem={menuItem} defaultExpanded={defaultExpanded} />
              ))}
            </ul>
          )}
        </nav>
      </menu>
    </div>
  )
}
