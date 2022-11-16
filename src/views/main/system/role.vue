<template>
  <div class="role">
    <pageFormVue :Config1="Config1" @submit-form="findList" />
    <pageListVue :Config="roleConfig" @del-signal="delOne" @edit-signal="editOne" />
    <pageDialogVue :DiaConfig="DiaConfig" :rowEdit="rowEdit" v-if="mainStore.isOpenModel">
      <template #TreeList>
        <el-tree
          ref="treeRef"
          :data="menuList"
          show-checkbox
          node-key="id"
          highlight-current
          :props="{ label: 'name', children: 'children' }"
          @check="handleMenuCheckChange"
        />
      </template>
    </pageDialogVue>
  </div>
</template>

<script setup lang="ts">
import roleConfig from './config/rolo/roleList'
import Config1 from './config/rolo/roleSearch'
import DiaConfig from './config/rolo/roleDia'
import pageFormVue from '@/components/pageForm.vue'
import pageListVue from '@/components/pageList.vue'
import pageDialogVue from '@/components/pageDialog.vue'
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'
import { listToId } from '@/utils/listToId'
import type { ElTree } from 'element-plus'

const mainStore = useMainStore()
mainStore.getMenuList()
const { menuList } = storeToRefs(mainStore)
const treeRef = ref<InstanceType<typeof ElTree>>()

//修改:将表格数据获取到传给对话框去修改
const rowEdit = ref()
const editOne = (row: any) => {
  rowEdit.value = row
  const ans = listToId(rowEdit.value['menuList'])
  nextTick(() => {
    treeRef.value!.setCheckedKeys(ans)
  })
}
//查
const findList = (form: any) => {
  mainStore.getList('role', {
    name: form.name,
    intro: form.intro
  })
}
//删
const delOne = (id: number) => {
  mainStore.deleteOne('role', id)
}

const handleMenuCheckChange = (x: any, y: any) => {
  DiaConfig.checkedKeys = y.checkedKeys
}
</script>

<style lang="less" scoped>
.role {
  background-color: #f0f2f5;
}
</style>
