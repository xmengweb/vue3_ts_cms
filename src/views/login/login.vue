<template>
  <div class="login">
    <div class="container">
      <h2>后台管理系统</h2>
      <el-tabs type="border-card" stretch v-model="activeName">
        <el-tab-pane label="账户登录" name="account">
          <template #label>
            <span class="label1"><i class="icon-zhanghu iconfont" id="iconfont1"></i>账户登录</span>
          </template>
          <LoginForm1 ref="form1" />
        </el-tab-pane>
        <el-tab-pane label="手机登录" name="phone">
          <template #label>
            <span class="label2"> <i class="icon-shouji iconfont" id="iconfont2"></i>手机登录</span>
          </template>
          <LoginForm2 />
        </el-tab-pane>
      </el-tabs>
      <div class="choose">
        <el-checkbox v-model="isRemember" label="记住密码" />
        <el-link type="primary">忘记密码</el-link>
      </div>
      <el-button type="primary" class="login-btn" size="large" @click="handleOpen"
        >立即登录</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { LocalCache } from '@/utils/Cache'
import { ref } from 'vue'
import LoginForm1 from './cnpm/login-form1.vue'
import LoginForm2 from './cnpm/login-form2.vue'

const isRemember = ref(LocalCache.get('isRemember') ?? false)
const activeName = ref('account')
const form1 = ref<InstanceType<typeof LoginForm1>>()

const handleOpen = function () {
  if (activeName.value === 'account') {
    form1.value?.openMain(isRemember.value)
  }
}
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/png/login-bg.svg');

  .container {
    width: 330px;
    margin-bottom: 100px;
    h2 {
      text-align: center;
      margin-bottom: 10px;
    }
    .choose {
      display: flex;
      justify-content: space-between;
    }
    .login-btn {
      width: 100% !important;
    }

    #iconfont2 {
      transform: translateY(1px);
    }
    #iconfont1,
    #iconfont2 {
      display: inline-block;
      margin-right: 5px;
    }
  }
}
</style>
