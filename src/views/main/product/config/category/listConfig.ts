const listConfig = {
  kind: 'category',
  title: '类别列表',
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
      label: '类别名称',
      width: '200'
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
