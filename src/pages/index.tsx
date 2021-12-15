import { getPageBySlug } from '../services/contentful'
import PgPage from './[...slug]'

export const getServerSideProps = async () => {
  const props = await getPageBySlug('/')

  if (props) {
    return { props }
  }
  return { notFound: true }
}

export default PgPage
