<template>
  <div class="dialog">
    <el-dialog v-model="isOpenModel" :title="title" width="30%" center>
      <el-form :model="form" label-width="80px" size="large" ref="formRef">
        <template v-for="item in allItems" :key="item">
          <el-form-item :label="item.label" :prop="item.prop">
            <template v-if="item.type === 'select'">
              <el-select v-model="form[item.prop]" class="m-2" placeholder="请选择" size="large" style="width: 100%">
                <el-option v-for="item2 in item.list" :key="item2.id" :label="item2.name" :value="item2.id" />
              </el-select>
            </template>
            <template v-else>
              <el-input v-model="form[item.prop]" />
            </template>
          </el-form-item>
        </template>
      </el-form>
      <slot name="TreeList"></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isOpenModel = false">取消</el-button>
          <el-button type="primary" @click="handle"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, toRefs } from 'vue'
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'
import type { ElForm } from 'element-plus'

const store = useMainStore()
const formRef = ref<InstanceType<typeof ElForm>>()

//获取prop解构赋值
interface IProp {
  DiaConfig: {
    kind: string
    title: string
    formItems: {
      leader: string
      name: string
      parentId: string
    }
    allItems: Array<{
      label: string
      prop: string
      type?: string
      list?: Array<{
        id: number
        name: string
        parentId: number
        createAt: string
        updateAt: string
        leader: string
      }>
    }>
    checkedKeys?: number[]
  }
  rowEdit: any
}
const props = defineProps<IProp>()
const { DiaConfig, rowEdit } = props
const { kind, title, formItems, allItems } = toRefs(reactive(DiaConfig))
//是否展示
const { isOpenModel, isEdit } = storeToRefs(store)

//生成保存表格数据的响应式对象form   生成的方式是来自于配置项中写的保存的有什么
const formTmp: any = {}
for (const key in formItems.value) {
  formTmp[key] = formItems.value[key]
}
const form = reactive(formTmp)

const id = ref(0)
if (isEdit.value) {
  for (const key in form) {
    form[key] = rowEdit[key]
  }

  id.value = props.rowEdit.id
}

const handle = () => {
  formRef.value?.validate((res) => {
    //数据正常的话为true
    if (!res) return
    if (isEdit.value) {
      form.menuList = props.DiaConfig.checkedKeys
      store.editOne(kind.value, id.value, form)
    } else {
      form.menuList = props.DiaConfig.checkedKeys
      store.createOne(kind.value, form)
      formRef.value?.resetFields()
    }
    isOpenModel.value = false
  })
}
</script>

<style lang="less" scoped></style>
