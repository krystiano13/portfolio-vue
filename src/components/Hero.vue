<script setup>
  import Button from "primevue/button";
</script>

<template>
  <section class="w-full flex flex-col items-center gap-7 p-4 pt-8">
    <h1 class="text-6xl max-w-xl text-center font-semibold">Krystian Zieja</h1>
    <h2 class="text-2xl max-w-xl text-center font-thin">Fullstack and Indie Game Developer Fullstack and Indie Game Developer Fullstack and Indie Game Developer Fullstack and Indie Game Developer </h2>
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
</template>