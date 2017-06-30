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
    "url": "/_nuxt/0.nuxt.bundle.ff8128770a508151b8e0.js",
    "revision": "f0947286bf0c625e9657e14c5183b911"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.9147a936d52f45924e86.js",
    "revision": "e9ff7035922340f96d1aa7737f1fa0fd"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.31b8cd565ef5200a8386.js",
    "revision": "b4825deb4e055205f888121aa620ce23"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.47221f6a96a360025c37.js",
    "revision": "6b2ed533ae41d2a4cdfe7e287fac3592"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.e946f30d08c853050163.js",
    "revision": "5deacd3cca73c976692fab225e5e592b"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.88266fe2fecbbc5a53c8.js",
    "revision": "60e74ffe52b9aafc5d1bbd4aa2285976"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.ef82e97fdc29662a0681.js",
    "revision": "6d2cf457c4d67771080ea902839a61e5"
  },
  {
    "url": "/_nuxt/api/blog.json",
    "revision": "d4b71cc2820dd54084836dd97a3009e3"
  },
  {
    "url": "/_nuxt/api/blog/collections.json",
    "revision": "e0273ed43938fdd53682225568865c4c"
  },
  {
    "url": "/_nuxt/api/blog/collections/new-in-vue.json",
    "revision": "f21732e66dbe5f4b7d716e75b3272788"
  },
  {
    "url": "/_nuxt/api/blog/collections/vue.json",
    "revision": "cb391af38ed87e2925ce6b7bb72aee97"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-03-first-day-in-vue-js.json",
    "revision": "43cf89f75f5eefcf63bbceff568622ca"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-05-fiddle-with-vue-js.json",
    "revision": "d127737ebe8da0f95de3fb18bd418d0e"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-10-provide-inject-in-vue-2-2.json",
    "revision": "5a66ff920cc8d60a13927ef60c3fbac8"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-06-28-vue-loader-v13-vue-router-v2-7.json",
    "revision": "e62c42c137f6ddfbfba0c481b07ad01d"
  },
  {
    "url": "/_nuxt/api/blog/tags.json",
    "revision": "33004d917d3dd6e0bddddd2ef961ca1c"
  },
  {
    "url": "/_nuxt/api/blog/tags/experience.json",
    "revision": "5f334c82b855617a042b66fcf1109734"
  },
  {
    "url": "/_nuxt/api/blog/tags/javascript.json",
    "revision": "ed57d1ba42885517cd07e9892c841684"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue-loader.json",
    "revision": "e45531a8465e899ed8cd44626f8e9fb3"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue-router.json",
    "revision": "9c4e6e0212c5cdc34834313302eeb89d"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue.json",
    "revision": "b1ca436035ebe6658f362673e64fe3ce"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "308e3964dac3b75469587a4da860af32"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.969dd0c50cd1d68fc28c.js",
    "revision": "51546e607c2076274f9cf5649bc04a9c"
  },
  {
    "url": "/_nuxt/nuxt.bundle.c411b736389d4e5808ab.js",
    "revision": "4b9efc9f6352c365ad0c3e91cc2fd7d2"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "2b31bc47ed1d8645fa3e2d8ee3ef43c3"
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
