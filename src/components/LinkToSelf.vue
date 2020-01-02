<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<template>
  <component :is="tag" :id="id" class="relative self-link-container">
    <a
      :href="`#${id}`"
      class="absolute t-0 l-0 self-link -mx-4 text-gray-500"
      :aria-describedby="id"
      title="Link to this section"
      >#</a
    >
    <slot />
  </component>
</template>

<style>
.self-link-container > .self-link {
  opacity: 0;
  transition: opacity cubic-bezier(0.47, 0, 0.745, 0.715) 150ms;
}

.self-link-container:hover > .self-link {
  opacity: 1;
}
</style>
