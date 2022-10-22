import { defineStore } from 'pinia'

const useMainStore = defineStore('main', {
  state: () => ({
    counter: 1
  })
})
