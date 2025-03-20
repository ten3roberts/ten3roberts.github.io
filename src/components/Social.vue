<script setup>

import { ref } from 'vue'

import IconAccessibility from '~icons/carbon/accessibility'
import Github from '~icons/mdi/github'
import Email from '~icons/mdi/email'
import LinkedIn from '~icons/mdi/linkedin'

const socials=[
  {
    "name": "Email",
    "tooltip": "freja.mroberts@gmail.com",
    "icon": Email,
    "url": "mailto:freja.mroberts@gmail.com",
  },
  {
    "name": "GitHub",
    "tooltip": "ten3roberts",
    "icon": Github,
    "url": "https://github.com/ten3roberts",
  },
  {
    "name": "LinkedIn",
    "tooltip": "freja-roberts",
    "icon": LinkedIn,
    "url": "https://www.linkedin.com/in/freja-roberts/",
  },
]
</script>

<template>
  <div>
    <ul>
      <li
        class="tooltip"
        v-for="social in socials"
        :key="social.name"
      >
        <component :is="social.icon" />
        <a
          class="muted"
          :href="social.url"
        >{{ social.name }}</a>

        <span class="tooltiptext">{{ social.tooltip }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 0.5rem;
}

li {
  margin: 0rem 0rem;
  display: inline-flex;
  align-items: center;
}

.icon {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.1rem;
}

.tooltip {
  position: relative;
  /* display: inline-block; */
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: #111111aa;
  color: #fff;
  text-align: center;
  padding: 4px 4px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -60px;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>
