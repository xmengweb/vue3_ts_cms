<template>
  <div class="main">
    <el-container class="container">
      <el-aside :class="{ collapse: mainStore.iscollapse }">
        <main-aside />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <main-header />
        </el-header>
        <el-main>
          <main-main />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainAside from '@/components/main-aside/main-aside.vue'
import useMainStore from '@/store/main'

const mainStore = useMainStore()
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  .container {
    width: 100%;
    height: 100%;

    .el-aside {
      width: 210px;
      transition: width 0.3s ease-in-out;
      &.collapse {
        width: 65px;
      }
    }
    .el-main {
      background-color: #f0f2f5;
    }
  }
}
</style>
