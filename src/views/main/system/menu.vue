<template>
  <div class="menu">
    <pageListVue :Config="menuConfig" @del-signal="delOne" @edit-signal="editOne" />
  </div>
</template>

<script setup lang="ts">
import menuConfig from './config/menu/menuList'
import pageListVue from '@/components/pageList.vue'
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'
const mainStore = useMainStore()
const { isEdit, isOpenModel } = storeToRefs(mainStore)

const delOne = () => {
  isEdit.value = false
  isOpenModel.value = false
}
const editOne = () => {
  isEdit.value = false
  isOpenModel.value = false
}
</script>

<style lang="less" scoped>
.menu {
  background-color: #f0f2f5;
}
</style>
