<script setup>
  import { reactive } from "vue";
  import { jobsData } from "@/data/jobsData.js";
  import Timeline from "primevue/timeline";
  import Card from "primevue/card";

  const data = reactive({
    jobs: jobsData
  });
</script>

<template>
  <div id="work" class="w-full h-auto pb-16 flex flex-col justify-center items-center">
    <h1 data-aos="fade-up" class="text-center text-4xl sm:text-5xl font-semibold mb-24">Work Experience</h1>
    <section class="w-full hidden sm:flex justify-center items-center">
      <Timeline class="max-w-4xl" align="alternate" :value="data.jobs">
        <template #content="props">
          <Card :data-aos="props.index === 0 ? 'fade-right' : 'fade-left'">
            <template #title>
              <h2 class="text-xl sm:text-2xl">{{ props.item.title }}</h2>
              <h3 class="text-lg sm:text-xl font-regular">{{ props.item.company }}</h3>
              <p class="text-sm sm:text-base font-light">{{ props.item.time }}</p>
            </template>
            <template #content>
              <p>{{ props.item.about }}</p>
            </template>
          </Card>
        </template>
      </Timeline>
    </section>
    <section class="sm:hidden flex flex-col items-center gap-6 max-w-[90vw]">
      <Card data-aos="fade-up" class="w-full" v-for="job in data.jobs">
        <template #title>
          <h2 class="text-xl sm:text-2xl">{{ job.title }}</h2>
          <h3 class="text-lg sm:text-xl font-regular">{{ job.company }}</h3>
          <p class="text-sm sm:text-base font-light">{{ job.time }}</p>
        </template>
        <template #content>
          <p>{{ job.about }}</p>
        </template>
      </Card>
    </section>
  </div>
</template>

<style scoped>

</style>