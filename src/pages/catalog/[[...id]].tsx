import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Layout } from '../../components/layouts'
import { getPageBySlug } from '../../services/contentful'
import { mockData } from '../../templates/TmCatalog/TmCatalogPage'
import { TmCatalog } from '../../templates'

const CatalogView = (props) => {
  const { ...page } = props

  return (
    <Layout pageTitle="Catalog" contentfulPage={page}>
      <TmCatalog {...mockData} />
    </Layout>
  )
}

export const getServerSideProps = async (context: GetServerSidePropsContext<{ id: string[] }>) => {
  const notFound = { notFound: true }

  const catalogProps = await getPageBySlug('catalog')
  if (!catalogProps) {
    return notFound
  }

  return {
    props: { ...catalogProps },
  }
}

export default CatalogView
