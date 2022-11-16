const DiaConfig: any = {
  kind: 'department',
  title: '部门列表',
  formItems: {
    leader: '',
    name: '',
    parentId: ''
  },
  allItems: [
    {
      label: '部门名称',
      prop: 'name'
    },
    {
      type: 'select',
      label: '上级部门',
      prop: 'parentId',
      list: []
    },
    {
      label: '部门领导',
      prop: 'leader'
    }
  ]
}

export default DiaConfig
