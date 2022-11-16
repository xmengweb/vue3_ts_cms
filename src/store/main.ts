import { defineStore } from 'pinia'
import Internet1 from '@/service/Internet1'
import type { IuserList, IroleList, IdepartmentList } from '@/type/IList'

//接收到的用户列表信息
interface Idata {
  offset?: string
  size?: string
  name?: string
  cellphone?: string
  realname?: string
  createAt?: string
  enable?: string
}
//接受到的创建用户的信息
interface Iuser {
  name: string
  realname: string
  password: string
  cellphone: string
  departmentId: string
  roleId: string
}

interface IfindObj {
  name?: string
  leader?: string
  intro?: string
  createAt?: string
  address?: string
}
type Imenu = Array<{
  id: number
  name: string
  type: number
  url: string
  icon: string
  sort: number
  createAt: string
  updateAt: string
  children: Array<{
    id: number
    url: string
    name: string
    sort: number
    type: number
    children?: Array<{
      id: number
      url?: string
      name: string
      sort?: number
      type: number
      createAt: string
      parentId: number
      updateAt: string
      permission?: string
    }>
    createAt: string
    parentId: number
    updateAt: string
  }>
}>

interface Istate {
  iscollapse: boolean
  isOpenDia: boolean
  userList: IuserList
  roleList: IroleList
  menuList: Imenu
  departmentList: IdepartmentList
  infoList: any
  isEdit: boolean
  isOpenModel: boolean
}

const useMainStore = defineStore('main', {
  state: (): Istate => ({
    iscollapse: false,
    isOpenDia: false,
    userList: [],
    roleList: [],
    departmentList: [],
    menuList: [],
    isEdit: false,
    //以下为抽取
    //表格数据
    infoList: [],
    isOpenModel: false
  }),
  actions: {
    changeCollapse() {
      this.iscollapse = !this.iscollapse
    },
    //用户:增
    async createUser(data: Iuser) {
      await Internet1.request({
        method: 'post',
        url: '/users',
        data: data
      })
      this.getUserList({})
    },
    //用户:查
    async getUserList(data: Idata) {
      data.size = '100'
      const res = await Internet1.request({
        method: 'post',
        url: '/users/list',
        data: data
      })
      this.userList = res.data.list
    },
    //用户:删
    async deleteUser(id: number) {
      await Internet1.request({
        method: 'delete',
        url: `/users/${id}`
      })
      this.getUserList({})
    },
    //用户:改
    async editUser(id: number, data: Idata) {
      await Internet1.request({
        method: 'patch',
        url: `/users/${id}`,
        data: data
      })
      this.getUserList({})
    },
    //查询角色列表
    async getRoleList() {
      const res = await Internet1.request({
        method: 'post',
        url: '/role/list'
      })
      this.roleList = res.data.list
    },
    //查询部门列表
    async getDepartmentList() {
      const res = await Internet1.request({
        method: 'post',
        url: '/department/list'
      })
      this.departmentList = res.data.list
    },

    async getMenuList() {
      const res = await Internet1.request({
        url: '/menu/list',
        method: 'post'
      })
      this.menuList = res.data.list
    },
    //以下为抽取
    //所有:查  (部门菜单角色)
    async getList(kind: string, data: IfindObj) {
      const url = `/${kind}/list`
      Internet1.request({
        method: 'post',
        url: url,
        data: data
      }).then((res) => {
        this.infoList = res.data.list
      })
    },
    //所有:增 (部门菜单角色)
    async createOne(kind: string, data: any) {
      await Internet1.request({
        url: `/${kind}`,
        method: 'post',
        data: data
      })
      this.getList(kind, {})
    },
    //所有:删
    async deleteOne(kind: string, id: number) {
      const res = await Internet1.request({
        method: 'delete',
        url: `/${kind}/${id}`
      })
      this.getList(kind, {})
    },
    //所有:改
    async editOne(kind: string, id: number, data: any) {
      const res = await Internet1.request({
        method: 'patch',
        url: `/${kind}/${id}`,
        data: data
      })
      this.getList(kind, {})
    }
  }
})

export default useMainStore
