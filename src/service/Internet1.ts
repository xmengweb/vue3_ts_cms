import XRequest from './index'

const Internet = new XRequest({
  baseURL: 'http://152.136.185.210:5000',
  timeout: 1000
})

export default Internet
