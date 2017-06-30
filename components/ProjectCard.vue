<template>
  <div class="card my-2">
    <img :src="photo" class="card-img-top img-fluid">
    <div class="card-block">
      <h4 class="card-title">{{ name }}</h4>
      <p>{{ description }}</p>

      <a v-if="source" class="nav-link d-inline-block" target="_blank" ref="noopener" :href="source">Source</a>
      <a v-if="website" class="nav-link d-inline-block" target="_blank" ref="noopener" :href="website">Website</a>
      <a v-if="documentation" class="nav-link d-inline-block" target="_blank" ref="noopener" :href="documentation">Documentation</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',

  props: {
    name: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    source: {
      type: String
    },
    documentation: {
      type: String
    },
    website: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.img-fluid {
  max-width: 100%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
</style>
