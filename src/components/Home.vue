<script setup>
import Projects from './Projects.vue'
</script>

<template>
  <div>
    <div tag="about">
      <p>
        Greetings, I'm Freja.
      </p>
      <p>
        I make games, game engines, and a plethora of other libaries around game development.
      </p>
      <p>
        Mostly, I prefer working on a lower level, wether that be hacking away on my game engine <a href="https://github.com/ten3roberts/ivy">Ivy</a> and writing a custom gpu driven renderer, or working
        on a smaller library to test an idea I had.
      </p>
    </div>
    <div tag="projects">
      <h2>Projects</h2>
      <a href="/projects">View All</a>
      <Projects />
    </div>
  </div>
</template>

<style scoped>
#projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

h2 {
  display: inline-block;
  margin-right: 0.5rem;
}
</style>
