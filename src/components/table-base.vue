<template>
  <el-table
    :data="data"
    style="width: 100%">
    <template v-for="item in data" :key="item.label">
      <el-table-column
        :prop="item.prop"
        :label="item.label"
        :width="item.width">
        <template #default="scope">
          <slot :name="item.slotName" :row="scope.row">
            {{ scope.row[item.prop] }}
          </slot>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { TABLE_CONFIG } from 'types/FROM_CONFIG'
const props = defineProps<{
  tableData: TABLE_CONFIG[]
}>()
const data = reactive([...props.tableData])
</script>

<style scoped>

</style>
