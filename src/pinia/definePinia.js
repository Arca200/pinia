import { computed, getCurrentInstance, inject, reactive, toRefs } from 'vue'
import { PiniaSymbol } from './symbol.js'

export function definePinia (id, options) {

  function useStore () {
    const instance = getCurrentInstance()
    const pinia = instance && inject(PiniaSymbol)
    if (!pinia._s.has(id)) {
      createStore(id, options, pinia)
    }
    const store = pinia._s.get(id)
    return store
  }

  return useStore
}

function createStore (id, options, pinia) {
  const { state, actions, getters = {} } = options
  const store = reactive({})

  function setup () {
    pinia.state.value[id] = state ? state() : {}
    const localState = toRefs(pinia.state.value[id])
    return Object.assign(
      localState,
      actions,
      Object.keys(getters).reduce((items, key) => {
        items[key] = computed(() => {
          return getters[key].call(store)
        })
        return items
      }, {})
    )
  }

  const setupStore = setup()
  for (const key in setupStore) {
    const value = setupStore[key]
    if (typeof value === 'function') {
      setupStore[key] = value.bind(store)
    }
  }
  Object.assign(store, setupStore)
  pinia._s.set(id, store)
}