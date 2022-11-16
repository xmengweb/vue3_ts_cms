const listConfig = {
  kind: 'goods',
  title: '商品列表',
  tableItems: [
    {
      type: 'selection',
      width: '70'
    },
    {
      type: 'index',
      width: '80',
      label: '序号'
    },
    {
      prop: 'name',
      label: '商品名称',
      width: '200'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      width: '80'
    },
    {
      prop: 'newPrice',
      label: '新价格',
      width: '80'
    },
    {
      prop: 'desc',
      label: '商品描述',
      width: '80'
    },
    {
      prop: 'status',
      label: '状态',
      width: '80'
    },
    {
      prop: 'imgUrl',
      label: '图片',
      width: '80'
    },
    {
      prop: 'inventoryCount',
      label: '库存',
      width: '80'
    },
    {
      prop: 'saleCount',
      label: '销量',
      width: '80'
    },
    {
      prop: 'favorCount',
      label: '收藏',
      width: '80'
    },
    {
      prop: 'address',
      label: '地址',
      width: '80'
    },
    {
      prop: 'createAt',
      label: '创建时间'
    },
    {
      prop: 'updateAt',
      label: '更新时间'
    }
  ]
}

export default listConfig
