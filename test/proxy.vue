<template>
  <button @click="increment">
    {{ proxy }}
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const proxy = ref(0)

const increment = () => {
  proxy.value++
}
</script>
