<template>
  <div>
    <table-container :tableConfig="tableConfig">
      <template #num>
        <el-button type="primary">123</el-button>
      </template>
    </table-container>
    {{ userData }}
    <el-button type="primary" @click="resetPinia">清除</el-button>
  </div>
</template>

<script setup lang="ts">
import tableContainer from '@/container/table-container/Index.vue'
import tableConfig from '../user/table-config'
import { useUserStore } from 'store/Index'
import { storeToRefs } from 'pinia';
const userData = useUserStore()
const { userName } = storeToRefs(userData)
const resetPinia = () => {
  userName.value = 'xxx'
  console.log('清除', userName.value)
}
console.log(userName.value)
</script>

<style scoped>

</style>
