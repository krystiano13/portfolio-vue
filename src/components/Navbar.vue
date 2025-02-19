<script setup>
  import { ref } from "vue";
  import Button from "primevue/button";

  const navOpen = ref(false);

  function switchNav() {
    navOpen.value = !navOpen.value
  }
</script>

<template>
  <nav class="w-full p-5 font-medium text-lg fixed z-10 backdrop-blur-lg  bg-gray-900/15">
   <section class="w-full hidden sm:flex justify-center items-center gap-4">
    <div class="w-full flex justify-between gap-4 max-w-4xl">
      <p>Krystian Zieja</p>
      <section class="flex items-center gap-4">
        <a href="#hero">
          Home
        </a>
        <a href="#work">
          Experience
        </a>
        <a href="#skills">
          Skills
        </a>
        <a href="#projects">
          Projects
        </a>
        <a href="#contact">
          Contact
        </a>
      </section>
     </div>
   </section>
   <section class="flex items-center justify-end sm:hidden">
      <Button @click="switchNav()" class="w-12 h-12">
        <i class="pi pi-bars"></i>
      </Button>
   </section>
   <section class="flex transition flex-col items-center gap-6 sm:hidden" :class="navOpen ? 'opacity-100' : 'opacity-0 h-0 pointer-events-none'">
     <a href="#home">
       Home
     </a>
     <a href="#work">
       Experience
     </a>
     <a href="#projects">
       Projects
     </a>
     <a href="#skills">
       Skills
     </a>
     <a href="#contact">
       Contact
     </a>
   </section>
  </nav>
</template>

<style scoped>
  nav {
    a::after {
      width: 100%;
      height: 2px;
      content: "";
      display: block;
      top: 0;
      left: 0;
      background: whitesmoke;
      transform: scaleX(0);
      transition: transform 250ms;
      will-change: transform;
    }

    a:hover::after {
      transform: scaleX(1);
    }
  }
</style>
