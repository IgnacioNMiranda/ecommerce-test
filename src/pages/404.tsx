import { getPageBySlug } from '../services/contentful'
import PgPage from './[...slug]'

export const getStaticProps = async () => {
  const props = (await getPageBySlug('/404')) ?? { notFound: true }
  return { props }
}

export default PgPage
