<template>
  <div class="form">
    <el-form :model="form" label-width="150px" size="large" ref="formRef">
      <el-row :gutter="40">
        <template v-for="(item, index) in Config1.formItems" :key="index">
          <el-col :span="8">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'el-input'"><el-input v-model="form[item.prop]" /></template>
              <template v-else-if="item.type === 'el-date-picker'">
                <el-date-picker
                  class="date-picker"
                  v-model="form[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期"
                />
              </template>
            </el-form-item>
          </el-col>
        </template>
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
import { reactive, ref, toRefs } from 'vue'
const store = useMainStore()
interface IProp {
  Config1: any
}
const props = defineProps<IProp>()
const { Config1 } = toRefs(props)

const formTmp: any = {}
for (const item of Config1.value.formItems) {
  formTmp[item.prop] = ''
}
const form = reactive(formTmp)

const formRef = ref<InstanceType<typeof ElForm>>()
const emit = defineEmits(['submitForm'])
//注意接受信号Form
const onSubmit = () => {
  emit('submitForm', form)
}
const resetAll = () => {
  formRef.value?.resetFields()
  store.getList(Config1.value.kind, {})
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
