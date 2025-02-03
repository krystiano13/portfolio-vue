<script setup>

</script>

<template>
  <nav class="w-full p-5 font-medium text-lg flex items-center gap-4 fixed z-10 backdrop-blur-lg  bg-gray-900/10">
    <a href="#home">
      Home
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
