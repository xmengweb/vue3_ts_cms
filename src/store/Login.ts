import { defineStore } from 'pinia'
import Internet from '@/service/Internet1'
import { LocalCache } from '@/utils/Cache'

const useLoginStore = defineStore('login', {
  state: () => ({
    id: '',
    name: '',
    token: LocalCache.get('token') ?? ''
  }),
  actions: {
    async loginAccountAction(account: any) {
      const res = await Internet.request({
        method: 'post',
        url: '/login',
        data: {
          name: account.name,
          password: account.password
        }
      })
      this.id = res.data.id
      this.name = res.data.name
      this.token = res.data.token
      LocalCache.set('token', this.token)
    }
  }
})

export default useLoginStore
