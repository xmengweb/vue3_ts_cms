import { defineStore } from 'pinia'
import Internet from '@/service/Internet1'
import { LocalCache } from '@/utils/Cache'
import router from '@/router'

interface Istate {
  token: string
  userInfo: any
  userMenus: any
}

const useLoginStore = defineStore('login', {
  state: (): Istate => ({
    token: LocalCache.get('token') ?? '',
    userInfo: LocalCache.get('userInfo') ?? {},
    userMenus: LocalCache.get('userMenus') ?? []
  }),
  actions: {
    async loginAccountAction(account: any) {
      //返回账号密码的用户id,token
      const res = await Internet.request({
        method: 'post',
        url: '/login',
        data: {
          name: account.name,
          password: account.password
        }
      })
      //账号密码错误
      if (!res) return false
      //保存userID,token信息
      const userId: number = res.data.id
      this.token = res.data.token
      LocalCache.set('token', this.token)
      //返回详细的人物信息(角色,部门...)
      const res2 = await Internet.request({
        method: 'get',
        url: `/users/${userId}`
      })
      //保存人物信息
      this.userInfo = res2.data
      console.log(this.userInfo)

      const roleId = this.userInfo.role.id
      //返回当前角色的权限
      const res3 = await Internet.request({
        method: 'get',
        url: `/role/${roleId}/menu`
      })
      this.userMenus = res3.data

      LocalCache.set('userInfo', this.userInfo)
      LocalCache.set('userMenus', this.userMenus)
      router.push('/main')
      return true
    }
  }
})

export default useLoginStore
