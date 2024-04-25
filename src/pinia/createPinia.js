import { PiniaSymbol } from './symbol.js'
import { ref } from 'vue'

export function createPinia () {
  const state = ref({})
  const pinia = {
    install (app) {
      app.provide(PiniaSymbol, pinia)
    },
    state,
    _s:new Map()
  }
  return pinia
}