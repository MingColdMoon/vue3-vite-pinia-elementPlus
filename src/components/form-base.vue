<template>
  <div>
    <el-form ref="formRef" :model="form" label-width="120px">
      <template v-for="(item, index) in form" :key="index">
        <el-form-item :label="item.label" :label-width="item.labelWidth">
          <el-input :type="item.type" v-model="item.propName" :placeholder="item.placeHolder"></el-input>
        </el-form-item>
      </template>
    </el-form>
    <slot name="footer"></slot>
  </div>

</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { FROM_CONFIG } from 'types/FROM_CONFIG'
import { get } from 'http'
const propData = defineProps<{
  formData: FROM_CONFIG[]
}>()
const form = reactive([...propData.formData])
</script>

<style scoped>

</style>
