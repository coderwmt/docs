/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a5d9bf94275284db96fb8ab4af71bac4"
  },
  {
    "url": "assets/css/0.styles.d5f2a856.css",
    "revision": "a4523f12f0fd93786c40003e794c05b4"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "684245ef5639b5af9fe95c055b3bbc67"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.30477232.js",
    "revision": "640096bc2c9c1fd4193ff52d9047a7af"
  },
  {
    "url": "assets/js/11.a84e8052.js",
    "revision": "891311ff72f37f442a63d936615665a5"
  },
  {
    "url": "assets/js/12.dde8410a.js",
    "revision": "c8e3285225829733f9f17aa777d7c995"
  },
  {
    "url": "assets/js/13.26ee39c6.js",
    "revision": "0d2c3f11aef4791ae5fb5d2095d6ad3c"
  },
  {
    "url": "assets/js/14.091cfae5.js",
    "revision": "4eebeeaaa164cb941a964e1743dead67"
  },
  {
    "url": "assets/js/15.a2df0a03.js",
    "revision": "dca181e92a8695b33379de6a733d5504"
  },
  {
    "url": "assets/js/16.e4ec31e9.js",
    "revision": "921498e36bf22bda5f16d19ba3e4e9bb"
  },
  {
    "url": "assets/js/17.946a4af7.js",
    "revision": "8c6ffc42d0556623d699728a8b0f9fdd"
  },
  {
    "url": "assets/js/18.48f498d2.js",
    "revision": "9e70322f87d989e08749b00dc0598942"
  },
  {
    "url": "assets/js/19.bd046740.js",
    "revision": "4697af6763c498a67b13309f51f04945"
  },
  {
    "url": "assets/js/2.eaa2d555.js",
    "revision": "4d4745629436b73330bc76bdfd485340"
  },
  {
    "url": "assets/js/20.63623542.js",
    "revision": "116067f3d3c2163b3d2e0b99a8c71c1d"
  },
  {
    "url": "assets/js/21.b993f569.js",
    "revision": "491db5ad5cb9362b8a6687e157ff888b"
  },
  {
    "url": "assets/js/22.facdc30d.js",
    "revision": "b81e96538dd90f11b25567f66479aae4"
  },
  {
    "url": "assets/js/23.2553ac9c.js",
    "revision": "c817e0df72f818b475e964945477b4ff"
  },
  {
    "url": "assets/js/24.04a9d80f.js",
    "revision": "d8a31ed7043b8ecba81416cd63ce2b52"
  },
  {
    "url": "assets/js/25.fddc27d8.js",
    "revision": "c53cf6a4b3f0ca196de48a644a3ff1c6"
  },
  {
    "url": "assets/js/26.ea3d9e2b.js",
    "revision": "c918c8f1edb1fcb8a22ed3eb63b42515"
  },
  {
    "url": "assets/js/3.7f9d2c7a.js",
    "revision": "9d0d60c9e830428e6d2973d4f0612bb1"
  },
  {
    "url": "assets/js/4.45831cfb.js",
    "revision": "2268d261a37c3171e3e3547f80f84591"
  },
  {
    "url": "assets/js/5.4f480501.js",
    "revision": "fb8da8b4023fd60d9c39d5b36938feee"
  },
  {
    "url": "assets/js/6.3631e42e.js",
    "revision": "2ea387a633cc841301d05500b58605c8"
  },
  {
    "url": "assets/js/7.299f8dec.js",
    "revision": "d27cc1f6e88284be569a37002fd90042"
  },
  {
    "url": "assets/js/8.cebb07f8.js",
    "revision": "44142021b7d93ec7d3564a968376fc50"
  },
  {
    "url": "assets/js/9.74f113f3.js",
    "revision": "4b93a3cf48a9afd5c3e3c522c70b0395"
  },
  {
    "url": "assets/js/app.99b831f8.js",
    "revision": "bbe178e1a40f481dd5b3715fed0c8a9b"
  },
  {
    "url": "CSS/css-a.html",
    "revision": "0ec8636baed248a2093d367af38ba680"
  },
  {
    "url": "CSS/css-b.html",
    "revision": "5a7032206023e33189be3d47fcd81c99"
  },
  {
    "url": "CSS/css-c.html",
    "revision": "a20718d6d27160b335a887b2ce62c811"
  },
  {
    "url": "CSS/index.html",
    "revision": "1adc9f6802c1261fe01949d1707c8505"
  },
  {
    "url": "HTML/html-a.html",
    "revision": "fdd426a5477bf049f90536faf9256017"
  },
  {
    "url": "HTML/html-b.html",
    "revision": "969f4c500e883e5fec1aa6e7e3d9c2db"
  },
  {
    "url": "HTML/html-c.html",
    "revision": "aa326101f2d5b1456f476dd2b85066c4"
  },
  {
    "url": "HTML/index.html",
    "revision": "bce920600fdace06019fd71cb8aa66d3"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "5e4415992e2a6dd707fddbefa7ac4ad4"
  },
  {
    "url": "Javascript/index.html",
    "revision": "c09656266524c8023c58020311769d21"
  },
  {
    "url": "Javascript/javascript-a.html",
    "revision": "2f12a4a6c338939ac0efe0b88b3dab3d"
  },
  {
    "url": "Javascript/javascript-b.html",
    "revision": "f71ad217038f833bad5e28fa901eb7ec"
  },
  {
    "url": "Javascript/javascript-c.html",
    "revision": "ff27300e38e6a180a31df7148c1afb27"
  },
  {
    "url": "Vue/index.html",
    "revision": "268e193ba7deff3f7a00f8ac745a016f"
  },
  {
    "url": "图片.jpg",
    "revision": "fc3bef8a93112fe6551522bac09a4b6d"
  },
  {
    "url": "案例/index.html",
    "revision": "8cfb9443d053d1d33b535da3b8c648cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
