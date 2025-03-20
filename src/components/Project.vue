<script setup>
import { defineProps } from 'vue'
defineProps(['name','description','image','link'])

function getImageUrl(name) {
  // note that this does not include files in subdirectories
  return new URL(name,import.meta.url).href
}
</script>

<template>
  <div class="card">
    <div class="project-grid">
      <img :src="image" />
      <div class="flex">
        <h2>{{ name }}</h2>
        <p
          v-for="line in description"
          :key="line"
        >
          {{line}}
        </p>
        <div class="bottom-line">
          <a :href="link">Github</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-grid {
  display: grid;
  grid-template-columns: 240px auto;
  /* gap: 1rem; */
}

.flex {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
}

.bottom-line {
  margin-top: auto;
}

img {
  width: 100%;
  height: auto;
}
</style>
