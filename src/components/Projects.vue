<script setup>
import Card from "primevue/card";
import Badge from "primevue/badge";
import Button from "primevue/button";
import Dialog from 'primevue/dialog';

import { ref } from "vue";
import { projectsData } from "@/data/projectsData.js";

const dialogVisible = ref(false);
const selectedProject = ref(0);

function openDialog(projectId) {
  dialogVisible.value = true;
  selectedProject.value = projectId;
}
</script>

<template>
  <div id="projects" class="w-full h-auto pb-16 flex flex-col justify-center items-center">
    <Dialog class="w-2xl" v-model:visible="dialogVisible">
      <template #header>
        <h1 class="text-2xl font-medium mr-6">
          {{ projectsData[selectedProject].name }}
        </h1>
      </template>
      <p>{{ projectsData[selectedProject].description }}</p>
      <div class="flex flex-col gap-3 mt-3">
        <img
            class="w-full object-fit"
            v-for="image in projectsData[selectedProject].images"
            :src="image"
            alt="project screenshot"
        />
      </div>
      <a :href="projectsData[selectedProject].githubLink ? projectsData[selectedProject].githubLink : projectsData[selectedProject].itchLink">
        <Button class="mt-6" severity="secondary">
          <i v-if="projectsData[selectedProject].githubLink" class="devicon-github-plain"></i>
          <span v-if="projectsData[selectedProject].githubLink">Github Link</span>
          <span v-if="projectsData[selectedProject].itchLink">Itch.io Link</span>
        </Button>
      </a>
    </Dialog>
    <h1 data-aos="fade-up" class="text-center text-5xl font-semibold mt-16 mb-16">
      Selected Projects
    </h1>
    <section
        data-aos="fade-up"
        class="w-[90vw] sm:w-[80%] flex justify-center gap-6 flex-wrap"
    >
      <Card class="w-full lg:w-[25rem]">
        <template #title>
          <h2 class="text-3xl">{{ projectsData[0].name }}</h2>
        </template>
        <template #content>
          <p class="text-xl mb-4 h-[9rem] lg:h-[11rem]">
            {{ projectsData[0].description }}
          </p>
          <Badge class="mr-3 mb-3" severity="info">React</Badge>
          <Badge class="mr-3" severity="danger">Ruby on Rails</Badge>
          <Badge class="mr-3">Minitest</Badge>
          <Badge class="mr-3" severity="info">Typescript</Badge>
          <Badge class="mr-3" severity="contrast">TailwindCSS</Badge>
          <Badge class="mr-3" severity="warn">SQLite</Badge>
          <br />
          <Button
              class="mt-6 w-full"
              severity="secondary"
              @click="openDialog(0)"
          >
            View More
          </Button>
        </template>
      </Card>
      <Card class="w-full lg:w-[25rem]">
        <template #title>
          <h2 class="text-3xl">{{ projectsData[1].name }}</h2>
        </template>
        <template #content>
          <p class="text-xl mb-4 h-[9rem] lg:h-[11rem]">
            {{ projectsData[1].description }}
          </p>
          <Badge class="mr-3 mb-3" severity="info">React</Badge>
          <Badge class="mr-3" severity="danger">Capacitor</Badge>
          <Badge class="mr-3" severity="info">Typescript</Badge>
          <Badge class="mr-3" severity="contrast">TailwindCSS</Badge>
          <Badge class="mr-3" severity="warn">Google Admob</Badge>
          <br />
          <Button
              class="mt-6 w-full"
              severity="secondary"
              @click="openDialog(1)"
          >
            View More
          </Button>
        </template>
      </Card>
      <Card class="w-full lg:w-[25rem]">
        <template #title>
          <h2 class="text-3xl">{{ projectsData[2].name }}</h2>
        </template>
        <template #content>
          <p class="text-xl mb-4 h-[9rem] lg:h-[11rem]">
           {{ projectsData[2].description }}
          </p>
          <Badge class="mr-3 mb-3" severity="info">Javascript</Badge>
          <Badge class="mr-3" severity="danger">GDevelop Game Engine</Badge>
          <Badge class="mr-3" severity="contrast">Magica Voxel</Badge>
          <Badge class="mr-3" severity="warn">HTML5</Badge>
          <br />
          <Button
              class="mt-6 w-full"
              severity="secondary"
              @click="openDialog(2)"
          >
            View More
          </Button>
        </template>
      </Card>
    </section>
  </div>
</template>

<style scoped>

</style>