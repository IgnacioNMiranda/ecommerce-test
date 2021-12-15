import React from 'react'
import { AtLink, AtLinkProps } from '../../atoms'
import { MenuItem } from '../../types/menu'
import { NavbarSubmenu } from './NavbarSubmenu'

export const NavbarGroup = (item: MenuItem | AtLinkProps) => {
  const isLink = !('title' in item) && 'actionUrl' in item && 'label' in item

  return isLink ? (
    <AtLink actionUrl={(item as AtLinkProps).actionUrl}>
      <span className="text-center text-secondary text-base font-medium uppercase mb-4">
        {(item as AtLinkProps).label}
      </span>
    </AtLink>
  ) : (
    <NavbarSubmenu {...(item as MenuItem)} />
  )
}
