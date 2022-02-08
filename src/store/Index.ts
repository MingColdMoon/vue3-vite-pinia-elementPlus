import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userName: '111'
    }
  },
  actions: {
    changeUserName() {
      this.userName = '1222'
    }
  }
})
