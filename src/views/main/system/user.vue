<template>
  <div class="user">
    <formVue @submitForm="updateList" />
    <userListVue :userList="userList" />
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'
import formVue from './cnmps/form.vue'
import userListVue from './cnmps/userList.vue'

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

const { userList } = storeToRefs(store)
</script>

<style lang="less" scoped>
.user {
  background-color: #f0f2f5;
}
</style>
