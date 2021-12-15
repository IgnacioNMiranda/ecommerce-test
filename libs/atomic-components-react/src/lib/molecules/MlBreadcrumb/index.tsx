import React from 'react'
import { AtLink, AtLinkProps } from '../../atoms/AtLink'

interface LinkDisable {
  disabled?: boolean
}

export interface MlBreadcrumbProps {
  links: (AtLinkProps & LinkDisable)[]
}

export const MlBreadcrumb = ({ links }: MlBreadcrumbProps) => {
  return (
    <div className="text-neutral-dark text-sm sm:text-base leading-4">
      {links.map((linkProps, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <span> / </span>}
          {linkProps.disabled ? (
            <span>{linkProps.children ?? linkProps.label}</span>
          ) : (
            <AtLink {...linkProps} className="inline-block" />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
