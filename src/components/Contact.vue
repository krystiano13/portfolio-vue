<script setup>
  import Card from "primevue/card";
  import InputText from "primevue/inputtext";
  import Textarea from "primevue/textarea";
  import Button from "primevue/button";
</script>

<template>
  <div id="contact" class="w-full h-auto pb-16 flex flex-col justify-center items-center">
    <h1 data-aos="fade-up" class="text-center text-5xl font-semibold mt-16 mb-16">
      Contact
    </h1>
    <form class="w-[95vw] sm:w-[36rem]">
      <Card>
        <template #content>
          <InputText
              type="email"
              placeholder="email"
              name="email"
              class="w-full mb-5"
              required
          />
          <Textarea
              placeholder="Message"
              name="message"
              class="w-full mb-5"
              required
          />
          <Button class="w-full" type="submit">
            Send Message
          </Button>
        </template>
      </Card>
    </form>
  </div>
</template>

<style scoped>

</style>