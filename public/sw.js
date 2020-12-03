if (!self.define) {
  const e = (e) => {
      'require' !== e && (e += '.js')
      let s = Promise.resolve()
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ('document' in self) {
              const a = document.createElement('script')
              ;(a.src = e), document.head.appendChild(a), (a.onload = s)
            } else importScripts(e), s()
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`)
          return a[e]
        })
      )
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e))
    },
    a = { require: Promise.resolve(s) }
  self.define = (s, n, r) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {}
        const t = { uri: location.origin + s.slice(1) }
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case 'exports':
                return a
              case 'module':
                return t
              default:
                return e(s)
            }
          })
        ).then((e) => {
          const s = r(...e)
          return a.default || (a.default = s), a
        })
      }))
  }
}
define('./sw.js', ['./workbox-c2b5e142'], function (e) {
  'use strict'
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/M5TV7A4rg0qjO8FnEsZz0/_buildManifest.js',
          revision: 'af8a627aa5de80fb48a210ff748f7c29'
        },
        {
          url: '/_next/static/M5TV7A4rg0qjO8FnEsZz0/_ssgManifest.js',
          revision: 'abee47769bf307639ace4945f9cfd4ff'
        },
        {
          url:
            '/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.7923845c61cc0d544b15.js',
          revision: 'e29fda18ced84b43d72a09c6f614a0f2'
        },
        {
          url:
            '/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.df6946d03999f05972d7.js',
          revision: 'bbf7156680b284f07f528afa2018346e'
        },
        {
          url: '/_next/static/chunks/framework.cdbdac0a36200f52203c.js',
          revision: '56af6501d39d0d407e4004733ea3ef34'
        },
        {
          url: '/_next/static/chunks/main-63e2c8481f814e8b0e41.js',
          revision: '3fe0ad9ae7486c27a9f6fd37ca0d1804'
        },
        {
          url: '/_next/static/chunks/pages/_app-cd83c983ade5b2f70a13.js',
          revision: '4485f0f02dcaae0740ae2cdf0d5e35df'
        },
        {
          url: '/_next/static/chunks/pages/_error-a9a0bdc6cc53aa45c133.js',
          revision: '1ce7635ad73519a6bb086b2767b96914'
        },
        {
          url: '/_next/static/chunks/pages/index-d8891befc5f307e216af.js',
          revision: 'd853ea2d6a5c8ec19e7f0a42b66393b1'
        },
        {
          url: '/_next/static/chunks/polyfills-4950599f73bdfc797cc8.js',
          revision: '8b7a99a51188f6b47909ea2ad7ac38ab'
        },
        {
          url: '/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js',
          revision: '8c19f623e8389f11131a054a7e17ff95'
        },
        {
          url: '/assets/img/logo.png',
          revision: '25e63889dbfb6aef7aea8352ef60dbae'
        },
        {
          url: '/assets/img/programming.png',
          revision: '042e962e5f4fcd9530ec2a39a5e83248'
        },
        { url: '/manifest.json', revision: '1d6b68d7a54999c39fa16d857d9e6b61' },
        { url: '/vercel.svg', revision: '4b4f1876502eb6721764637fe5c41702' }
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /\/api\/.*$/i,
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    ),
    e.registerRoute(
      /.*/i,
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0
          })
        ]
      }),
      'GET'
    )
})
