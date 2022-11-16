<template>
  <div class="user">
    <formVue @submitForm="updateList" />
    <userListVue :userList="userList" @edit-signal="getEditId" />
    <dialog-vue :rowEdit="row" v-if="store.isOpenDia"></dialog-vue>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'
import formVue from './cnmps/form.vue'
import userListVue from './cnmps/userList.vue'
import dialogVue from './cnmps/dialog.vue'
import { ref } from 'vue'

const store = useMainStore()
store.getUserList({})

const updateList = (form: any) => {
  store.getUserList({
    name: form.username,
    realname: form.realName,
    cellphone: form.phoneNumber,
    createAt: form.date
  })
}
const row = ref()
const getEditId = (id: any) => {
  row.value = id
}

const { userList } = storeToRefs(store)
</script>

<style lang="less" scoped>
.user {
  background-color: #f0f2f5;
}
</style>
