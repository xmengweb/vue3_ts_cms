import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    iscollapse: false
  }),
  actions: {
    changeCollapse() {
      this.iscollapse = !this.iscollapse
    }
  }
})

export default useMainStore
