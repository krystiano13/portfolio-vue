<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="w-full sm:w-[90vw] pl-0 sm:pl-[5vw] flex flex-col items-center">
    <RouterView />
  </div>
</template>

<style>
  .glass {
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
    background-color: rgba(17, 25, 40, 0.75) !important;
    border-radius: 12px !important;
    border: 1px solid rgba(255, 255, 255, 0.125) !important;
  }
</style>
