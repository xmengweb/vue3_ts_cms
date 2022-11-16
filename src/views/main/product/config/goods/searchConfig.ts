const searchConfig = {
  kind: 'goods',
  formItems: [
    {
      type: 'el-input',
      prop: 'name',
      label: '商品名称'
    },
    {
      type: 'el-input',
      prop: 'address',
      label: '商品地址'
    },
    {
      type: 'el-date-picker',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
