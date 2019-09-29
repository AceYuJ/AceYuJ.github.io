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
    "revision": "ef2a7b8da82025112f0b9dfee97f7aff"
  },
  {
    "url": "assets/css/0.styles.469b9ac5.css",
    "revision": "8e933e160cf5fb103ea208ccfc35f87b"
  },
  {
    "url": "assets/img/bg.91837123.jpg",
    "revision": "91837123152d12bfd0fb471d2c7142ab"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.98425cef.js",
    "revision": "8eec36709bdd285cd8bb89fde997af18"
  },
  {
    "url": "assets/js/10.272b87b0.js",
    "revision": "9c3556e19840b80e60d8785e6e91b28c"
  },
  {
    "url": "assets/js/11.34dbd37d.js",
    "revision": "1ea26671dfc417564fdbcf9e032ac167"
  },
  {
    "url": "assets/js/12.2ab91b1d.js",
    "revision": "041a59906f180a633f53eb3ac9207663"
  },
  {
    "url": "assets/js/13.6b7bfcd7.js",
    "revision": "d65f5df12fcfe5b1c530ed82aff43bf9"
  },
  {
    "url": "assets/js/4.69295fda.js",
    "revision": "37843ffd460888fda20911b426243233"
  },
  {
    "url": "assets/js/5.85005cc1.js",
    "revision": "3c43102016b64eaed5de6590b691fdf7"
  },
  {
    "url": "assets/js/6.6540a758.js",
    "revision": "916269842e189ea867525e426a6920c9"
  },
  {
    "url": "assets/js/7.ac99a178.js",
    "revision": "16f97d264308f0d4adccef802b752115"
  },
  {
    "url": "assets/js/8.6f7b545e.js",
    "revision": "98ad466852980449ffcbc0733048aec8"
  },
  {
    "url": "assets/js/9.b30bdffc.js",
    "revision": "8487e62625f39c7a75bd2cdd57a191a5"
  },
  {
    "url": "assets/js/app.2a3908ad.js",
    "revision": "c052787913a6294c2c8e95dbcc4a0a39"
  },
  {
    "url": "assets/js/vendors~flowchart.37ecdbe3.js",
    "revision": "8976189826863e3101563e0314cf2d04"
  },
  {
    "url": "background.jpg",
    "revision": "d8e765620040218e84e07cef8a8cb766"
  },
  {
    "url": "bg.jpg",
    "revision": "91837123152d12bfd0fb471d2c7142ab"
  },
  {
    "url": "category/index.html",
    "revision": "369ae684634d9719ec2f667a99e5bd5a"
  },
  {
    "url": "head.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "89efddd25bee8d6c8509d38f15c61d90"
  },
  {
    "url": "index.html",
    "revision": "c90bbf7ade202d1f424ac641429d6035"
  },
  {
    "url": "tag/index.html",
    "revision": "225eeaa6e0ad3f448e4756bf1d51545b"
  },
  {
    "url": "tag/Javascript.html",
    "revision": "ee1f42a2ddb6ccdabd5033c6fbee8661"
  },
  {
    "url": "tag/Markdown.html",
    "revision": "c4680f36fb7399eeba25cb8316b30a38"
  },
  {
    "url": "timeLine/index.html",
    "revision": "9916cda56922cc0c675d1ddb742a428f"
  },
  {
    "url": "views/category1/2019/Javascript函数作用域.html",
    "revision": "2d2caa57c2421abfd9c58f78da0c40e0"
  },
  {
    "url": "views/category1/2019/Markdown语法.html",
    "revision": "144cbf552b324e06e575458a3553cdd7"
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
