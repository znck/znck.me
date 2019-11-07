<script>
import Layout from '@/layouts/default.vue'
import talks from './talks.yml'
import marked from 'marked'

export default {
  components: { Layout },
  computed: {
    talks() {
      return talks
    },
  },
  methods: {
    marked,
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
        class="rounded overflow-hidden shadow-lg mt-6 border border-solid border-gray-200 relative"
        :key="index"
        :aria-label="'Talk: ' + talk.title"
        :aria-describedby="`talk-${index}-desc`"
      >
        <div
          class="absolute top-0 left-0 px-2 py-1 bg-green-500 rounded-tl rounded-br uppercase text-xs z-10"
          v-if="new Date(talk.event.startDate).getTime() > Date.now()"
        >
          <AppLink :to="talk.event.website" external>
            <span class="text-white hover:underline">Get Tickets</span>
          </AppLink>
        </div>
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
            <AppLink :to="talk.event.website" external>
              <span class="text-gray-500 focus:text-gray-700 hover:text-gray-700">{{ talk.event.name }}</span>
            </AppLink>
            — {{ talk.event.location }} —
            <time :datetime="talk.event.startDate">{{ new Date(talk.event.startDate).toDateString() }}</time>
            <span v-if="talk.slides">
              —
              <AppLink :to="talk.slides" external>
                <span class="text-gray-500 focus:text-gray-700 hover:text-gray-700">Slides</span>
              </AppLink>
            </span>
          </p>
          <section
            class="text-gray-700 text-base description"
            :id="`talk-${index}-desc`"
            v-html="marked(talk.description)"
          />
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

<style>
.tag::before {
  display: inline;
  content: '#';
}

.description ul {
  @apply list-disc list-outside pl-4 my-4;
}

.description p {
  @apply my-4;
}
</style>
