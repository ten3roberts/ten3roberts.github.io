<script setup>
  import { defineProps } from 'vue'
const { links } = defineProps(['name','description','image','links'])

console.log("links", links)

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
          <ul>
            <template v-for="(link) in links" :key="link">
              <li>
                <a :href="link[1]">{{ link[0] }}</a>
              </li>
            </template>
          </ul>
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
  padding: 8px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: left;
  display: flex;
}

li:nth-child(n+2):before {
    content: "|";
    margin-right: 8px;
    color: var(--stone-700);
}

li {
  margin: 0;
  margin-right: 8px;
  padding: 0;
  display: inline-block;
}

.bottom-line {
  margin-top: auto;
}

img {
  width: 100%;
  height: auto;
}
</style>
