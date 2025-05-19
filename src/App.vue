<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router'

import Social from './components/Social.vue'
</script>

<template>
  <header>
    <div class="header-row">
      <div>
        <h1>Freja Roberts </h1>
        <div class="nav-wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
          </nav>
        </div>
      </div>

      <div class="header-end">
        <Social />
      </div>
    </div>
  </header>

  <div class="content-view">
    <RouterView />
  </div>
</template>

<style scoped>
header {
  background-color: var(--color-surface-tertiary);
  color: white;
  padding: 1.5rem;
  display: block;
  width: 100%;
}

.header-row {
  display: flex;
}

.header-end {
  margin-left: auto;
  align-self: end;
}

.content-view {
  padding: 2rem;
  background-color: var(--color-surface-secondary);
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav {
  display: flex;
  gap: 1rem;
}

@media (max-width: 600px) {
  .header-row {
    flex-direction: column;
  }
  .header-end {
    margin-left: 0;
    align-self: unset;
  }
  nav a {
    margin-bottom: 0.5rem;
  }
}
</style>
