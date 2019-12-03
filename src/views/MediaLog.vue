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
        const startDate = new Date(item.startDate)
        const endDate = new Date(item.endDate)

        const key = startDate.getUTCFullYear()
        const subKey = MONTHS[startDate.getUTCMonth() - 1]
        const otherKey = startDate.getUTCFullYear()
        const otherSubKey = MONTHS[startDate.getUTCMonth() - 1]

        if (!(key in data)) {
          data[key] = {}
        }

        if (!(otherKey in data)) {
          data[otherKey] = {}
        }

        if (!(subKey in data[key])) {
          data[key][subKey] = []
        }

        if (!(otherSubKey in data[key])) {
          data[otherKey][otherSubKey] = []
        }

        const humanDate =
          startDate.getTime() === endDate.getTime()
            ? 'on ' + startDate.toDateString()
            : !item.endDate
            ? 'from ' + startDate.toDateString() + ' (in progress)'
            : 'from ' + startDate.toDateString() + ' to ' + endDate.toDateString()

        const processedItem = {
          ...item,
          startDate,
          endDate,
          humanDate,
          year: key,
          month: subKey,
          typeName: TYPES[item.type],
        }

        if (!item.endDate) {
          data.inProgress.push(processedItem)
        } else {
          data[key][subKey].push(processedItem)
          if (key !== otherKey || subKey !== otherSubKey) {
            data[otherKey][otherSubKey].push(processedItem)
          }
        }

        if (!TYPES[item.type]) {
          console.warn('Unknown type: ' + item.type)
        }
      })

      return data
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
          <section
            v-for="item in mediaByYearsAndMonths.inProgress"
            :key="item.id"
            class="mt-4"
            style="display: list-item"
          >
            <h4 class="text-bold">
              <AppLink :to="item.link" external>{{ item.title }}</AppLink>
            </h4>

            <p class="text-xs text-gray-900">
              {{ item.typeName }} — {{ item.summary ? item.summary + ' — ' : '' }}
              {{ item.type === 'P' ? 'Listened' : item.type === 'A' || item.type === 'B' ? 'Read' : 'Watched' }}
              {{ item.humanDate }}.
            </p>

            <blockquote class="text-sm text-gray-900 markdown" v-html="item.comment" />
          </section>
        </div>
      </article>

      <article v-for="(months, year) in mediaByYearsAndMonths" :key="year" :aria-label="`My media log from ${year}`">
        <h2 :aria-label="`My media log from ${year}`" class="text-4xl text-bold mt-8">{{ year }}</h2>

        <section v-for="(media, month) in months" :key="month">
          <h3 :aria-label="`My media log from ${month} ${year}`" class="text-2xl text-bold mt-4">{{ month }}</h3>

          <div class="list-disc list-outside pl-4 mt-2">
            <section v-for="item in media" :key="item.id" class="mt-4" style="display: list-item">
              <h4 class="text-bold">
                <AppLink v-if="item.link" :to="item.link" external>{{ item.title }}</AppLink>
                <span v-else>{{ item.title }}</span>
              </h4>

              <p class="text-xs text-gray-900">
                {{ item.typeName }} — {{ item.summary ? item.summary + ' — ' : '' }}
                {{ item.type === 'P' ? 'Listened' : item.type === 'A' || item.type === 'B' ? 'Read' : 'Watched' }}
                {{ item.humanDate }}.
              </p>

              <blockquote class="text-sm text-gray-900 markdown" v-html="item.comment" />
            </section>
          </div>
        </section>
      </article>
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
  padding-left: 1rem;
}
.markdown ol {
  list-style: decimal;
}
</style>
