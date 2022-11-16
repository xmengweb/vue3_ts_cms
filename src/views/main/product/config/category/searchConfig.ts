const searchConfig = {
  kind: 'category',
  formItems: [
    {
      type: 'el-input',
      prop: 'name',
      label: '类别名称'
    },
    {
      type: 'el-date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
