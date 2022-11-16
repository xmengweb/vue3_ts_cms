const listConfig = {
  kind: 'department',
  title: '部门列表',
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
      label: '部门名称',
      width: '200'
    },
    {
      prop: 'leader',
      label: '部门领导',
      width: '170'
    },
    {
      prop: 'parentId',
      label: '上级部门',
      width: '200'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      width: '280'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      width: '280'
    }
  ]
}

export default listConfig
