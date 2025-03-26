<script setup>
  import Button from "primevue/button";
  import { skillsData } from "@/data/skillsData.js";
</script>

<template>
  <div id="skills" class="w-full max-w-4xl h-auto pb-16 flex flex-col justify-center items-center">
    <h1 data-aos="fade-up" class="text-center text-4xl sm:text-5xl font-semibold mt-16 mb-16">Skills</h1>
    <div data-aos="fade-up" class="w-full flex gap-3 justify-center flex-wrap">
      <Button 
        v-for="skill in skillsData" 
        severity="secondary" 
        class="w-24 md:w-32 min-h-28 md:min-h-40 flex flex-col justify-center items-center glass backdrop-blur-lg"
      >
        <i class="md:scale-150" :class="`devicon-${skill.toLowerCase()}-plain`"></i>
        <p class="md:mt-6 text-base">
          <span class="block mt-0">{{ skill }}</span>
        </p>
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