<script setup>
import { ref } from 'vue'
import Project from './Project.vue'

const projects=ref([
  {
    "name": "Ivy",
    "description": ["Data driven and highly customizable game engine written in Rust"],
    "image": "img/ivy.png",
    "links": [
      [ "Github", "https://github.com/ten3roberts/ivy" ]
    ]
  },
  {
    "name": "Violet",
    "description": [
      "Retained mode GUI with focus on reactivity and composability for game embedding.",
    ],
    "image": "img/violet.png",
    "links": [
      ["Github", "https://github.com/ten3roberts/violet"],
      ["Online Demo", "https://ten3roberts.github.io/violet/demo"]
    ]
  },
  {
    "name": "Flax",
    "description": ["Mulithreaded Entity Component System with change detection, extensive query support, and much more."],
    "links": [
      ["Github", "https://github.com/ten3roberts/ivy"],
      ["Asteroids Demo", "https://ten3roberts.github.io/flax/asteroids"]
    ]
  },
  {
    "name": "Constructive",
    "description": ["Clip brush based navmesh and pathfinding library"],
    "image": "img/constructive.png",
    "links": [
      ["Github", "https://github.com/ten3roberts/constructive"]
    ]
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
      :links="project.links || {}"
    />
  </div>
</template>

<style scoped>
.project-view {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  flex-direction: column;
}
</style>
