<script setup>
import { ref } from 'vue'
import Project from './Project.vue'

const projects=ref([
  {
    "name": "Ivy",
    "description": ["Data driven and highly customizable game engine written in Rust"],
    "image": "img/ivy.png",
    "link": "https://github.com/ten3roberts/ivy"
  },
  {
    "name": "Violet",
    "description": [
      "Retained mode GUI with focus on reactivity and composability for game embedding.",
    ],
    "image": "img/violet.png",
    "link": "https://github.com/ten3roberts/violet"
  },
  {
    "name": "Flax",
    "description": ["Low level entity component system with multithreading, change detection, extensive query support, and much more."],
    "link": "https://github.com/ten3roberts/flax"
  }
])
</script>

<template>
  <div class="project-view">
    <Project
      v-for="project in projects"
      :key="project.name"
      :image="project.image"
      :name="project.name"
      :description="project.description"
      :link="project.link"
    />
  </div>
</template>

<style scoped>
.project-view {
  display: flex;
  flex-direction: column;
}
</style>
