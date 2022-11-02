<template>
  <div class="form">
    <el-form :model="form" label-width="150px" size="large" ref="formRef">
      <el-row :gutter="40">
        <el-col :span="8">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="真实姓名" prop="realName">
            <el-input v-model="form.realName" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="手机号" prop="phoneNumber">
            <el-input v-model="form.phoneNumber" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="状态">
            <el-select v-model="form.region" placeholder="请选择状态">
              <el-option label="启用" :value="true" />
              <el-option label="禁用" :value="false" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="创建时间" prop="date">
            <el-date-picker
              class="date-picker"
              v-model="form.date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item class="btns">
        <el-button type="primary" @click="onSubmit">查询</el-button>
        <el-button @click="resetAll">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main'
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

const store = useMainStore()
const emit = defineEmits(['submitForm'])
const formRef = ref<InstanceType<typeof ElForm>>()

const form = reactive({
  username: '',
  realName: '',
  phoneNumber: '',
  state: true,
  date: '',
  region: ''
})
const onSubmit = () => {
  emit('submitForm', form)
}
const resetAll = () => {
  formRef.value?.resetFields()
  store.getUserList({})
}
</script>

<style lang="less" scoped>
.form {
  background-color: #fff;
  padding: 20px;
  padding-left: 0;
  .el-form-item {
    margin-top: 10px;
    padding-bottom: 5px;
  }
  .el-select {
    width: 100%;
  }
  .btns {
    float: right;
    margin-bottom: 0;
    margin-right: 30px;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
