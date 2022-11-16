<template>
  <div class="userList">
    <div class="header">
      <h3>{{ title }}</h3>
      <ElButton type="primary" @click="createDia">新增数据</ElButton>
    </div>
    <el-table :data="newList" border style="width: 100%" row-key="id">
      <template v-for="(item, index) in tableItems" :key="index">
        <template v-if="item.prop === 'imgUrl'">
          <el-table-column :label="item.label" :width="item?.width" align="center">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <el-skeleton :loading="isLoading" animated>
                  <template #template>
                    <el-skeleton-item variant="image" style="width: 50px; height: 50px" />
                  </template>
                  <template #default>
                    <el-image
                      style="height: 50px; width: 50px"
                      :src="newList[scope.$index].imgUrl"
                      fit="cover"
                      :preview-src-list="[newList[scope.$index].imgUrl]"
                      preview-teleported
                    />
                  </template>
                </el-skeleton>
              </div>
            </template>
          </el-table-column>
        </template>
        <template v-else>
          <el-table-column
            :type="item?.type"
            :width="item?.width"
            :prop="item?.prop"
            :label="item?.label"
            align="center"
            show-overflow-tooltip
          />
        </template>
      </template>
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
        :total="infoList?.length"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, reactive, ref, toRefs, watch } from 'vue'
import useMainStore from '@/store/main'
import { storeToRefs } from 'pinia'

const isLoading = ref(true)
interface IProp {
  Config: {
    kind: string
    title: string
    tableItems: Array<{
      type?: string
      width?: string
      label?: string
      prop?: string
    }>
  }
}
const store = useMainStore()
const { infoList, isEdit, isOpenModel } = storeToRefs(store)
const emit = defineEmits(['EditSignal', 'DelSignal'])
const props = defineProps<IProp>()
const { Config } = props
const { kind, title, tableItems } = toRefs(reactive(Config))
store.getList(kind.value, {})
setTimeout(() => {
  isLoading.value = false
}, 600)

const pageArray = ref([5, 10, 20, 30])
const currentPage = ref(1)
const pageSize = ref(5)
const newList = computed(() => {
  const left = (currentPage.value - 1) * pageSize.value
  const right = currentPage.value * pageSize.value
  if (infoList.value.slice) return infoList.value.slice(left, right)
})

//注意这两个信号
const handleEdit = (index: any, row: any) => {
  isEdit.value = true
  isOpenModel.value = true
  emit('EditSignal', row)
}
const handleDelete = (index: any, row: any) => {
  emit('DelSignal', row.id)
}
const createDia = () => {
  isEdit.value = false
  isOpenModel.value = kind.value === 'menu' ? false : true
}
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
    // :deep(.cell) {
    //   overflow: hidden;
    //   text-overflow: ellipsis;
    //   white-space: nowrap;
    //   word-break: break-all;
    // }
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
