<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="210px">
        <main-aside />
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainAside from '@/components/main-aside/main-aside.vue'
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  width: 100%;
  .container {
    width: 100%;
    height: 100%;
    .el-header {
      background-color: aquamarine;
    }
    .el-main {
      background-color: cadetblue;
    }
  }
}
</style>
