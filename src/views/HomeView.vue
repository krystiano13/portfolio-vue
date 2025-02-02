<script setup>
  import Card from "primevue/card";
  import Button from "primevue/button";
</script>

<template>
  <Card class="m-4">
    <template #title>
      <h1 class="text-4xl">Hello World</h1>
    </template>
    <template #content>
      <Button class="!text-slate-50 !font-medium">
          Hello
      </Button>
    </template>
  </Card>
</template>
