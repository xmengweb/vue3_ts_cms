<template>
  <div class="goods">
    <pageFormVue :Config1="searchConfig" @submit-form="findList" />
    <pageListVue :Config="listConfig" @del-signal="delOne" @edit-signal="editOne" />
  </div>
</template>

<script setup lang="ts">
import pageDialogVue from '@/components/pageDialog.vue'
import pageFormVue from '@/components/pageForm.vue'
import pageListVue from '@/components/pageList.vue'
import useMainStore from '@/store/main'
import searchConfig from './config/goods/searchConfig'
import listConfig from './config/goods/listConfig'
import { computed, ref } from 'vue'
const mainStore = useMainStore()

//查操作
const findList = (form: any) => {
  mainStore.getList('goods', {
    name: form.name,
    address: form.address
  })
}

//删除操作
const delOne = (id: number) => {
  mainStore.deleteOne('goods', id)
}

//修改:将表格数据获取到传给对话框去修改
const rowEdit = ref()
const editOne = (row: any) => {
  rowEdit.value = row
}
</script>

<style lang="less" scoped>
.goods {
}
</style>
