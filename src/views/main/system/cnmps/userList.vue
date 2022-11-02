<template>
  <div class="userList">
    <div class="header">
      <h3>用户列表</h3>
      <ElButton type="primary">新增数据</ElButton>
    </div>
    <el-table :data="newUserList" border style="width: 100%">
      <el-table-column type="selection" width="50" align="center" />
      <el-table-column type="index" width="60" label="序号" align="center" />
      <el-table-column prop="name" label="用户名" width="150" align="center" />
      <el-table-column prop="realname" label="真实名" width="150" align="center" />
      <el-table-column prop="cellphone" label="手机号" width="200" align="center" />
      <el-table-column prop="enable" label="状态" width="130" align="center">
        <template #default="scope">
          <el-button :type="scope.row.enable ? 'success' : 'danger'" plain size="small">{{
            scope.row.enable ? '启用' : '禁用'
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column prop="createAt" label="创建时间" width="340" align="center" />
      <el-table-column prop="updateAt" label="更新时间" width="340" align="center" />
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="small" type="primary" text @click="handleEdit(scope.$index, scope.row)" icon="Edit"
            >Edit</el-button
          >
          <el-button size="small" type="danger" text @click="handleDelete(scope.$index, scope.row)" icon="Delete"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="pageArray"
        :small="true"
        layout="total, sizes, prev, pager, next, jumper"
        :total="userList.length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IuserList } from '@/type/IuserList'
import { computed, ref, toRefs } from 'vue'
import useMainStore from '@/store/main'

interface Prop {
  userList: IuserList
}
const props = defineProps<Prop>()
const { userList } = toRefs(props)
const store = useMainStore()

const handleEdit = (index: any, row: any) => {}
const handleDelete = (index: any, row: any) => {
  store.deleteUser(row.id)
}

const pageArray = ref([5, 10, 20, 30])
const currentPage = ref(1)
const pageSize = ref(5)
const newUserList = computed(() => {
  const left = (currentPage.value - 1) * pageSize.value
  const right = currentPage.value * pageSize.value
  return userList.value.slice(left, right)
})
</script>

<style lang="less" scoped>
.userList {
  margin-top: 10px;
  background-color: #fff;
  padding: 30px;
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h3 {
      align-items: flex-end;
    }
  }
  .el-table {
    :deep(.el-table__cell) {
      padding: 20px 0;
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
}
</style>
