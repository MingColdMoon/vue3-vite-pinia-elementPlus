import { defineStore } from 'pinia'
export const useHomeContainerStore = defineStore('useCollapse', {
  state: () => ({
    collapse: false
  }),
  actions: {
    changeState() {
      this.collapse = !this.collapse
    }
  }
})
