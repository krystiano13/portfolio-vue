<script setup>
import Card from "primevue/card";
import Badge from "primevue/badge";
import Button from "primevue/button";
</script>

<template>
  <div class="w-full h-auto pb-16 flex flex-col justify-center items-center">
    <h1 data-aos="fade-up" class="text-center text-5xl font-semibold mt-16 mb-16">
      Selected Projects
    </h1>
    <section
        class="w-[90vw] sm:w-[80%] flex justify-center gap-6 flex-wrap"
    >
      <Card class="w-full lg:w-[25rem]">
        <template #title>
          <h2 class="text-3xl">Instagram Clone</h2>
        </template>
        <template #content>
          <p class="text-xl mb-4 h-[9rem] lg:h-[11rem]">
            Simple Instagram clone. For the frontend part, I've used React with TailwindCSS and Typescript, and for backend - Ruby on Rails. Project also contains tests for the backend written in Minitest.
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
          >
            View More
          </Button>
        </template>
      </Card>
      <Card class="w-full lg:w-[25rem]">
        <template #title>
          <h2 class="text-3xl">FlashCard App</h2>
        </template>
        <template #content>
          <p class="text-xl mb-4 h-[9rem] lg:h-[11rem]">
            Mobile app created with Capacitor.js - framework that allows to create mobile apps with frontend technologies (I used React, Typescript and TailwindCSS). I am currently in process of publishing it to Google Play.
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
          >
            View More
          </Button>
        </template>
      </Card>
      <Card class="w-full lg:w-[25rem]">
        <template #title>
          <h2 class="text-3xl">Hospital doors</h2>
        </template>
        <template #content>
          <p class="text-xl mb-4 h-[9rem] lg:h-[11rem]">
            Hospital doors is simple survival horror game made in Gdevelop with help of Magica Voxel.
            Your objective is to find 7 keys and escape from the location, but you need to be aware of monsters roaming around the map.
          </p>
          <Badge class="mr-3 mb-3" severity="info">Javascript</Badge>
          <Badge class="mr-3" severity="danger">GDevelop Game Engine</Badge>
          <Badge class="mr-3" severity="contrast">Magica Voxel</Badge>
          <Badge class="mr-3" severity="warn">HTML5</Badge>
          <br />
          <Button
              class="mt-6 w-full"
              severity="secondary"
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