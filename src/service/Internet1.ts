import { LocalCache } from '@/utils/Cache'
import type { AxiosRequestConfig, AxiosResponse } from 'axios'
import XRequest from './index'

const Internet = new XRequest({
  baseURL: 'http://152.136.185.210:5000',
  timeout: 1000,
  interceptors: {
    requestInterceptors: (res: AxiosRequestConfig) => {
      const token = LocalCache.get('token')
      if (res.headers && token) res.headers.Authorization = 'Bearer ' + token
      return res
    }
  }
})

export default Internet
