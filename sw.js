importScripts('/nuxt-pwa/_nuxt/workbox.5c678697.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/nuxt-pwa/_nuxt/51a82b09182a30a6bf00.js",
    "revision": "ef36432b0cdaffd204758ac13481fd82"
  },
  {
    "url": "/nuxt-pwa/_nuxt/8a4fd88c2d13b46fe111.js",
    "revision": "48f00d6fb8213b08f4461de060bc42bb"
  },
  {
    "url": "/nuxt-pwa/_nuxt/9f31013ea41e392cba38.js",
    "revision": "4b5aee742f26d878bb4dde53d6f013fb"
  },
  {
    "url": "/nuxt-pwa/_nuxt/eba77c39dbb00cc5a365.js",
    "revision": "17666711069002429f64ff68b72addd5"
  }
], {
  "cacheId": "nuxt-pwa",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/nuxt-pwa/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/nuxt-pwa/.*'), workbox.strategies.networkFirst({}), 'GET')





