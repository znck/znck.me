<script>
import Layout from '@/layouts/default.vue'
import log from './log'
import marked from 'marked'

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const TYPES = {
  A: 'Article',
  B: 'Book',
  M: 'Movie',
  TV: 'TV Show',
  P: 'Podcast',
  T: 'Talk',
  L: 'Lecture',
}

export default {
  components: { Layout },

  data: () => ({
    type: null,
  }),

  computed: {
    options() {
      return {
        type: Object.entries(TYPES).map(([value, label]) => ({ label, value })),
      }
    },
    typeName() {
      return TYPES[this.type]
    },
    media() {
      return log.map((item, id) => ({ id, ...item, comment: item.comment ? marked(item.comment) : '' }))
    },
    filteredMedia() {
      const media = this.media
      const type = this.type
      return type ? media.filter(item => item.type === type) : media
    },
    mediaByYearsAndMonths() {
      const data = {}

      Object.defineProperty(data, 'inProgress', {
        configurable: false,
        enumerable: false,
        value: [],
        writable: false,
      })

      this.filteredMedia.forEach(item => {
        if (item.startDate) {
          const startDate = new Date(item.startDate)
          const key = startDate.getFullYear()

          if (!(key in data)) {
            data[key] = {}
          }

          const subKey = MONTHS[startDate.getMonth()]

          if (!(subKey in data[key])) {
            data[key][subKey] = []
          }

          let humanDate = 'from ' + startDate.toDateString() + ' (in progress)'

          const processedItem = {
            ...item,
            startDate,
            humanDate,
            year: key,
            month: subKey,
            typeName: TYPES[item.type],
          }

          if (item.endDate) {
            const endDate = new Date(item.endDate)

            const otherKey = endDate.getFullYear()
            const otherSubKey = MONTHS[endDate.getMonth()]

            if (!(otherKey in data)) {
              data[otherKey] = {}
            }

            if (!(otherSubKey in data[otherKey])) {
              data[otherKey][otherSubKey] = []
            }

            processedItem.humanDate =
              startDate.getTime() === endDate.getTime()
                ? 'on ' + startDate.toDateString()
                : 'from ' + startDate.toDateString() + ' to ' + endDate.toDateString()

            data[key][subKey].push(processedItem)

            if (key !== otherKey || subKey !== otherSubKey) {
              data[otherKey][otherSubKey].push(processedItem)
            }
          } else {
            data.inProgress.push(processedItem)
          }
        }

        if (!TYPES[item.type]) {
          console.warn('Unknown type: ' + item.type)
        }
      })

      const entries = Object.entries(data).filter(([key]) => Number.isFinite(Number(key)))

      entries.sort(([a], [b]) => {
        return Number(b) - Number(a)
      })

      Object.defineProperty(entries, 'inProgress', {
        configurable: false,
        enumerable: false,
        value: data.inProgress,
        writable: false,
      })

      return entries
    },
  },
}
</script>

