<template>
  <button
    class="rounded bg-blue-500 px-4 py-2 text-white font-bold"
    @click="increment"
  >
    {{ proxy }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const proxy = ref()

const increment = () => {
  proxy.value++
}
</script>
