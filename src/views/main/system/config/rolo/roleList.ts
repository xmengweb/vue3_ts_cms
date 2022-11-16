const roleConfig = {
  kind: 'role',
  title: '角色列表',
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
      label: '角色名称',
      width: '200'
    },
    {
      prop: 'intro',
      label: '角色权限',
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

export default roleConfig
