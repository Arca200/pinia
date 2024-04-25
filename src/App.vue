<template>
  <div id="app" @click="store.increment(2)">{{store.double }} {{ store.count }}</div>
</template>
<script setup>
import { conuterStore } from './pinia/store.js'

const store = conuterStore()

</script>

<style scoped lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
}
</style>