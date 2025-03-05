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
    "revision": "e6d0bc652c6fe47656f4cce9444283ea"
  },
  {
    "url": "1.track.html",
    "revision": "640dfb912a91805c95364452c4284dc3"
  },
  {
    "url": "10.utils.html",
    "revision": "9a91e113a5474d972ed1d175fd4466b0"
  },
  {
    "url": "11.lodash.html",
    "revision": "205e785b71f4278cf9f85cad82779c65"
  },
  {
    "url": "12.vscode.html",
    "revision": "d39a407491186c99289d1ef952910315"
  },
  {
    "url": "13.promise.html",
    "revision": "75ff0a9c3018f356eb015715a1f6d5f0"
  },
  {
    "url": "14.tamperMonkey.html",
    "revision": "de475a1030884560ad352561ea6d5264"
  },
  {
    "url": "15.git.html",
    "revision": "7768bb5fe4f0d9fb6cca29f710f4aad5"
  },
  {
    "url": "17.huawei.html",
    "revision": "df9c8281dfa25ebf18e24100e3b19743"
  },
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "18.publish_node_package.html",
    "revision": "cc5e28f2e6d3e6734fa3ce9f98115688"
  },
  {
    "url": "19.notes.html",
    "revision": "f1e92260682faf17d77d1d22782d3196"
  },
  {
    "url": "2.1.array.html",
    "revision": "007c07bf1c62fb6f63172898a9722f72"
  },
  {
    "url": "2.2.this.html",
    "revision": "90fa8762fd46fe0b5602f86e18a5110a"
  },
  {
    "url": "2.3.string.html",
    "revision": "48d166775bf32aa12d8b234e2d7c55d0"
  },
  {
    "url": "2.4.regExp.html",
    "revision": "45bd3d86ee88d8bbc38ea3b2933a04b0"
  },
  {
    "url": "2.js.html",
    "revision": "087a7c5c1d605489bd14ea71177bb49b"
  },
  {
    "url": "20.Eslint_CommitLint.react.html",
    "revision": "bc10499ae520d30a74aba4df0501cf5b"
  },
  {
    "url": "21.vue3_ts_vite.html",
    "revision": "6226a85a90b8048ee43cde19470bc1b3"
  },
  {
    "url": "3.0.vue.html",
    "revision": "4cedaf0e04e971989ae3db3777733074"
  },
  {
    "url": "3.1.vue3.html",
    "revision": "5bcc799f8594849856655778accc30bc"
  },
  {
    "url": "4.1_React_Hooks.html",
    "revision": "bc5aae0d7f9dc7e7e0d6475039edfa41"
  },
  {
    "url": "4.react.html",
    "revision": "c6b779e5f42e681a9411e34f6de65f1b"
  },
  {
    "url": "404.html",
    "revision": "d4d1d6a4fb39ec9184832be99c8e9e3c"
  },
  {
    "url": "5.webpack.html",
    "revision": "b5b9dddd02b666dd47cbe70a6ff553eb"
  },
  {
    "url": "6.css.html",
    "revision": "47d0eb99fc6dff1bb9fd5c5c8dbe05a4"
  },
  {
    "url": "7.2_Stack.html",
    "revision": "ef6080b84adc05e1e4ac179fedb4ca7a"
  },
  {
    "url": "7.3_Queue.html",
    "revision": "8bc508c7e648431f931e3bca5e3f9fdd"
  },
  {
    "url": "7.arithmetic.html",
    "revision": "2825e949f505d27a6e8ebb4a8d67c769"
  },
  {
    "url": "8.browser.html",
    "revision": "c600568e91a9c02b9749b04f7b244689"
  },
  {
    "url": "9.http.html",
    "revision": "d5ab7ffaebbbbccbd54336cb6de133ef"
  },
  {
    "url": "a.htm.html",
    "revision": "9c49a778d986f526694419a61b6f6323"
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
    "url": "assets/js/19.e031737c.js",
    "revision": "7670438e8ce97f06736ee0e900436868"
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
    "url": "assets/js/25.2eb89510.js",
    "revision": "3f3075274739e43a45e65f48c2b8d99b"
  },
  {
    "url": "assets/js/26.c04ea909.js",
    "revision": "bc2df46c7bf3e8f545d0e98d2a9889e2"
  },
  {
    "url": "assets/js/27.c7ba850c.js",
    "revision": "05f55f4a5fae1dd33d94c55903bb74ff"
  },
  {
    "url": "assets/js/28.b57c1573.js",
    "revision": "09828580f76e60bc6f9b27acf0836c53"
  },
  {
    "url": "assets/js/29.0330a400.js",
    "revision": "cd5e38b1cfc8c29b7ef48674533794f3"
  },
  {
    "url": "assets/js/3.940bfe8a.js",
    "revision": "f3eed509e76adc23692e3d457d3a87d2"
  },
  {
    "url": "assets/js/30.46f049e4.js",
    "revision": "7c1213ed62654e3828e030c58c834fe6"
  },
  {
    "url": "assets/js/31.e35fffdf.js",
    "revision": "4c281715a1e7cbbd583bd059fb8bcd7d"
  },
  {
    "url": "assets/js/32.6bd1f2f7.js",
    "revision": "dfa1191ea5d70d7f5620627691ffb5ef"
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
    "url": "assets/js/35.50901707.js",
    "revision": "1c07f2916d082af018aeb7c2965bd139"
  },
  {
    "url": "assets/js/36.1d8bc760.js",
    "revision": "467ee660b19ebeb82e29d0047b8734fa"
  },
  {
    "url": "assets/js/37.8901e16f.js",
    "revision": "7b56a3eebaf98d63803ba83cf65f55bf"
  },
  {
    "url": "assets/js/38.40dfdbe5.js",
    "revision": "e85836ba7d7a40c8d94d33dcd77489b7"
  },
  {
    "url": "assets/js/39.1e1bf59e.js",
    "revision": "1ccd1127b9a241c4e8a90cf809f3d5dd"
  },
  {
    "url": "assets/js/4.3947092f.js",
    "revision": "3d7a5e451b4c24e331ae9ae89ca29e71"
  },
  {
    "url": "assets/js/40.931fdfb7.js",
    "revision": "5af3789b6dd49a93f29d70af225673d1"
  },
  {
    "url": "assets/js/41.4d4bf119.js",
    "revision": "026121537aa92d7fec97becd7ba661e8"
  },
  {
    "url": "assets/js/42.4a7b1688.js",
    "revision": "9336d1ccc168b061e82e49d399b84b0a"
  },
  {
    "url": "assets/js/43.dd47968c.js",
    "revision": "f18dfca03d3f1ba477591e727dc49d93"
  },
  {
    "url": "assets/js/44.ccd9d495.js",
    "revision": "863fa88957358e9bb736b3db83ae0140"
  },
  {
    "url": "assets/js/45.d6462e99.js",
    "revision": "b55f669223bd889ef4d605ccd63dd838"
  },
  {
    "url": "assets/js/46.06c3e7d0.js",
    "revision": "e346c96b5ae1f4d31bc9ab873364061a"
  },
  {
    "url": "assets/js/47.433de1a8.js",
    "revision": "a251d6575ff098f94b2e87050f7c5cd6"
  },
  {
    "url": "assets/js/48.049f7fc4.js",
    "revision": "1aba5302662ad5813afa16c77a23caa4"
  },
  {
    "url": "assets/js/49.1c818bed.js",
    "revision": "13dd7043177438706af94d4bc67b3fec"
  },
  {
    "url": "assets/js/5.2cd7aca2.js",
    "revision": "ddd0368973ed62d3c7fad397c4db60a8"
  },
  {
    "url": "assets/js/50.d577bbab.js",
    "revision": "d963943a91bbceab9b1bbd64e5c66cb5"
  },
  {
    "url": "assets/js/51.f7dabb90.js",
    "revision": "c6ca85f4821547dfda48fca92d2d846d"
  },
  {
    "url": "assets/js/52.90ce142e.js",
    "revision": "70ba326854834250d9722efb788007c5"
  },
  {
    "url": "assets/js/53.a04856cd.js",
    "revision": "dd9f484f74d2ae113a984ac2aae8fb3c"
  },
  {
    "url": "assets/js/54.7b339320.js",
    "revision": "570826f2967b80dc8bedd92be06fe482"
  },
  {
    "url": "assets/js/55.0dc4d039.js",
    "revision": "4c85cc1ae0f0835fc9717d554430b697"
  },
  {
    "url": "assets/js/56.4592f770.js",
    "revision": "b7c4b40fb5ab9a83e2f36bbccc4d7d60"
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
    "url": "assets/js/app.3087c6f6.js",
    "revision": "c5ed84383ad29a2e6191ac73dab79062"
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
    "revision": "50852a586decb80e95831972be5258b7"
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
    "revision": "d6a5e59045e5db2b622a8e8d3ff8fb75"
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
