<script setup>
  import Button from "primevue/button";
  import { skillsData } from "@/data/skillsData.js";
</script>

<template>
  <div class="w-full h-auto pb-16 flex flex-col justify-center items-center">
    <h1 class="text-center text-5xl font-semibold mt-16 mb-16">Skills</h1>
    <div class="w-full flex max-w-xl gap-3 justify-center flex-wrap">
      <Button v-for="skill in skillsData" severity="secondary" class="w-24 min-h-28 flex flex-col justify-center items-center">
        <i :class="`devicon-${skill.toLowerCase()}-plain`"></i>
        <p>{{ skill }}</p>
      </Button>
    </div>
  </div>
</template>

<style scoped>
  i {
    font-size: 1.6rem;
    transform: translateY(.1rem);
  }
</style>