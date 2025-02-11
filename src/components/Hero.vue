<script setup>
  import { ref, onMounted } from "vue";
  import Button from "primevue/button";

  const underscore = ref(false);

  onMounted(() => {
    setInterval(() => {
        underscore.value = !underscore.value;
    }, 1000);
  });
</script>

<template>
  <div id="hero" class="w-full h-[100vh] relative mb-32">
    <div id="stars"></div>
    <div id="stars2"></div>
    <section class="absolute w-full h-full flex flex-col items-center justify-center gap-7 p-4 pt-8">
      <h1 class="text-6xl max-w-xl text-center font-semibold">
        Hi, I'm
        <span class="text-emerald-500">Krystian Zieja</span>
      </h1>
      <h2 class="text-2xl max-w-xl text-center font-thin">
        Fullstack and Indie Game Developer
        <span :class="underscore ? `opacity-100` : `opacity-0`">_</span>
      </h2>
      <div class="flex items-center justify-center gap-6">
        <Button class="flex align-center gap-3">
          <div>Read More</div>
          <i class="pi pi-search"></i>
        </Button>
        <Button class="flex align-center gap-3" severity="secondary">
          <div>Show CV</div>
          <i class="pi pi-user"></i>
        </Button>
      </div>
    </section>
  </div>
</template>