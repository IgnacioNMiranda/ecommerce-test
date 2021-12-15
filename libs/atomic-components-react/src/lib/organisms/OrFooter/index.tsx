import React from 'react'
import { BffCurrencies } from '@lib/ecommerce-bff-types'
import { AtIcon, AtLink, AtLinkProps } from '../../atoms'
import { IconType } from '../../atoms/AtIcon/icon-types'
import { MenuItem } from '../../types'
import { Currency } from './Currency'

export interface OrFooterProps {
  brand: AtLinkProps
  menuItems: MenuItem[]
  socialMediaHeading: string
  socialMediaItems: AtLinkProps[]
  description: string
  copyright: string
  currencyData: BffCurrencies & { currencyDispatch: React.Dispatch<unknown> }
}

const linkDefaultIcons: Partial<AtLinkProps> = {
  iconProps: { type: 'angle-right', color: 'neutral-dark', size: 28 },
  iconHoverProps: { type: 'angle-right', color: 'secondary', size: 28 },
}

export const OrFooter = ({
  brand,
  menuItems,
  copyright,
  description,
  socialMediaHeading,
  socialMediaItems,
  currencyData,
}: OrFooterProps) => {
  return (
    <footer className="bg-primary py-14">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {(brand || description || copyright) && (
            <div className="md:col-span-4 lg:col-span-1 md:order-none order-4">
              {brand && <AtLink {...brand} />}
              {description && <p className="text-sm my-4 leading-5">{description}</p>}
              {copyright && <span className="text-neutral text-sm sm:block md:hidden lg:block">{copyright}</span>}
            </div>
          )}

          <div className="hidden lg:block" />

          {menuItems?.map((menuItem, index) => (
            <div key={index}>
              <h4 className="text-base font-bold leading-5 mb-5 hidden md:block">{menuItem.title.label}</h4>

              <AtLink
                {...linkDefaultIcons}
                actionUrl={menuItem.title.actionUrl}
                className="justify-between font-bold text-base mb-5 md:hidden w-full"
                label={menuItem.title.label}
              />

              <ul className="hidden md:block">
                {menuItem.children?.map((child, index) => (
                  <li key={index} className="mb-5 leading-5">
                    <AtLink actionUrl={(child as AtLinkProps).actionUrl} label={(child as AtLinkProps).label} />
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <Currency {...currencyData} />

            {!!socialMediaHeading && socialMediaItems?.length > 0 && (
              <>
                <h4 className="text-base font-bold leading-5 mb-5">{socialMediaHeading}</h4>
                <ul>
                  <li className="mb-4 flex justify-left gap-2">
                    {socialMediaItems.map((social, index) => (
                      <AtLink key={index} actionUrl={social.actionUrl}>
                        <AtIcon type={social.label as IconType} />
                      </AtLink>
                    ))}
                  </li>
                </ul>
              </>
            )}
          </div>

          {copyright && <p className="text-neutral text-sm hidden md:block lg:hidden">{copyright}</p>}
        </div>
      </div>
    </footer>
  )
}
