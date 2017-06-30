importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.87dd94f04531224abf01.js",
    "revision": "b29d7af0a3fd02905d01fbb661022046"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.08036df7410d0f57c0e3.js",
    "revision": "a6adbff692d0dfd9087845c04375e710"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.3a05d0c2491b26e3a045.js",
    "revision": "2f45e526ceda0be142f221ad73205251"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.fd4b622ab80211bc15a7.js",
    "revision": "b7f60d094213fd424f807e3587484326"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.996097945b75f4ec16a8.js",
    "revision": "2929a85de50023b050876be67dacaf25"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.3cdb494c48a8829c376b.js",
    "revision": "84014f385f7575da18a72496a780282f"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.78cef6ef50e1bdcbaf25.js",
    "revision": "f83cb2eca058208a10a1d151bfa6131b"
  },
  {
    "url": "/_nuxt/api/blog.json",
    "revision": "a48d53fa114b5690e81a678cd9ee0eec"
  },
  {
    "url": "/_nuxt/api/blog/collections.json",
    "revision": "f7d079cd296bde426b615511aecef0ab"
  },
  {
    "url": "/_nuxt/api/blog/collections/new-in-vue.json",
    "revision": "565d93ba07ce18b246e3aa0e6160a188"
  },
  {
    "url": "/_nuxt/api/blog/collections/vue.json",
    "revision": "364f7124c1d082931b588623b2e61ca6"
  },
  {
    "url": "/_nuxt/api/blog/posts/2016-06-24-learning-education-this-world-and-beyond.json",
    "revision": "1b3fef485a39b0df3efe0cf434cdd79f"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-03-first-day-in-vue-js.json",
    "revision": "3b22ed575d7f388d0dde3d45e791ec4e"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-05-fiddle-with-vuejs.json",
    "revision": "6d23b3629d875a69514b76fcf5761afd"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-10-provide-inject-in-vue-2-2.json",
    "revision": "231b882d5229fbb4eeee494dfe4cdc1a"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-06-28-vue-loader-v13-vue-router-v2-7.json",
    "revision": "7617621df7b5b03a619483cea940c842"
  },
  {
    "url": "/_nuxt/api/blog/tags.json",
    "revision": "0dbdfa699c684c23515ab9db5f9a7963"
  },
  {
    "url": "/_nuxt/api/blog/tags/experience.json",
    "revision": "2efad756522e436193611da631c4c278"
  },
  {
    "url": "/_nuxt/api/blog/tags/javascript.json",
    "revision": "24d32d4b5cc93e0f11ee4f3d5f8c7f58"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue-loader.json",
    "revision": "3054ca982fb397832925ad6a954e4828"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue-router.json",
    "revision": "4d65983502ed27c282d49b06456791ca"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue.json",
    "revision": "d031bbd4740838d219c93d899b00a87b"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "2e9317a3bbd812a92148dc854ae908ec"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.9c939b5394ac356fcf74.js",
    "revision": "576acce6c3d2779868fdded3e7cbccd8"
  },
  {
    "url": "/_nuxt/nuxt.bundle.d42225430d01656c02c3.js",
    "revision": "330c6ff2acc0bff36683ec0a62bccdf5"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "7a1159b5f029e0c0026e7402a176b13e"
  },
  {
    "url": "/_nuxt/vendor.bundle.5ce052020f311fb8148e.js",
    "revision": "080a77ff810157c222a29ecb867c4189"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "test_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
