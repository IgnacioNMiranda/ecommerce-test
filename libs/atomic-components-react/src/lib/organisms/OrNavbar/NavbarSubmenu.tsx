import React from 'react'
import { AtLink, AtLinkProps, MenuItem } from '../..'

export const NavbarSubmenu = ({ title, children }: MenuItem) => {
  return (
    <div>
      <AtLink actionUrl={title.actionUrl}>
        <span className="flex items-center text-secondary text-base font-medium uppercase mb-4">{title.label}</span>
      </AtLink>

      {children && children.length > 0 && (
        <ul>
          {(children as AtLinkProps[]).map((child, index) => {
            return (
              <li key={index}>
                <AtLink actionUrl={child.actionUrl}>
                  <span className="flex text-neutral-dark hover:text-secondary text-base font-light py-1">
                    {child.label}
                  </span>
                </AtLink>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
