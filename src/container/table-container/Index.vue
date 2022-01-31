<template>
  <div class="table-container">
    <table-base :tableData="tableData">
      <template v-for="item in tableData" :key="item.label" #[item.slotName]="scope">
        <template v-if="item.slotName">
          <slot :name="item.slotName" :scope="scope"></slot>
        </template>
      </template>
    </table-base>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { TABLE_CONFIG } from 'types/FROM_CONFIG'
const props = defineProps<{
  tableConfig: TABLE_CONFIG[]
}>()
const tableData = reactive([...props.tableConfig])
</script>

<style scoped>

</style>
