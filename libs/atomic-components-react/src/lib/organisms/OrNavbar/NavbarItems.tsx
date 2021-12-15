import React, { useState } from 'react'
import { AtLink, MenuItem } from '../..'
import { NavbarGroup } from './NavbarGroup'

export interface NavbarItemsProps {
  menuItems?: MenuItem[]
}

export const NavbarItems = ({ menuItems }: NavbarItemsProps) => {
  const [tabActive, setTabActive] = useState(-1)
  const handleMouseLeave = () => {
    setTabActive(-1)
  }

  if (!menuItems) return null

  return (
    <div className="hidden lg:block h-full ml-10 z-10" onMouseLeave={handleMouseLeave}>
      <ul className="flex justify-around h-full">
        {menuItems.map((menuItem, index) => (
          <li
            key={index + (menuItem.title.label ?? '')}
            className="float-left pt-1 border-b-4 border-transparent group hover:border-secondary"
            onMouseEnter={() => setTabActive(index)}
          >
            {menuItem.title.actionUrl ? (
              <span className="flex items-center px-5 h-full">
                <AtLink actionUrl={menuItem.title.actionUrl}>
                  <span className="text-neutral-dark hover:text-secondary text-base font-medium uppercase group-hover:text-secondary">
                    {menuItem.title.label}
                  </span>
                </AtLink>
              </span>
            ) : (
              <span className="flex items-center px-5 text-neutral-dark hover:text-secondary text-base font-medium uppercase h-full group-hover:text-secondary">
                {menuItem.title.label}
              </span>
            )}
          </li>
        ))}
      </ul>

      {menuItems[tabActive]?.children && (
        <div className="w-full p-4 bg-primary absolute left-0 shadow" onMouseLeave={handleMouseLeave}>
          <div className="container mx-auto">
            <ul className="flex ml-40 min-w-min flex-wrap">
              {menuItems[tabActive].children?.map((child, index) => (
                <li key={index} className="mr-20 mt-2">
                  <NavbarGroup {...child} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
