import { RouterLink } from 'vue-router';
<template>
  <section class="flex flex-col">
    <h1 class="text-3xl font-bold">
      Pokemon <small class="text-blue-500">#{{ id }}</small>
    </h1>

    <img
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`"
      alt="Pokemon"
      class="w-[200px] h-[200px] mt-5 mb-3"
      width="200"
      height="200"
    />

    <div>
      <RouterLink
        class="bg-blue-500 text-white p-2 block rounded mt-5 text-center hover:bg-blue-700"
        :to="{ name: 'pokemon', params: { id: +id + 1 } }"
        >Siguiente</RouterLink
      >
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  id: number;
}
defineProps<Props>();
</script>

<style scoped></style>
