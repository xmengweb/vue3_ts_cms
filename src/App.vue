<template>
  <div class="app">
    <h2>hello</h2>
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view></router-view>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped></style>
