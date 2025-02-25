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
    "url": "0.0.interview.html",
    "revision": "c4985b36ae38136f1812b7fde170b4c7"
  },
  {
    "url": "1.track.html",
    "revision": "21af24b1081716b101cba47c4aae1cae"
  },
  {
    "url": "10.utils.html",
    "revision": "2ba0ab2112207fc3e43a1db3a63a9821"
  },
  {
    "url": "11.lodash.html",
    "revision": "1d496b43383d43da3a2ecfec81ca9e73"
  },
  {
    "url": "12.vscode.html",
    "revision": "250a8b990390e930d246145e72cc3989"
  },
  {
    "url": "13.promise.html",
    "revision": "81a53d200eafb81a940baaf7dfe48c02"
  },
  {
    "url": "14.tamperMonkey.html",
    "revision": "ebd4e635b60008af1efc6df7b3ec54cd"
  },
  {
    "url": "15.git.html",
    "revision": "30d751d3b59d89a40c8d50969103a3f4"
  },
  {
    "url": "17.huawei.html",
    "revision": "040f49637fdb533e12a57a7d4b04d40b"
  },
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "18.publish_node_package.html",
    "revision": "ec8dba82f23495ecff8d50248dafccd2"
  },
  {
    "url": "19.notes.html",
    "revision": "ce6456981d1aab2bddd822b46d4d8432"
  },
  {
    "url": "2.1.array.html",
    "revision": "dcb4c5bd9566e9588c5b020961e64a69"
  },
  {
    "url": "2.2.this.html",
    "revision": "1aea57987027fbf9980180fa2062f07a"
  },
  {
    "url": "2.3.string.html",
    "revision": "a476fed79af61406449008a145e29985"
  },
  {
    "url": "2.4.regExp.html",
    "revision": "fb7f652d542fa77ed77da6716be2141e"
  },
  {
    "url": "2.js.html",
    "revision": "345092c5fd500d3eb27acfcf88c05407"
  },
  {
    "url": "20.Eslint_CommitLint.react.html",
    "revision": "9d09050a7fc3547996d58ec1657d90a5"
  },
  {
    "url": "21.vue3_ts_vite.html",
    "revision": "f3cef52ae7ecc4d0c398da113195ffe1"
  },
  {
    "url": "3.0.vue.html",
    "revision": "42350813d3ea104a1d1f6d2d6b2f97b4"
  },
  {
    "url": "3.1.vue3.html",
    "revision": "b7add55d601abeb5f8a20554a63256cf"
  },
  {
    "url": "4.1_React_Hooks.html",
    "revision": "c46bbf779e9a87551514e7280ffa8d64"
  },
  {
    "url": "4.react.html",
    "revision": "10df4c95bf1ef3efd62f51e668fe18f2"
  },
  {
    "url": "404.html",
    "revision": "1b0371f4b7218e6d2b8bf911cfaac900"
  },
  {
    "url": "5.webpack.html",
    "revision": "4a0922da9e25800ef5be328b5af76e33"
  },
  {
    "url": "6.css.html",
    "revision": "7f8435d044075ec9e81bd4debae5b0c8"
  },
  {
    "url": "7.1_array.html",
    "revision": "fcff65b8f6d204043a8beafa2f2d0d1b"
  },
  {
    "url": "7.2_Stack.html",
    "revision": "cb6dcfda8ee1745a8465136755110dab"
  },
  {
    "url": "7.3_Queue.html",
    "revision": "45a9a4b81297f3c0825cf8047b351d77"
  },
  {
    "url": "7.arithmetic.html",
    "revision": "9c633f74b7ffb90b837e786487a28626"
  },
  {
    "url": "8.browser.html",
    "revision": "5604bb54ec5b16c59c7caaba16078409"
  },
  {
    "url": "9.http.html",
    "revision": "f9e6f97d8cef52b2547d7bb35800a3ee"
  },
  {
    "url": "a.htm.html",
    "revision": "47afd30ef2f54b1ec20f627d47dcb357"
  },
  {
    "url": "assets/css/0.styles.a9377658.css",
    "revision": "882f59b313990313e0b54d2e2ccf2cd3"
  },
  {
    "url": "assets/img/async_defer.a91b55bb.jpg",
    "revision": "a91b55bb972595d902edad6c5d14424e"
  },
  {
    "url": "assets/img/commitizen.02545ebd.png",
    "revision": "02545ebde070dc6622225d47c81be12c"
  },
  {
    "url": "assets/img/commitLint.281a1c9b.png",
    "revision": "281a1c9b5f32825810f31eff2f617567"
  },
  {
    "url": "assets/img/husky_install.bf0b1d8e.png",
    "revision": "bf0b1d8e72c4ae7bcdae21c466e13219"
  },
  {
    "url": "assets/img/passPrams.f9d0b301.png",
    "revision": "f9d0b301344201e08ba3bb2dc922f503"
  },
  {
    "url": "assets/img/pre-commit-hooks.e2abf788.png",
    "revision": "e2abf788eabdee7b9e7d95a25ad812f7"
  },
  {
    "url": "assets/img/promise_flow.72ab73c3.png",
    "revision": "72ab73c3d3f1fe933fdb614c020316b2"
  },
  {
    "url": "assets/img/prototype.3ee04ff5.png",
    "revision": "3ee04ff512a68800c014b66de0f6b3f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vscode_profile_export.2731a2df.png",
    "revision": "2731a2df92fa90b274200568ba1866fc"
  },
  {
    "url": "assets/js/1.5455c3f4.js",
    "revision": "f13ef5f94e47ed960a184a772c9a4192"
  },
  {
    "url": "assets/js/11.b5971ed6.js",
    "revision": "c2caab4ae93e349d0079923b250edc01"
  },
  {
    "url": "assets/js/12.df494d0c.js",
    "revision": "1aeb07f5a6e5877fd624234df41ba880"
  },
  {
    "url": "assets/js/13.ed3696cc.js",
    "revision": "6539d5491e5f3a3bcbf67abb0c8b532f"
  },
  {
    "url": "assets/js/14.dfa4f5c8.js",
    "revision": "b089f040cba6a8ef739e32ca93418452"
  },
  {
    "url": "assets/js/15.f5749a7f.js",
    "revision": "8c2c110e46b095804f516f029b592ca9"
  },
  {
    "url": "assets/js/16.d88a2e4c.js",
    "revision": "979bf504881c2dc768088a5ff83e0ca1"
  },
  {
    "url": "assets/js/17.2239bfee.js",
    "revision": "de3f7b91819421959e8940016342ea72"
  },
  {
    "url": "assets/js/18.e92dd762.js",
    "revision": "56d742e5a7bfda558b1520167f46cfa3"
  },
  {
    "url": "assets/js/19.816c4012.js",
    "revision": "d1ffd3f40e19077f579f393c1279eb11"
  },
  {
    "url": "assets/js/2.2f49a7d3.js",
    "revision": "d6a2ab9b426662cf13a162324e26692e"
  },
  {
    "url": "assets/js/20.740c71f6.js",
    "revision": "0b6b66fe9163a0988cfc7c4b0c2b45fa"
  },
  {
    "url": "assets/js/21.c2fc3f8d.js",
    "revision": "bd67d0dd17aa86d08331f955023cedfa"
  },
  {
    "url": "assets/js/22.df72b290.js",
    "revision": "5c54fbc3959b8d625943c9c03fa64f87"
  },
  {
    "url": "assets/js/23.a936b857.js",
    "revision": "dcb93de9e4d2563b3b8b7fb84841fdf5"
  },
  {
    "url": "assets/js/24.f66c2a95.js",
    "revision": "2c5cd92cdd277fb90b3de9fcf26da1f1"
  },
  {
    "url": "assets/js/25.699b6f64.js",
    "revision": "01fff515974f0e256b11ebf53223a0d9"
  },
  {
    "url": "assets/js/26.320e3094.js",
    "revision": "f7ef0fd4591f630e0384f544c9612e49"
  },
  {
    "url": "assets/js/27.0e6519cf.js",
    "revision": "0cfb7c7231a5473d56eb0ad338c768c3"
  },
  {
    "url": "assets/js/28.e3b08585.js",
    "revision": "bb469ef2519eaa914f73e423c47789c8"
  },
  {
    "url": "assets/js/29.6d635087.js",
    "revision": "eaad6816a391ed0448b2440e0ec1bfe3"
  },
  {
    "url": "assets/js/3.940bfe8a.js",
    "revision": "f3eed509e76adc23692e3d457d3a87d2"
  },
  {
    "url": "assets/js/30.bd59f761.js",
    "revision": "2fd122055038da9b2f4bff2172116c01"
  },
  {
    "url": "assets/js/31.e35fffdf.js",
    "revision": "4c281715a1e7cbbd583bd059fb8bcd7d"
  },
  {
    "url": "assets/js/32.47317b9e.js",
    "revision": "8496f5ea2e8bddf0f49c4f7a101b8611"
  },
  {
    "url": "assets/js/33.97f30c89.js",
    "revision": "adc7aaaa08733428ad023229ae1fd5ee"
  },
  {
    "url": "assets/js/34.6de62182.js",
    "revision": "ee2a8e849a7021144a069f2a23e0e61b"
  },
  {
    "url": "assets/js/35.a99e9100.js",
    "revision": "dc94a27c1c7437a942886c7a1cca7b01"
  },
  {
    "url": "assets/js/36.0c35a72d.js",
    "revision": "8f5ca919f81f10592e57154447a45cf3"
  },
  {
    "url": "assets/js/37.ce8a164a.js",
    "revision": "e66407f262b4434c07a40717519c591c"
  },
  {
    "url": "assets/js/38.e59c3d82.js",
    "revision": "da86535cf4fd7527ac662556e3a5bcee"
  },
  {
    "url": "assets/js/39.bd5d7518.js",
    "revision": "4a45fea147a29801ce62870e7a498d25"
  },
  {
    "url": "assets/js/4.3947092f.js",
    "revision": "3d7a5e451b4c24e331ae9ae89ca29e71"
  },
  {
    "url": "assets/js/40.0bb27378.js",
    "revision": "4edaf8b04fceaa32041bcd7999fbd366"
  },
  {
    "url": "assets/js/41.4d4bf119.js",
    "revision": "026121537aa92d7fec97becd7ba661e8"
  },
  {
    "url": "assets/js/42.e9368aae.js",
    "revision": "50a20a2c4064fcd06f6f18f66d995e3b"
  },
  {
    "url": "assets/js/43.42591590.js",
    "revision": "eb30507c4d7f4c23f2c246ec238a1787"
  },
  {
    "url": "assets/js/44.7510934d.js",
    "revision": "958e113112f6dbf0c2f310dbab2d48e1"
  },
  {
    "url": "assets/js/45.d6462e99.js",
    "revision": "b55f669223bd889ef4d605ccd63dd838"
  },
  {
    "url": "assets/js/46.ae3bfc15.js",
    "revision": "ebee122203f4114dc098448430ded100"
  },
  {
    "url": "assets/js/47.eb245a76.js",
    "revision": "2905a3f7e2dad1b6323d4b459b4df142"
  },
  {
    "url": "assets/js/48.b54592dd.js",
    "revision": "51dde472b11da4386e2b8940f575a990"
  },
  {
    "url": "assets/js/49.76f44417.js",
    "revision": "be754a4978e22b81f280d2eb0e1d5ab0"
  },
  {
    "url": "assets/js/5.2cd7aca2.js",
    "revision": "ddd0368973ed62d3c7fad397c4db60a8"
  },
  {
    "url": "assets/js/50.ba3244cc.js",
    "revision": "383b48e449fc04272046beac8e042acd"
  },
  {
    "url": "assets/js/51.19827eaa.js",
    "revision": "44650341da433fb2c5ceb6d1d880b576"
  },
  {
    "url": "assets/js/52.af30f8d8.js",
    "revision": "4f59fd268ebb459c660e2d857daf2f46"
  },
  {
    "url": "assets/js/53.e69e31f2.js",
    "revision": "504896f7c4a7b1ee2a7985ca2af664db"
  },
  {
    "url": "assets/js/54.3aea5f8f.js",
    "revision": "c5d8b6223233073cf2053f5c7fcc208d"
  },
  {
    "url": "assets/js/55.fc09403d.js",
    "revision": "3a1fe88b6befa6c51dc589cf56a55c5b"
  },
  {
    "url": "assets/js/56.5a8bcf9b.js",
    "revision": "f69e0351a840eaaa96620dc4445034c1"
  },
  {
    "url": "assets/js/57.f1498f06.js",
    "revision": "f4409b40264fe712a5a9b20ff9181f2d"
  },
  {
    "url": "assets/js/6.1b46fd7e.js",
    "revision": "6cba538fa75cbb7f5fb35b609b0d5db0"
  },
  {
    "url": "assets/js/7.8ebf957f.js",
    "revision": "690358f76cfff2bfb49c008315d310df"
  },
  {
    "url": "assets/js/app.67be3f9f.js",
    "revision": "c0a0d7bae72b1072c3b1a09f29940815"
  },
  {
    "url": "assets/js/vendors~docsearch.8ff0dd7b.js",
    "revision": "59011b6b49fbbdc8b1ef721f85efb2ef"
  },
  {
    "url": "assets/js/vendors~flowchart.fcd2dd37.js",
    "revision": "85e6c384db0a4d3194666da18f72387b"
  },
  {
    "url": "async_defer.jpg",
    "revision": "a91b55bb972595d902edad6c5d14424e"
  },
  {
    "url": "async_defer.png",
    "revision": "14d53726ac7c29e41771559ac1927118"
  },
  {
    "url": "b.vue-router.html",
    "revision": "b0dab5284c88f2ace84e01a4263ad0f9"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d51bb08377ffdd6cfc5048df1b2dfd11"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4c014af3155a6046ed12cff5b4139bba"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "21d9fc176279ced5861e54288c3978b4"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "0b3dede44d6493005131ec00e71bcdcb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "8741b3927ffe0729c0886e36ee003403"
  },
  {
    "url": "imgs/001.jpg",
    "revision": "7bd595c86b76f6ea37e1b51e8f8cb1bc"
  },
  {
    "url": "imgs/002.jpg",
    "revision": "e41344df6d45b3969f392c1e1a2ee1a0"
  },
  {
    "url": "imgs/003.jpg",
    "revision": "a0910f47886405f2280153cfcc07b424"
  },
  {
    "url": "imgs/004.jpg",
    "revision": "02a9b17fd2cf94254fd2cac1c9dde059"
  },
  {
    "url": "imgs/005.jpg",
    "revision": "ed12bce94690e784872c9923cbc32cd4"
  },
  {
    "url": "imgs/006.jpg",
    "revision": "1f0c5ac84be87cf41a9e589c067c29b7"
  },
  {
    "url": "imgs/007.jpg",
    "revision": "ac2fe964ab727804a5a811b452fd5581"
  },
  {
    "url": "imgs/008.jpg",
    "revision": "b85d399532ac24b4c55387439c00517b"
  },
  {
    "url": "imgs/009.jpg",
    "revision": "a4b4fedce4732f460a644bfd13907ac1"
  },
  {
    "url": "imgs/010.jpg",
    "revision": "6a5d64e9f5b95eafcc11c01b9d684a0a"
  },
  {
    "url": "imgs/011.jpg",
    "revision": "8dff57ff7ec4f79c0592f1011ea53dd9"
  },
  {
    "url": "imgs/012.jpg",
    "revision": "872105652fd33a64f72b533ead6d2af6"
  },
  {
    "url": "imgs/013.jpg",
    "revision": "96771c335e1e580b2fd6be319e163a1b"
  },
  {
    "url": "imgs/014.jpg",
    "revision": "37a8313654d413301998aa6ea38506ab"
  },
  {
    "url": "imgs/015.jpg",
    "revision": "be0e5b4565f972ae2bee38c6341fbdf0"
  },
  {
    "url": "imgs/016.jpg",
    "revision": "37a9afd6b10e7b29af71ef7f64de2277"
  },
  {
    "url": "imgs/017.jpg",
    "revision": "b85d399532ac24b4c55387439c00517b"
  },
  {
    "url": "imgs/018.jpg",
    "revision": "bc72b65ca15d366f473450d7c1af6240"
  },
  {
    "url": "imgs/019.jpg",
    "revision": "0e687d7593d491d33e1e7305320a2352"
  },
  {
    "url": "imgs/020.jpg",
    "revision": "abbb071d7ea535b3222a697b9804569d"
  },
  {
    "url": "imgs/021.jpg",
    "revision": "91e7e5c26b09916d2ef738517da08b27"
  },
  {
    "url": "imgs/022.jpg",
    "revision": "907019545c7a02efdda205ca01679185"
  },
  {
    "url": "imgs/023.jpg",
    "revision": "3098326a70e70bfdf604e6397c56f606"
  },
  {
    "url": "imgs/024.jpg",
    "revision": "41616873cf90ce389d43cfa14f6ce546"
  },
  {
    "url": "imgs/025.jpg",
    "revision": "3703b338d641f666bd60eab132dd4392"
  },
  {
    "url": "imgs/026.jpg",
    "revision": "a99334370534aafb75f3d653fb01f99a"
  },
  {
    "url": "imgs/027.jpg",
    "revision": "37a8313654d413301998aa6ea38506ab"
  },
  {
    "url": "imgs/028.jpg",
    "revision": "c29bea948bf1e4c17a789cfeb9b9e8a0"
  },
  {
    "url": "imgs/029.jpg",
    "revision": "df4d3dc11b343450c8298e003b1b9ec0"
  },
  {
    "url": "imgs/030.jpg",
    "revision": "e0e54642be700b3950f538b2f841e110"
  },
  {
    "url": "imgs/031.jpg",
    "revision": "6373ff86ef70fe56bb034578a8970832"
  },
  {
    "url": "imgs/032.jpg",
    "revision": "07adfdd77e3e8f29e7f42eb6dfdf8dd9"
  },
  {
    "url": "imgs/033.jpg",
    "revision": "f4e4233ef709ea1158697c6a3e8772db"
  },
  {
    "url": "imgs/034.jpg",
    "revision": "3b3cec43061315eaa4ac75662efd9b98"
  },
  {
    "url": "imgs/035.jpg",
    "revision": "d9432f78a3c9656e1055e1a16404a6b9"
  },
  {
    "url": "imgs/036.jpg",
    "revision": "4812a3f9eea772cafbf3ce474e325211"
  },
  {
    "url": "imgs/037.jpg",
    "revision": "60be251de4b5ad011dea7ec2afc28855"
  },
  {
    "url": "imgs/038.jpg",
    "revision": "bafa6e14761824e898f3a4b950afc97d"
  },
  {
    "url": "imgs/039.jpg",
    "revision": "c60776b85d4ccf71ee068ab4c6323319"
  },
  {
    "url": "imgs/040.jpg",
    "revision": "835f9667c2b04d755103240d7eeb0d82"
  },
  {
    "url": "imgs/041.jpg",
    "revision": "5c351b1471c88bee10471420c58cf101"
  },
  {
    "url": "imgs/042.jpg",
    "revision": "74e5254823ffb647f40679350997e875"
  },
  {
    "url": "imgs/043.jpg",
    "revision": "59106d45f3b5247e295387e09ea0c8f5"
  },
  {
    "url": "imgs/044.jpg",
    "revision": "bffb6d70fb0bb957688896a4337a565d"
  },
  {
    "url": "imgs/045.jpg",
    "revision": "eb9bbe60b57b461968e0caa1cd2c5dea"
  },
  {
    "url": "imgs/046.jpg",
    "revision": "44d6473ba45804c63e45af3975b3e795"
  },
  {
    "url": "imgs/047.jpg",
    "revision": "02244df24d52ba3d08282ecc9dd2c4ee"
  },
  {
    "url": "imgs/048.jpg",
    "revision": "2befbf8e965124ee89e8c05c1bb2a489"
  },
  {
    "url": "imgs/049.jpg",
    "revision": "066b6127c649608aefa4800b8fbe6945"
  },
  {
    "url": "imgs/050.jpg",
    "revision": "719d58fe53995eb5e66b2dfeccf98760"
  },
  {
    "url": "imgs/051.jpg",
    "revision": "d60b369f44f58bbc0091f49678895833"
  },
  {
    "url": "index.html",
    "revision": "6360fc5a4aadf50b6a5d09b8af4fe200"
  },
  {
    "url": "logo.jpg",
    "revision": "d6313ed729722202f0a8d56d2f7dfb2e"
  },
  {
    "url": "logo.png",
    "revision": "3d686a3791cbeed17a3b01a578e2d87e"
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
