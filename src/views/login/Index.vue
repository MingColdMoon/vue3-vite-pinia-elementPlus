<template>
  <div class="login-page">
    <form-container :formConfig="formConfig">
      <template #footer>
        <el-button class="login-btn" type="primary" @click="router.push('/home/user')">登录</el-button>
      </template>
    </form-container>
  </div>
</template>

<script setup lang="ts">
import formContainer from '@/container/form-container/Index.vue'
import formConfig from './form-container-config'
import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<style lang="less" scoped>
.login-page {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid skyblue;
  padding: 20px;
}
.login-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 0
}
</style>
