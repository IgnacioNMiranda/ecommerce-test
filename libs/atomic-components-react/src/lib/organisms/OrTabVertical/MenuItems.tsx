import React, { Fragment, useEffect, useState } from 'react'
import { AtLink, AtLinkProps } from '../../atoms'
import { MenuItem } from '../../types'

export type MenuItemsProps = {
  isMenuOpen?: boolean
  menuItem: MenuItem
  className?: string
}

export const MenuItems = ({ menuItem: { title, children }, isMenuOpen, className }: MenuItemsProps) => {
  const [pageSlug, setPageSlug] = useState<string | undefined>('')
  useEffect(() => {
    setPageSlug(window.location.pathname.split('/').pop())
  }, [])

  const renderChildren = (children: AtLinkProps[]) => {
    return children.map((child, index) => {
      const childSlug = child.actionUrl?.split('/').pop()
      const isChildCurrentPage = pageSlug === childSlug
      return (
        <Fragment key={index}>
          <li className={`mt-2 hidden md:block ${isChildCurrentPage && 'border-r-4'}`}>
            <AtLink
              extraClass={`font-normal ${isChildCurrentPage && 'font-black'} hover:font-black w-full`}
              actionUrl={child.actionUrl}
              label={child.label}
            />
          </li>

          <li className={`mt-2 ${isMenuOpen ? 'md:hidden' : 'hidden'}`}>
            <AtLink extraClass="font-normal" actionUrl={child.actionUrl} label={child.label} />
          </li>
        </Fragment>
      )
    })
  }

  return (
    <ul className={className ?? ''}>
      <span className="flex justify-between mr-10">
        <AtLink actionUrl={title.actionUrl}>
          <span className="text-lg font-medium">{title.label}</span>
        </AtLink>
      </span>

      {children && renderChildren(children)}
    </ul>
  )
}
