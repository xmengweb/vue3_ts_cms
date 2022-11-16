const searchConfig = {
  kind: 'department',
  formItems: [
    {
      type: 'el-input',
      prop: 'name',
      label: '部门名称'
    },
    {
      type: 'el-input',
      prop: 'leader',
      label: '部门领导'
    },
    {
      type: 'el-date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
