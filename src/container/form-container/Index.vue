<template>
  <div class="form-container">
    <form-base :formData="formData">
      <template #footer>
         <slot name="footer"></slot>
      </template>
    </form-base>
  </div>
</template>

<script setup lang="ts">
import { reactive, PropType } from 'vue'
import { FROM_CONFIG, OBJECT_RESET } from 'types/FROM_CONFIG'
// const props = defineProps({
//   formConfig: Array as PropType<FROM_CONFIG[]>
// })
const props = defineProps<{
  formConfig: FROM_CONFIG[]
}>()
const formData = reactive([...props.formConfig])
// const formData:OBJECT_RESET  = {}
// for (const val of props.formConfig) {
//   formData[val.propName] = ''
// }
</script>

<style scoped>

</style>
