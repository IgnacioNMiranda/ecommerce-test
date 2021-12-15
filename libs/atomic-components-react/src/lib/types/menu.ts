import { AtLinkProps } from '../atoms'

export type MenuItem = {
  title: AtLinkProps
  children?: (AtLinkProps | MenuItem)[]
}
