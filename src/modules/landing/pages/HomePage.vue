<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">
      Bienvenido a nuestro sitio web
    </h1>
    <p class="mx-auto max-w-[600px] text-gray-500 md:text-xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <p>Counter: {{ counter }}</p>
    <button @click="counter++" class="button">+1</button>
  </div>
</template>

<script src="./HomePage.ts" lang="ts"></script>

<style lang="css" scoped>
.button {
  @apply rounded-md py-2 px-5 bg-green-700 text-white;
}
</style>
