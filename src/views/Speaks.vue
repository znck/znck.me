<script>
import Layout from '@/layouts/default.vue'
import talks from './talks.yml'
export default {
  components: { Layout },
  computed: {
    talks() {
      return talks
    },
  },
}
</script>

<template>
  <Layout title="My talks" class="mx-auto py-6 px-4 container">
    <h1 class="text-3xl text-bold">My talks</h1>
    <p class="mt-4 mb-8">
      I am learning the art of conferences talks and I have been fortunate to assume stage at some of my favorite
      conferences.
    </p>

    <template v-for="(talk, index) in talks">
      <article
        class="rounded overflow-hidden shadow-lg mt-6 border border-solid border-gray-200"
        :key="index"
        :aria-label="'Talk: ' + talk.title"
        :aria-describedby="`talk-${index}-desc`"
      >
        <div v-if="talk.youtube" class="relative w-full bg-gray-300" style="padding-bottom: 56%">
          <iframe
            class="absolute top-0 left-0 right-0 bottom-0"
            :id="`talk-${index}-video`"
            :src="`//www.youtube-nocookie.com/embed/${talk.youtube}`"
            width="100%"
            height="100%"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            :title="`Recording of the talk: ${talk.title}`"
            allowfullscreen
          />
        </div>
        <div v-if="talk.photo" class="relative w-full bg-gray-300 overflow-hidden" style="padding-bottom: 56%">
          <img
            class="absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full"
            :id="`talk-${index}-photto`"
            :src="talk.photo"
            :title="`Photo of the talk: ${talk.title}`"
          />
        </div>
        <div class="px-6 py-4">
          <h2 class="font-bold text-xl mb-2">{{ talk.title }}</h2>
          <p v-if="talk.event" class="text-sm text-gray-500 -mt-2 mb-4">
            <AppLink :to="talk.event.website" external
              ><span class="text-gray-500 focus:text-gray-700 hover:text-gray-700">{{ talk.event.name }}</span></AppLink
            >
            — {{ talk.event.location }} —
            <time :datetime="talk.event.startDate">{{ new Date(talk.event.startDate).toDateString() }}</time>
            <span v-if="talk.slides">
              —
              <AppLink :to="talk.slides" external
                ><span class="text-gray-500 focus:text-gray-700 hover:text-gray-700">Slides</span></AppLink
              ></span
            >
          </p>
          <p class="text-gray-700 text-base" :id="`talk-${index}-desc`" v-html="talk.description" />
        </div>

        <ul class="px-6 pb-4" aria-label="tags">
          <li
            v-for="tag in talk.tags"
            :key="tag"
            class="tag inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-4"
            v-text="tag"
          />
        </ul>
      </article>
    </template>
  </Layout>
</template>

<style scoped>
.tag::before {
  display: inline;
  content: '#';
}
</style>
