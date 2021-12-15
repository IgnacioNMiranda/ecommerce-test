import React, { useState } from 'react'
import { AtIcon, AtLink, IconType } from '../../atoms'
import { MenuItem } from '../../types'
import { MenuItems } from './MenuItems'

export type OrTabVerticalProps = {
  menuItems: MenuItem[]
  className?: string
}

const baseClass = 'bg-tertiary-light py-1 text-neutral-dark tracking-wide'

export const OrTabVertical = ({ menuItems, className = '' }: OrTabVerticalProps) => {
  const [openedMenuItems, setOpenedMenuItems] = useState(Array(menuItems?.length).fill(false))

  const handleMenuItemToggled = (index: number) => {
    const newOpenedMenuItems = [...openedMenuItems]
    newOpenedMenuItems[index] = !newOpenedMenuItems[index]
    setOpenedMenuItems(newOpenedMenuItems)
  }

  return (
    <nav className={`${baseClass} ${className ?? ''}`}>
      <ul>
        {menuItems.map((menuItem, index) => (
          <div key={index} className="flex mb-11 justify-between">
            <MenuItems className="md:w-full" menuItem={menuItem} isMenuOpen={openedMenuItems[index]} />

            <AtLink onClick={() => handleMenuItemToggled(index)}>
              <span className="block md:hidden cursor-pointer">
                <AtIcon
                  type={openedMenuItems[index] ? ('angle-up' as IconType) : ('angle-down' as IconType)}
                  size={26}
                />
              </span>
            </AtLink>
          </div>
        ))}
      </ul>
    </nav>
  )
}
