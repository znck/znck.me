<script>
export default {
  props: {
    description: {
      type: String,
    },
    external: {
      type: Boolean,
    },
    to: {
      type: [String, Object],
      required: true,
    },
  },
  computed: {
    tag() {
      const to = this.to

      return typeof to === 'string' && /^(https?:\/\/|mailto:)/.test(to) ? 'a' : 'router-link'
    },
    props() {
      const tag = this.tag
      const to = this.to

      return {
        ...(tag === 'a' ? { href: to } : { to }),
        ...(this.external ? { target: '_blank', rel: 'noreferrer nofollow' } : {}),
      }
    },
    target() {
      const to = this.to

      return to.startsWith('mail') ? 'your mail application' : 'new tab'
    },
  },
}
</script>

<template>
  <component
    :is="tag"
    v-bind="props"
    :aria-label="description"
    :aria-describedby="`link${_uid}desc`"
    role="link"
    class="text-green-500 hover:text-green-800 cursor-pointer inline-flex items-center"
  >
    <slot />

    <span v-if="external" :id="'link' + _uid + 'desc'" class="sr-only sr-only-no-focus" hidden
      >(opens in {{ target }})</span
    >
  </component>
</template>
