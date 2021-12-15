import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { ContentfulPage } from '@lib/contentful-sdk-types'
import { getPageBySlug } from '../services/contentful'
import { Layout } from '../components/layouts/Layout'

const PgPage = (props: ContentfulPage | { notFound: boolean }) => {
  if ((props as { notFound: boolean }).notFound) return <div>404</div>

  const page = props as ContentfulPage
  const { title } = page

  return <Layout templateType={page.template?.type} pageTitle={title} contentfulPage={page} />
}

export const getServerSideProps = async ({ params }: GetServerSidePropsContext<{ slug: [] }>) => {
  const slug = params?.slug?.join('/') ?? ''
  const page = slug ? await getPageBySlug(slug) : null

  if (page) {
    return {
      props: {
        ...page,
        notFound: !page,
      },
    }
  }
  return { notFound: true }
}

export default PgPage
