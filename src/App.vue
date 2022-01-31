<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
const locale = zhCn
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
</style>
