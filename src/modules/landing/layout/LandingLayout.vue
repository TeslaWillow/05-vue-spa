<template>
  <div class="flex flex-col h-screen">
    <!-- Header -->
    <header
      class="flex items-center h-14 px-4 border-b border-gray-300 sm:h-16 md:px-6 lg:px-8"
    >
      <div>
        <a class="flex items-center gap-2 font-semibold" href="#">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="40"
            height="40"
          />
        </a>
      </div>
      <nav class="flex flex-col ml-auto space-x-4 items-end h-10 sm:space-x-6">
        <div class="space-x-4">
          <RouterLink :to="{ name: 'home' }" exact-active-class="active-link">
            Home
          </RouterLink>
          <RouterLink to="/features" exact-active-class="active-link">
            Features
          </RouterLink>
          <RouterLink to="/pricing" exact-active-class="active-link">
            Pricing
          </RouterLink>
          <RouterLink to="/contact" exact-active-class="active-link">
            Contact
          </RouterLink>
        </div>

        <div class="space-x-4">
          <RouterLink to="/auth"> Login </RouterLink>
          <RouterLink to="/pokemon/1" active-class="active-link">
            Pokemons
          </RouterLink>
        </div>
      </nav>
    </header>
    <!-- Fin Header -->

    <!-- Main -->
    <main class="flex-1 flex items-center justify-center">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </main>
    <!-- Fin Main -->

    <!-- Footer -->
    <footer
      class="flex items-center h-14 px-4 border-t border-gray-300 sm:h-16 md:px-6 lg:px-8"
    >
      <p class="flex-1 text-sm text-gray-500 text-center">
        © {{ new Date().getFullYear() }} Acme Corporation. Derechos reservados
      </p>
    </footer>
    <!-- Fin Footer -->
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.active-link {
  @apply underline font-semibold text-blue-500;
}
</style>
