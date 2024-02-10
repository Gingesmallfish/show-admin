<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  username: "",
  password: ""
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<template>
  <el-row class="login-container">
    <el-col :lg="16" :md="12" class="left">
      <div>
        <div>欢迎光临</div>
        <div class="">此站点 《vue3 + vite实战商城项目》视频课程的演示地址，点击立即学习</div>
      </div>
    </el-col>
    <el-col :lg="8" :md="12" class="right">
      <h2 class="title">欢迎回来</h2>
      <div>
        <span class="line"></span>
        <span>账号密码登录</span>
        <span class="line"></span>
      </div>
      <el-form :model="form" class="w-[250px]">
        <el-form-item>
          <el-input v-model="form.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" placeholder="请输入密码">
            <template #prefix>
              <el-icon><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round color="#626aef" class="w-[250px]" @click="onSubmit">登 录</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped>
.login-container{
  @apply min-h-screen bg-indigo-500;
}

.login-container .left, .login-container .right{
  @apply flex items-center justify-center;
}

.login-container .right {
  @apply bg-light-50 flex-col;
}

.left > div > div:first-child {
  @apply font-bold text-5xl text-light-50 mb-4;
}

.left > div > div:last-child {
  @apply text-gray-300 text-sm
}

.right .title {
  @apply font-bold text-3xl text-gray-800
}

.right > div {
  @apply flex items-center justify-center my-5 text-gray-300 space-x-2
}

.right .line {
  @apply h-[1px] w-16 bg-gray-200
}
</style>