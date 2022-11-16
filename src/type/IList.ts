export type IuserList = Array<{
  id: number
  name: string
  realname: string
  cellphone: number
  enable: number
  departmentId: number
  roleId: number
  createAt: string
  updateAt: string
}>

export type IroleList = Array<{
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
  menuList: Array<{
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
}>

export type IdepartmentList = Array<{
  id: number
  name: string
  parentId?: number
  createAt: string
  updateAt: string
  leader: string
}>