<template>
  <Layout title="My media log" class="mx-auto py-6 px-4 container">
    <h1 class="text-4xl mb-6">Media Log</h1>

    <p>A list of media that I have read, watched, listened, or experienced throughout the year.</p>

    <form aria-label="Filter media log" class="w-full mt-6" @submit.prevent>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="media-filter-type"
            >Media Type</label
          >
          <div class="relative">
            <select
              id="media-filter-type"
              aria-controls="media-log-container"
              v-model="type"
              class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option key="-empty-" :value="null" aria-label="(empty)"></option>
              <option v-for="option in options.type" :key="option.value" :value="option.value">{{
                option.label
              }}</option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
              aria-hidden="true"
            >
              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </form>

    <div id="media-log-container" role="list" aria-label="My media log">
      <div aria-live="assertive" aria-atomic="true" v-if="type" role="alert" class="-mt-8 text-sm">
        Showing only {{ typeName }} logs.
        <span v-if="filteredMedia.length"
          >{{ filteredMedia.length }} {{ filteredMedia.length === 1 ? 'record' : 'records' }} are found.</span
        >
        <span v-else>No records are found.</span>
      </div>

      <article v-if="mediaByYearsAndMonths.inProgress.length" key="in-progress" :aria-label="`In progress`">
        <h2 class="text-4xl text-bold mt-8">In progress</h2>

        <div class="list-disc list-outside pl-4 mt-2">
          <LinkToSelf
            tag="section"
            v-for="item in mediaByYearsAndMonths.inProgress"
            :id="item.type + '-' + item.title.replace(/[^a-z0-9]+/gi, '-') + '-in-progress'"
            :key="item.id"
            class="mt-4"
            style="display: list-item"
          >
            <h4 class="text-bold">
              <AppLink :to="item.link" external>{{ item.title }}</AppLink>
            </h4>

            <p class="text-xs text-gray-900 font-semibold">
              {{ item.typeName }} — {{ item.summary ? item.summary + ' — ' : '' }}
              {{ item.type === 'P' ? 'Listened' : item.type === 'A' || item.type === 'B' ? 'Read' : 'Watched' }}
              {{ item.humanDate }}.
            </p>

            <blockquote class="text-sm text-gray-900 markdown mt-2" v-html="item.comment" />
          </LinkToSelf>
        </div>
      </article>

      <LinkToSelf
        tag="article"
        v-for="[year, months] in mediaByYearsAndMonths"
        :key="year"
        :aria-label="`My media log from ${year}`"
        :id="'in-' + year"
      >
        <h2 :aria-label="`My media log from ${year}`" class="text-4xl text-bold mt-8">{{ year }}</h2>

        <LinkToSelf tag="section" v-for="(media, month) in months" :key="month" :id="'in-' + month + '-' + year">
          <h3 :aria-label="`My media log from ${month} ${year}`" class="text-2xl text-bold mt-4">{{ month }}</h3>

          <div class="list-disc list-outside pl-4 mt-2">
            <LinkToSelf
              tag="section"
              v-for="item in media"
              :key="item.id"
              class="mt-4"
              style="display: list-item"
              :id="item.type + '-' + item.title.replace(/[^a-z0-9]+/gi, '-') + '-' + year"
            >
              <h4 class="text-bold">
                <AppLink v-if="item.link" :to="item.link" external>{{ item.title }}</AppLink>
                <span v-else>{{ item.title }}</span>
              </h4>

              <p class="text-xs text-gray-900 font-semibold">
                {{ item.typeName }} — {{ item.summary ? item.summary + ' — ' : '' }}
                {{ item.type === 'P' ? 'Listened' : item.type === 'A' || item.type === 'B' ? 'Read' : 'Watched' }}
                {{ item.humanDate }}.
              </p>

              <section class="text-sm text-gray-900 markdown mt-2" v-html="item.comment" />
            </LinkToSelf>
          </div>
        </LinkToSelf>
      </LinkToSelf>
    </div>

    <aside class="text-sm text-gray-600 mt-10">
      <p>
        This page is inspired by
        <cite>
          <AppLink to="https://www.bencodezen.io/about/media-log/" external>
            <span class="text-gray-700">Ben Hong's Media Page</span>
          </AppLink>
        </cite>
      </p>
    </aside>
  </Layout>
</template>

<style>
.markdown ul {
  list-style: circle;
  @apply pl-4;
  @apply my-4;
}
.markdown ol {
  list-style: decimal;
  @apply my-4;
}

.markdown q,
.markdown blockquote {
  @apply text-gray-700;
  @apply text-lg;
  @apply my-4;
  @apply py-1;
  @apply pl-4;
  @apply border-l-2;
  @apply border-gray-700;
  @apply italic;
  font-family: Cochin, Georgia, Times, 'Times New Roman', serif;
}

.markdown p {
  @apply my-4;
}

.markdown h1,
.markdown h2,
.markdown h3 {
  @apply font-semibold;
  @apply mt-4;
}
</style>
