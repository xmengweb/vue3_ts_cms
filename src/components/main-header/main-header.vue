<template>
  <div class="header">
    <el-icon :size="27" @click="mainStore.changeCollapse()">
      <component :is="mainStore.iscollapse ? 'Expand' : 'Fold'" />
    </el-icon>
    <div class="container">
      <div class="left">
        <el-breadcrumb>
          <el-breadcrumb-item :to="{ path: '/main' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right">
        <div class="icons">
          <div class="icon-xiaoxi iconfont"></div>
          <div class="icon-liaotian iconfont"></div>
          <div class="icon-postcard iconfont"></div>
        </div>
        <div class="info">
          <el-dropdown>
            <span class="el-dropdown-link">
              <el-avatar
                :size="32"
                src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
                fit="fill"
              />
              <span>{{ store.userInfo.name }}</span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="outLogin">退出登录</el-dropdown-item>
                <el-dropdown-item divided>个人信息</el-dropdown-item>
                <el-dropdown-item>修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
import useLoginStore from '@/store/Login'
import useMainStore from '@/store/main'
import { LocalCache } from '@/utils/Cache'

const store = useLoginStore()
const mainStore = useMainStore()
const outLogin = function () {
  router.push('/login')
  LocalCache.remove('token')
  LocalCache.remove('userMenus')
  LocalCache.remove('userinfo')
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  height: 50px;
  background-color: #ffffff;
  align-items: center;
  .el-icon {
    margin-right: 10px;
    cursor: pointer;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    .right {
      display: flex;
      align-items: center;
      .icons {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 120px;
        margin-right: 15px;
        .iconfont {
          font-size: 21px;
          cursor: pointer;
          &:hover {
            background-color: #f2f2f2;
            transition: all 0.3s ease-in-out;
          }
        }
      }

      .info {
        cursor: pointer;
        .el-dropdown-link {
          display: flex;
          align-items: center;
          .el-avatar {
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
