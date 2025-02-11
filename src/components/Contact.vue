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
            <a class="w-full block" href="mailto:crystianotv@gmail.com">
              <Button class="w-full" severity="secondary">
                Email
              </Button>
            </a>
            <a class="w-full block" href="https://github.com/krystiano13">
              <Button class="w-full" severity="secondary">
                <i class="devicon-github-plain"></i>
                <span>Github</span>
              </Button>
            </a>
            <a class="w-full block" href="https://www.linkedin.com/in/krystian-zieja-1b9902253/">
              <Button class="w-full" severity="secondary">
                <i class="devicon-linkedin-plain"></i>
                <span>Linkedin</span>
              </Button>
            </a>
          </div>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped>

</style>