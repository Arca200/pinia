import { definePinia } from './definePinia.js'

const conuterStore = definePinia('counter', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    double () {
      return this.count * 2
    }
  },
  actions: {
    increment (value) {
      this.count += value
    }
  }
})
export {
  conuterStore,
}