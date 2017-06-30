<template>
  <div class="app-page">
    <nuxt/>
    <Navigator/>
  </div>
</template>

<script>
import Navigator from '~components/Navigator.vue'

export default {
  name: 'DefaultLayout',

  components: { Navigator }
}
</script>


<style lang="scss">
@import '../styles/variables';
@import '~bootstrap/scss/bootstrap';

@include media-breakpoint-down(md) {
  .navbar .container {
    padding-left: 0;
    padding-right: 0;
  }
}

.border-bottom {
  border-bottom: 1px solid $border-color;
}

img {
  max-width: 100%;
}

.emoji {
  display: inline-block;
  height: 1.4em;
}

.image-wide {
  max-width: 100vw;
  width: 140%;
  margin-left: -20%;
}

//
// Style: Code Blocks
//
pre {
    background: darken(white, 2%);
    padding: 1rem 1rem 1rem .75rem;
    code {
        counter-reset: line;
        span.line {
            &:before {
                counter-increment: line;
                content: counter(line);
                padding-right: 1rem;
                color: lighten(black, 80%);
                font-weight: lighter;
                user-select: none;
            }
        }
    }
}
</style>
