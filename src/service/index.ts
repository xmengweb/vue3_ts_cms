import axios from 'axios'
import type { AxiosInstance, CreateAxiosDefaults, AxiosRequestConfig, AxiosResponse } from 'axios'

interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  // 响应拦截
  responseInterceptors?: (config: AxiosResponse) => AxiosResponse
  responseInterceptorsCatch?: (err: any) => any
}
// 自定义传入的参数
interface RequestConfig extends CreateAxiosDefaults {
  interceptors?: RequestInterceptors
}

class Request {
  instance: AxiosInstance
  // 拦截器对象
  interceptorsObj?: RequestInterceptors

  constructor(config: RequestConfig) {
    this.instance = axios.create(config)
    this.interceptorsObj = config.interceptors
    //全局请求拦截
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        console.log('全局请求拦截')
        return res
      },
      (err: any) => err
    )
    // 实例拦截器
    this.instance.interceptors.request.use(
      this.interceptorsObj?.requestInterceptors,
      this.interceptorsObj?.requestInterceptorsCatch
    )
    this.instance.interceptors.response.use(
      this.interceptorsObj?.responseInterceptors,
      this.interceptorsObj?.responseInterceptorsCatch
    )
    //全局response拦截
    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        console.log('全局回应拦截')
        return res
      },
      (err: any) => err
    )
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Request

// const r1 = new Request({
//   baseURL: 'https://www.mxnzp.com/api/history/today',
//   timeout: 1000,
//   interceptors: {
//     requestInterceptors: (res: AxiosRequestConfig) => {
//       console.log('局部请求拦截', res)
//       return res
//     },
//     responseInterceptors: (res: AxiosResponse) => {
//       console.log('局部响应拦截')
//       return res
//     }
//   }
// })

// r1.request({
//   method: 'get',
//   params: {
//     app_id: 'rgihdrm0kslojqvm',
//     app_secret: 'WnhrK251TWlUUThqaVFWbG5OeGQwdz09'
//   }
// }).then((res) => console.log(res))
