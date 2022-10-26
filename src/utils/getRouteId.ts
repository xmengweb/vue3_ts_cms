import { LocalCache } from './Cache'

type menus = Array<{
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  children: Array<{
    id: number
    url: string
    name: string
    sort: number
    type: number
    children?: Array<{
      id: number
      url: any
      name: string
      sort: any
      type: number
      parentId: number
      permission: string
    }>
    parentId: number
  }>
}>

export default function getRouteId(url: string) {
  const userMenus: menus = LocalCache.get('userMenus')
  for (let group of userMenus) {
    for (let item of group.children) {
      if (item.url === url) {
        return item.id
      }
    }
  }
}
