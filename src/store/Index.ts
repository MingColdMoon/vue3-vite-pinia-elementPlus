import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userName: 'xtgy'
    }
  },
  actions: {
    changeUserName() {
      this.userName = 'xt'
    }
  }
})
