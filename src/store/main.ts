import { defineStore } from 'pinia'
import Internet1 from '@/service/Internet1'

interface Idata {
  offset?: string
  size?: string
  name?: string
  cellphone?: string
  realname?: string
  createAt?: string
  enable?: string
}
const useMainStore = defineStore('main', {
  state: () => ({
    iscollapse: false,
    userList: []
  }),
  actions: {
    changeCollapse() {
      this.iscollapse = !this.iscollapse
    },
    async getUserList(data: Idata) {
      const res = await Internet1.request({
        method: 'post',
        url: '/users/list',
        data: data
      })
      this.userList = res.data.list
    },
    async deleteUser(id: number) {
      const res = await Internet1.request({
        method: 'delete',
        url: `/users/${id}`
      })
      this.getUserList({})
    }
  }
})

export default useMainStore
