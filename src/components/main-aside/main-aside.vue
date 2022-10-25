<template>
  <div class="aside">
    <el-row class="tac">
      <el-col>
        <div class="aside-header">
          <img src="@/assets/png/logo.svg" alt="" class="img" />
          <h5 class="mb-2">后台管理系统</h5>
        </div>
        <el-menu
          :default-active="String(store.userMenus[0].children[0].id)"
          class="el-menu-vertical-demo"
          background-color="#001529"
          text-color="#b7bdc3"
          active-text-color="#fff"
        >
          <template v-for="item in store.userMenus" :key="item.id">
            <el-sub-menu :index="String(item.id)">
              <template #title>
                <span>{{ item.name }}</span>
              </template>
              <template v-for="item2 in item.children" :key="item2.id">
                <el-menu-item :index="String(item2.id)">{{ item2.name }}</el-menu-item>
              </template>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/Login'

const store = useLoginStore()
</script>

<style lang="less" scoped>
.aside {
  width: 100%;
  height: 100%;
  .tac {
    width: 100%;
    height: 100%;
    background-color: #0c2135;
    .aside-header {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      .img {
        width: 30px;
        margin-right: 15px;
      }
      h5 {
        color: aliceblue;
        font-size: 18px;
        margin: 0;
      }
    }
    .el-menu {
      border: none;
      user-select: none;

      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135;
      }
      .el-menu-item:hover {
        color: #fff;
      }
      .el-menu-item.is-active {
        background-color: #0a60bd;
      }
    }
  }
}
</style>
