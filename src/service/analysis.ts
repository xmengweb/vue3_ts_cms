import Internet1 from '@/service/Internet1'

export function getAmountListData() {
  return Internet1.request({
    method: 'get',
    url: '/goods/amount/list'
  })
}

export function getGoodsCategoryCount() {
  return Internet1.request({
    method: 'get',
    url: '/goods/category/count'
  })
}

export function getGoodsCategorySale() {
  return Internet1.request({
    method: 'get',
    url: '/goods/category/sale'
  })
}

export function getGoodsCategoryFavor() {
  return Internet1.request({
    method: 'get',
    url: '/goods/category/favor'
  })
}

export function getGoodsAddressSale() {
  return Internet1.request({
    method: 'get',
    url: '/goods/address/sale'
  })
}
