<template>
  <el-container
    class="home-contanier"
    style="height: 100vh; border: 1px solid #eee"
  >
    <el-aside :width="!collapse ? '200px' : '60px'" style="background-color: rgb(238, 241, 246)">
      <el-scrollbar>
        <el-menu class="home-contanier-menu" :collapse="collapse" router default-active="/home/user">
          <el-sub-menu index="1">
            <template #title>Group 1</template>
            <el-menu-item-group>
              <el-menu-item index="/home/user">user</el-menu-item>
              <el-menu-item index="/home">Option 2</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header>
        <div class="home-contanier-collapse">
          <el-button @click="clickCollapse" :icon="collapse ? Expand : Fold"></el-button>
        </div>
        我是右侧头部
      </el-header>

      <el-main>
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
      <el-footer>
        我是底部
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { useHomeContainerStore } from './homeContainerStore'
import {
  Expand,
  Fold
} from '@element-plus/icons-vue'
import { storeToRefs } from 'pinia'
const homeStore = useHomeContainerStore()
const { collapse } = storeToRefs(homeStore)
const clickCollapse = () => {
  homeStore.changeState()
}
</script>

<style scoped>
.home-contanier-menu {
  min-height: 400px;
}
</style>
