import React from 'react'
import { AtLink, AtLinkProps, IconType } from '../..'

export const NavbarIcons = ({ icons }: { icons?: AtLinkProps[] }) => {
  return (
    <div className="flex gap-2 ml-2 md:ml-8">
      {icons?.map((icon, index) => {
        const className = icon.label === 'search' ? 'block md:hidden' : ''
        return (
          <AtLink
            key={index}
            className={className}
            actionUrl={icon.actionUrl}
            iconProps={{ type: icon.label as IconType }}
          />
        )
      })}
    </div>
  )
}
