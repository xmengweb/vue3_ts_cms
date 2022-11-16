<template>
  <div class="dialog">
    <el-dialog v-model="isOpenDia" :title="isEdit ? '编辑用户' : '新建用户'" width="30%" center>
      <el-form :model="form" label-width="80px" size="large" ref="formRef">
        <el-form-item label="用户名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="form.realname" />
        </el-form-item>
        <el-form-item label="手机号码" prop="cellphone">
          <el-input v-model="form.cellphone" />
        </el-form-item>
        <el-form-item label="密码" prop="password" required>
          <el-input v-model="form.password" show-password />
        </el-form-item>
        <el-form-item label="选择角色" prop="roleId">
          <el-select v-model="form.roleId" class="m-2" placeholder="请选择" size="large" style="width: 100%">
            <el-option v-for="item in roleList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择部门" prop="departmentId">
          <el-select v-model="form.departmentId" class="m-2" placeholder="请选择" size="large" style="width: 100%">
            <el-option v-for="item in departmentList" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="isOpenDia = false">取消</el-button>
          <el-button type="primary" @click="handle"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'
import type { ElForm } from 'element-plus'

const store = useMainStore()
const formRef = ref<InstanceType<typeof ElForm>>()
const props = defineProps(['rowEdit'])

store.getRoleList()
store.getDepartmentList()

const { roleList, departmentList, isEdit } = storeToRefs(store)

const form = reactive({
  name: '',
  realname: '',
  cellphone: '',
  password: '',
  roleId: '',
  departmentId: ''
})

const id = ref(0)
if (isEdit.value) {
  for (const key in form) {
    form[key] = props.rowEdit[key]
  }
  id.value = props.rowEdit.id
}

const { isOpenDia } = storeToRefs(store)
const handle = () => {
  formRef.value?.validate((res) => {
    //数据正常的话为true
    if (!res) return
    if (isEdit.value) {
      store.editUser(id.value, form)
    } else {
      store.createUser(form)
      formRef.value?.resetFields()
    }
    isOpenDia.value = false
  })
}
</script>

<style lang="less" scoped></style>
