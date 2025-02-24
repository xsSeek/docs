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
    "revision": "0b2bfcf055d2ab23e245810c8e0b79dc"
  },
  {
    "url": "1.track.html",
    "revision": "41b55def63bfc28aeaacbd977add0714"
  },
  {
    "url": "10.utils.html",
    "revision": "8ba43f0fac19405762fab1b7156c87f9"
  },
  {
    "url": "11.lodash.html",
    "revision": "8a1e04a3a7135d7b60ff32f4e0d584f0"
  },
  {
    "url": "12.vscode.html",
    "revision": "ebf4318226fc1c5a306d54dc2f18aadc"
  },
  {
    "url": "13.promise.html",
    "revision": "3181e574ffe75315f064048c114376c1"
  },
  {
    "url": "14.tamperMonkey.html",
    "revision": "36f8f5f26a29115841bdef462ec01a05"
  },
  {
    "url": "15.git.html",
    "revision": "e83813488b49e7e51e434d174d8e3ca5"
  },
  {
    "url": "17.huawei.html",
    "revision": "7015a71747590a97bcfb80b4aefcb1f0"
  },
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "18.publish_node_package.html",
    "revision": "b6297a86dc6680095a8019751b1cccc6"
  },
  {
    "url": "19.notes.html",
    "revision": "c76e9ef9f0882b6fa994b4e8b0a7e785"
  },
  {
    "url": "2.1.array.html",
    "revision": "39bae8bfebacc7c94d7d6e14b07efadf"
  },
  {
    "url": "2.2.this.html",
    "revision": "8939da20c1236e43723678165af9ac78"
  },
  {
    "url": "2.3.string.html",
    "revision": "923049b8a15955a7c0c0c1b616bbf4fa"
  },
  {
    "url": "2.4.regExp.html",
    "revision": "fd85eff8f588137267d83d5bc65913a0"
  },
  {
    "url": "2.js.html",
    "revision": "2cd4494e5089b4f99b4012cce879eaec"
  },
  {
    "url": "20.Eslint_CommitLint.react.html",
    "revision": "0bd223691ab837729b13dfca54663ef6"
  },
  {
    "url": "21.vue3_ts_vite.html",
    "revision": "53ad81e14bc94a6720917eb53798330c"
  },
  {
    "url": "3.0.vue.html",
    "revision": "9ccf03bce6cd4497f0587fb604593f10"
  },
  {
    "url": "3.1.vue3.html",
    "revision": "4c0b63e038a95984200b12a130783643"
  },
  {
    "url": "4.1_React_Hooks.html",
    "revision": "5434db2050420613576b98ac738d5c97"
  },
  {
    "url": "4.react.html",
    "revision": "1eaa7e6d782f7d984dac926b5735671c"
  },
  {
    "url": "404.html",
    "revision": "9ef9f1b55109062fd67524824d51158e"
  },
  {
    "url": "5.webpack.html",
    "revision": "b1fcd5ec9bb0eab092e308c3c6a3e47c"
  },
  {
    "url": "6.css.html",
    "revision": "ed827b1ba3ca868444c66cd42617167a"
  },
  {
    "url": "7.1_array.html",
    "revision": "be006da852b25e8208dbe7370a61ca9a"
  },
  {
    "url": "7.2_Stack.html",
    "revision": "42576dbd40094adf9387fc4801742d7d"
  },
  {
    "url": "7.3_Queue.html",
    "revision": "01b26d63a061e2bfad377b9bc0bbf2b1"
  },
  {
    "url": "7.arithmetic.html",
    "revision": "b3b9363e54dfe78629dc4c9088d62d9d"
  },
  {
    "url": "8.browser.html",
    "revision": "6d02543d773c09f4a538a06c1a5e1c3d"
  },
  {
    "url": "9.http.html",
    "revision": "ba9ab8e6f6fcd1f436767d2dcf018f0c"
  },
  {
    "url": "a.htm.html",
    "revision": "f082af7ec8a4231beff698125c626df3"
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
    "url": "assets/js/19.8582ae0b.js",
    "revision": "c9d9b5887c25918f736dca8b1e80f4b8"
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
    "url": "assets/js/26.04b0dc9a.js",
    "revision": "b27136f18058651c2e20f4cf2ba115a5"
  },
  {
    "url": "assets/js/27.c7ba850c.js",
    "revision": "05f55f4a5fae1dd33d94c55903bb74ff"
  },
  {
    "url": "assets/js/28.5f6f6388.js",
    "revision": "324aee800f6f38533470e2cf7fe7814b"
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
    "url": "assets/js/31.5a159cec.js",
    "revision": "b66d595cc1e58d39729380fda58d2008"
  },
  {
    "url": "assets/js/32.2bc3a7db.js",
    "revision": "ab33226d5c67121189a72ad431a20c55"
  },
  {
    "url": "assets/js/33.a2caa01b.js",
    "revision": "703ba00fb8812dde0546ed515cd60251"
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
    "url": "assets/js/36.c1c96b41.js",
    "revision": "0e919edb88478a69debcfa6dda421e80"
  },
  {
    "url": "assets/js/37.6f6c2274.js",
    "revision": "3c1bdf11d86a9a85a77de2a00efb4aec"
  },
  {
    "url": "assets/js/38.02049ef9.js",
    "revision": "d0604684d7ec03a34bdc0cad82ffc9ad"
  },
  {
    "url": "assets/js/39.7829d35b.js",
    "revision": "fce6dd4db283382cc98d60d489b763e6"
  },
  {
    "url": "assets/js/4.3947092f.js",
    "revision": "3d7a5e451b4c24e331ae9ae89ca29e71"
  },
  {
    "url": "assets/js/40.9d3c8a6a.js",
    "revision": "8d40003bf7a8dcfda38463d1116c2f64"
  },
  {
    "url": "assets/js/41.9b9afe83.js",
    "revision": "b531463c1d5c55350b21fa819725672f"
  },
  {
    "url": "assets/js/42.df679db0.js",
    "revision": "2fd359074277a63bd8e40b83d5ea5708"
  },
  {
    "url": "assets/js/43.82264a91.js",
    "revision": "76925b33e9fa27e0ade64a32ab57752b"
  },
  {
    "url": "assets/js/44.c8058a50.js",
    "revision": "031bed6f4bbb217188b8b0cc7941cfc6"
  },
  {
    "url": "assets/js/45.2f0de859.js",
    "revision": "8dc92ab84b4dad6fde438ea5e23f5669"
  },
  {
    "url": "assets/js/46.d2cfc9a5.js",
    "revision": "fd2f93ae4f6b80902da7090fc10b7f80"
  },
  {
    "url": "assets/js/47.433de1a8.js",
    "revision": "a251d6575ff098f94b2e87050f7c5cd6"
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
    "url": "assets/js/50.d4dd8a40.js",
    "revision": "8b9578f5dd873941d376d8c883be44aa"
  },
  {
    "url": "assets/js/51.e67a068a.js",
    "revision": "22a26990568d74939267ffdf8ba50b98"
  },
  {
    "url": "assets/js/52.4a081a65.js",
    "revision": "27595d19f55369704eb1d42c479073a9"
  },
  {
    "url": "assets/js/53.e69e31f2.js",
    "revision": "504896f7c4a7b1ee2a7985ca2af664db"
  },
  {
    "url": "assets/js/54.95cba828.js",
    "revision": "1dcd0d0fb696a4d9d7eb507c7cd4e491"
  },
  {
    "url": "assets/js/55.9c1c057e.js",
    "revision": "60c2c5e8a891aeccd3603ce15e935503"
  },
  {
    "url": "assets/js/56.90351a5d.js",
    "revision": "7057894b99188a72de3dbd7174c592f3"
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
    "url": "assets/js/app.e31b0bba.js",
    "revision": "fbf58cb62f5be813211183c3881c9ba9"
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
    "revision": "c121c0ec3aebcf1dd2599ae3a5028718"
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
    "revision": "707390f80efd23774c2a097f4ec88370"
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
