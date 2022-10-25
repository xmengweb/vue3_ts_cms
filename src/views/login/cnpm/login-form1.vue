<template>
  <div class="form1">
    <el-form :rules="rules" :model="account" ref="ElFormRef">
      <el-form-item label="账号" size="large" label-width="53px" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" size="large" label-width="53px" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import useLoginStore from '@/store/Login'
import type { FormRules, ElForm } from 'element-plus'
import { LocalCache } from '@/utils/Cache'

const ElFormRef = ref<InstanceType<typeof ElForm>>()
const account = reactive({
  name: LocalCache.get('name') ?? '',
  password: LocalCache.get('password') ?? ''
})

const rules: FormRules = {
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { pattern: /^[a-z0-9]{6,18}$/, message: 'Length should be 6 to 18', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, max: 16, message: 'Length should be 6 to 16', trigger: 'blur' }
  ]
}

const store = useLoginStore()
function openMain(isRemember: boolean) {
  ElFormRef.value?.validate((valid) => {
    if (valid) {
      store.loginAccountAction(account).then((res) => {
        if (!res) ElMessage.error('Oops, 账号密码错误!')
        else {
          if (isRemember) {
            LocalCache.set('name', account.name)
            LocalCache.set('password', account.password)
            LocalCache.set('isRemember', true)
          } else {
            LocalCache.remove('name')
            LocalCache.remove('password')
            LocalCache.remove('isRemember')
          }
        }
      })
    } else {
      ElMessage.error('Oops, this is a error message.')
    }
  })
}

defineExpose({
  openMain
})
</script>

<style lang="less" scoped>
.form1 {
  width: 100%;
}
</style>
