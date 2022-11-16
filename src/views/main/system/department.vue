<template>
  <div class="department">
    <pageDialogVue :DiaConfig="DiaConfig2" :rowEdit="rowEdit" v-if="mainStore.isOpenModel" />
    <pageFormVue :Config1="searchConfig" @submit-form="findList" />
    <pageListVue :Config="listConfig" @del-signal="delOne" @edit-signal="editOne" />
  </div>
</template>

<script setup lang="ts">
import pageDialogVue from '@/components/pageDialog.vue'
import pageFormVue from '@/components/pageForm.vue'
import pageListVue from '@/components/pageList.vue'
import searchConfig from './config/department/departmentSearch'
import listConfig from './config/department/departmentList'
import DiaConfig from './config/department/departmentDia'
import useMainStore from '@/store/main'
import { computed, ref } from 'vue'
const mainStore = useMainStore()

//将对话框里面的list修改后再返回
const DiaConfig2 = computed(() => {
  mainStore.getDepartmentList()
  DiaConfig.allItems.forEach((element: any) => {
    if (element.type === 'select') {
      element.list = mainStore.departmentList
    }
  })
  return DiaConfig
})

//查操作
const findList = (form: any) => {
  mainStore.getList('department', {
    name: form.name,
    leader: form.leader
  })
}

//删除操作
const delOne = (id: number) => {
  mainStore.deleteOne('department', id)
}

//修改:将表格数据获取到传给对话框去修改
const rowEdit = ref()
const editOne = (row: any) => {
  rowEdit.value = row
}
</script>

<style lang="less" scoped>
.department {
  background-color: #f0f2f5;
}
</style>
