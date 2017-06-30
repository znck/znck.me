<template>
  <div class="navigator" @mouseout="closeIt">
    <transition v-if="open">
      <ul class="menu list-group">
        <li v-for="item in items"
          :key="item"
          @click="open = false"
          class="menu-link list-group-item">
            <a v-if="/^https?:\/\//.test(item.link)" :href="item.link" target="_blank">{{ item.text }}</a>
            <router-link v-else :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </transition>

    <button class="toggler" type="button" @click.prevent="openIt">
      <img src="/menu.svg">
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Navigator',

  data: () => ({
    open: false
  }),

  computed: mapGetters({
    items: 'navigatorLinks'
  }),

  methods: {
    openIt () {
      this.open = !this.open
    },

    closeIt () {
      this.timer && clearTimeout(this.timer)
      if (this.open) {
        this.timer = setTimeout(() => {
          this.timer = null
          this.open = false
        }, 4000)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.navigator {
  position: fixed;

  bottom: 15px;
  left: 15px;

  z-index: 999999;
}

.toggler {
  border-radius: 100%;

  width: 2.5rem;
  height: 2.5rem;

  display: block;
  margin-top: -1.25rem;

  cursor: pointer;

  background: white;

  box-shadow: -4px 4px 10px -2px rgba(0, 0, 0, 0.15);

  outline: none;

  &:hover, &:focus {
    box-shadow: -6px 6px 12px 0 rgba(0, 0, 0, 0.20);
    outline: none;
  }

  img {
    height: 1rem;
  }
}

.menu {
  box-shadow: -4px 4px 10px -2px rgba(0, 0, 0, 0.15);
  margin: 0 1.25rem;

  z-index: -1;

  position: relative;
}

.menu-link {
  border: none;

  .nuxt-link-exact-active {
    color: #ccc;
  }
}

.menu, .toggler {
  border-top: 0.00125rem solid rgba(200, 200, 200, 0.1);
  border-right: 0.00125rem solid rgba(200, 200, 200, 0.1);
  border-left: none;
  border-bottom: none;
}

/** TRANSITIONS **/
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>

