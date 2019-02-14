importScripts('/portfolio/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/portfolio/_nuxt/2129980b690261af2685.js",
    "revision": "a828a002f304ead7abe9b6eacac711d9"
  },
  {
    "url": "/portfolio/_nuxt/224b8e6f6c55ec2dae98.js",
    "revision": "dda87ff9453e1e462cc5d551dd5c6166"
  },
  {
    "url": "/portfolio/_nuxt/2323ed337540a82d051d.js",
    "revision": "b4b7a2732028251998098f0f14b108ba"
  },
  {
    "url": "/portfolio/_nuxt/35154f445ec3ceccac93.js",
    "revision": "8d74fa3246b8d04375dbc5d8cc12ff6b"
  },
  {
    "url": "/portfolio/_nuxt/8119fded2474a056a70a.js",
    "revision": "69af6ed4a9c2aac91393f67d5bada97b"
  },
  {
    "url": "/portfolio/_nuxt/e44a2056865e83fa0628.js",
    "revision": "dce7dc6c5b8b8a29af3a10ed73957ac1"
  },
  {
    "url": "/portfolio/_nuxt/e70aad0803ca45ac1bae.js",
    "revision": "5b3d80318ebc00e01e382b9ee62f9352"
  },
  {
    "url": "/portfolio/_nuxt/e9a2ee3d23100319598b.js",
    "revision": "2be57582814d90c5c65d3fb524f1e3f0"
  },
  {
    "url": "/portfolio/_nuxt/ec0042302696188d82e8.js",
    "revision": "30b8e25c58c6dad9cdbd9c8f80541cfa"
  },
  {
    "url": "/portfolio/_nuxt/fdc09b1cbe98274d827d.js",
    "revision": "3b135fff396c1d9cfc72f9e2dc841bc6"
  }
], {
  "cacheId": "Portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/portfolio/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/portfolio/.*'), workbox.strategies.networkFirst({}), 'GET')
