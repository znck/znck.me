<template>
  <main id="main-content" role="main" :aria-label="title">
    <slot />
  </main>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Main Content',
    },
  },
}
</script>
