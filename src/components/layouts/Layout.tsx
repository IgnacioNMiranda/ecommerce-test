import React, { ReactNode, useContext } from 'react'
import Head from 'next/head'
import { ContentfulPage, ContentfulTemplateType } from '@lib/contentful-sdk-types'
import { OrFooter, OrFooterProps, OrNavbar, OrNavbarProps } from '@lib/react'
import { InstantSearch } from 'react-instantsearch-core'
import { TmGenericPage, TmSidebarPage } from '../../templates'
import { Page } from '.'
import { CurrencyContext } from '../../store'
import { index, algoliaClient } from '../../services/algolia'

export interface LayoutProps {
  templateType?: ContentfulTemplateType
  pageTitle: string
  contentfulPage: ContentfulPage
  children?: ReactNode
}

export const Layout = ({
  templateType,
  pageTitle,
  contentfulPage: { navbar, template = null, blocks, footer },
  children,
}: LayoutProps) => {
  const orNavbarProps: OrNavbarProps = {
    ...navbar,
    title: {
      ...navbar.title,
      label: navbar.title.icon ? null : navbar.title.label,
      iconProps: {
        src: navbar.title.icon.file.url,
      },
    },
  }

  const { state, dispatch } = useContext(CurrencyContext)
  const orFooterProps: OrFooterProps = {
    ...footer,
    brand: {
      ...footer.brand,
      label: footer.brand.icon ? null : footer.brand.label,
      iconProps: {
        src: footer.brand.icon.file.url,
      },
    },
    currencyData: {
      ...state,
      currencyDispatch: dispatch,
    },
  }

  const page: Page = {
    template,
    blocks,
  }

  const renderTemplate = () => {
    switch (templateType) {
      case 'tmSidebar':
        return <TmSidebarPage {...page} />

      default:
        return <TmGenericPage {...page} />
    }
  }

  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="bg-tertiary-light flex flex-col min-h-screen">
        <InstantSearch indexName={index} searchClient={algoliaClient}>
          <OrNavbar {...orNavbarProps} />
        </InstantSearch>
        {children ?? renderTemplate()}
        <OrFooter {...orFooterProps} />
      </div>
    </div>
  )
}
