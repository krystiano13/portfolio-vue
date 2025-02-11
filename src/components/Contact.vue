<script setup>
  import Card from "primevue/card";
  import Button from "primevue/button";
</script>

<template>
  <div id="contact" class="w-full h-auto pb-16 flex flex-col justify-center items-center">
    <h1 data-aos="fade-up" class="text-center text-5xl font-semibold mt-16 mb-16">
      Contact
    </h1>
    <form class="w-[95vw] sm:w-[36rem]">
      <Card data-aos="fade-up">
        <template #content>
          <div class="w-full h-full flex flex-col gap-3">
            <Button severity="secondary">
              Email
            </Button>
            <Button severity="secondary">
              <i class="devicon-github-plain"></i>
              <span>Github</span>
            </Button>
            <Button severity="secondary">
              <i class="devicon-linkedin-plain"></i>
              <span>Linkedin</span>
            </Button>
          </div>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped>

</style>