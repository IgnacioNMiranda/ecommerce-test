import React, { useState } from 'react'
import { AtIcon, AtLink, MenuItem } from '../../..'
import { NavbarGroup } from '../NavbarGroup'

export interface HamburguerMenuProps {
  menuItems?: MenuItem[]
  toggleHamburguer: () => void
}

export const HamburguerMenu = ({ menuItems, toggleHamburguer }: HamburguerMenuProps) => {
  const [openedHamburguerItems, setOpenedHamburguerItems] = useState(Array(menuItems?.length).fill(false))

  const handleMenuItemToggled = (index: number) => {
    const newOpenedHamburguerItems = [...openedHamburguerItems]
    newOpenedHamburguerItems[index] = !newOpenedHamburguerItems[index]
    setOpenedHamburguerItems(newOpenedHamburguerItems)
  }

  return (
    <>
      <div
        className="w-full h-full bg-secondary-dark opacity-40 fixed top-0 left-0 block lg:hidden"
        style={{ minHeight: 1095 }}
      />
      <div className="w-full md:w-11/12 h-full bg-primary fixed top-0 left-0 block lg:hidden overflow-scroll z-10">
        <div className="flex justify-end mt-5 mr-5 md:mt-9 md:mr-20">
          <button type="button" className="flex justify-end focus:outline-none" onClick={toggleHamburguer}>
            <AtIcon type="times" color="neutral-dark" />
          </button>
        </div>
        <div className="mt-8 md:mt-11 ml-10 md:ml-14  w-4/5 md:w-3/4">
          <ul className="flex flex-col h-full gap-6">
            {menuItems?.map((menuItem, index) => (
              <li
                key={index + (menuItem.title.label ?? '')}
                className={`overflow-hidden ${openedHamburguerItems[index] ? 'h-auto' : 'h-6'}`}
              >
                <div className="flex justify-between">
                  {menuItem.title.actionUrl ? (
                    <AtLink actionUrl={menuItem.title.actionUrl}>
                      <span className="text-neutral-dark hover:text-secondary text-base font-medium uppercase">
                        {menuItem.title.label}
                      </span>
                    </AtLink>
                  ) : (
                    <span className="flex items-center px-5 text-neutral-dark hover:text-secondary text-base font-medium uppercase h-full">
                      {menuItem.title.label}
                    </span>
                  )}

                  <AtLink
                    onClick={() => {
                      handleMenuItemToggled(index)
                    }}
                  >
                    <AtIcon
                      className="cursor-pointer"
                      type={openedHamburguerItems[index] ? 'angle-up' : 'angle-down'}
                      size={30.4}
                    />
                  </AtLink>
                </div>

                {openedHamburguerItems[index] && menuItem.children && menuItem.children.length && (
                  <div className="container mx-auto">
                    <ul className="flex flex-wrap">
                      {menuItem.children.map((child, index) => (
                        <li key={index + (menuItem.title.label ?? '')} className="mr-20 mt-2">
                          <NavbarGroup {...child} />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
