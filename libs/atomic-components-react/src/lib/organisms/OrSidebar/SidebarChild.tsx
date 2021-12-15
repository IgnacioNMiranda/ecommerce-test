import React, { useState } from 'react'
import { MenuItem } from '../..'
import { AtIcon, AtLink, AtLinkProps } from '../../atoms'

export interface SidebarChildProps {
  menuItem: MenuItem
  defaultExpanded: boolean
}

export const SidebarChild = ({ menuItem, defaultExpanded }: SidebarChildProps) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  return (
    <li className="my-5">
      <div className="flex justify-between">
        <AtLink
          actionUrl={menuItem.title.actionUrl}
          className="text-base text-neutral-dark font-medium uppercase"
          label={menuItem.title.label}
        />

        {menuItem.children?.length && (
          <span
            className="flex items-center cursor-pointer"
            role="button"
            aria-hidden
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <AtIcon type={isExpanded ? 'angle-up' : 'angle-down'} size={30} />
          </span>
        )}
      </div>

      {isExpanded &&
        (menuItem.children as MenuItem[])?.map((child, childIndex) => (
          <div key={childIndex}>
            <h2 className="mt-4 text-sm uppercase font-medium text-neutral-dark">{child.title.label}</h2>

            <ul>
              {(child.children as AtLinkProps[])?.map((grandChild, grandChildIndex) => (
                <li key={grandChildIndex} className="text-sm my-4 font-normal text-neutral-dark">
                  <AtLink actionUrl={grandChild.actionUrl}>{grandChild.label}</AtLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </li>
  )
}
