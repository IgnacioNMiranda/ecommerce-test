import React from 'react'
import { ContentfulPage } from '@lib/contentful-sdk-types'
import { BffProduct } from '@lib/ecommerce-bff-types'
import { GetServerSidePropsContext } from 'next'
import { getProductById } from '../../services/bff'
import { getPageBySlug } from '../../services/contentful'
import { Layout } from '../../components/layouts'
import { TmProductDetailPage } from '../../templates'

const ProductView = (props: ContentfulPage & { product: BffProduct }) => {
  const { product, ...page } = props

  return (
    <Layout pageTitle={product.name} contentfulPage={page}>
      <TmProductDetailPage breadcrumbFirstElement={page.navbar.title.label} product={product} />
    </Layout>
  )
}

export const getServerSideProps = async ({ params: { id } }: GetServerSidePropsContext<{ id: string[] }>) => {
  const notFound = { notFound: true }

  const product = await getProductById(id[0])
  const catalogProps = await getPageBySlug('catalog')
  if (!product || !catalogProps) {
    return notFound
  }

  const isValidSlug = id.length < 3 && (!id[1] || product.slug === id[1])
  if (!isValidSlug) {
    return notFound
  }

  return {
    props: { product, ...catalogProps },
  }
}

export default ProductView
