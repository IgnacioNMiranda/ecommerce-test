import React from 'react'
import { AtLink, AtLinkProps } from '../../atoms'
import { MenuItem } from '../../types/menu'
import { HamburguerMenu } from './Hamburguer/HamburguerMenu'
import { NavbarIcons } from './NavbarIcons'
import { useHamburguer } from './Hamburguer/useHamburguer'
import { Searchbox, useSearchbox } from './Searchbox'
import { NavbarItems } from './NavbarItems'
import { SearchButton } from './Searchbox/Buttons'

export interface OrNavbarProps {
  title: AtLinkProps
  menuItems?: MenuItem[]
  icons?: AtLinkProps[]
}

export const OrNavbar = ({ title, menuItems, icons }: OrNavbarProps) => {
  const hasItems = menuItems && menuItems.length > 0
  const hasIcons = icons && icons.length > 0

  const { isHamburguerActive, toggleHamburguer } = useHamburguer()
  const { searchbarRef, showSearchbarInMobile, toggleSearchbar } = useSearchbox()

  return (
    <nav className="bg-primary shadow relative">
      <div className="container mx-auto">
        <div className="flex items-center h-20 justify-between">
          <div className="flex items-center md:w-1/3 lg:w-1/2 justify-left h-full">
            <div className="lg:hidden pr-0 md:pr-9 cursor-pointer">
              <AtLink iconProps={{ type: 'bars' }} onClick={toggleHamburguer} />
            </div>

            {!showSearchbarInMobile && (
              <div className="flex-shrink-0 transform scale-75 md:scale-100">
                <AtLink {...title} />
              </div>
            )}

            {hasItems && <NavbarItems menuItems={menuItems} />}
          </div>

          <div className="md:w-full lg:w-1/2">
            <div className="flex items-center justify-start md:justify-end">
              <div className="md:w-2/3 lg:w-1/2 ml-8" ref={searchbarRef}>
                <div className={`${showSearchbarInMobile ? 'block' : 'hidden md:block'}`}>
                  <Searchbox />
                </div>
                <SearchButton
                  onClick={toggleSearchbar}
                  className={showSearchbarInMobile ? 'hidden' : 'block md:hidden'}
                />
              </div>
              {hasIcons && !showSearchbarInMobile && <NavbarIcons icons={icons} />}
            </div>
          </div>
        </div>
      </div>
      {isHamburguerActive && <HamburguerMenu toggleHamburguer={toggleHamburguer} menuItems={menuItems} />}
    </nav>
  )
}
