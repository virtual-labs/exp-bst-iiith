importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"981d2250322717c844e8feaccce715a9","url":"analysis/analysis-quiz.html"},{"revision":"98f71f9bd155194e1dcc5a092157776e","url":"analysis/analysis-quiz.json"},{"revision":"8188eafd110bf840e278579209c36343","url":"analysis/index.html"},{"revision":"b298a8d4c7b170ddd196b765bee9c8fa","url":"analysis/overview.html"},{"revision":"d51165b750486735add0b9adb0ca311b","url":"analysis/relationships.html"},{"revision":"64fa8a91da936d2a2dd528cead801c1e","url":"analysis/uses.html"},{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"82c1e5414107477c2d65f4dcec5c0836","url":"bst-delete/bst-delete-algorithm.html"},{"revision":"1c5bdd15c348feacef5aafa0eda78ba7","url":"bst-delete/bst-delete-quiz.html"},{"revision":"f189d5f625dc245301488421e31a2003","url":"bst-delete/bst-delete-quiz.json"},{"revision":"a2c14b144230979066723ce7de53292b","url":"bst-delete/bstDelete.html"},{"revision":"7c519b02fda0cec252545563e7d4267e","url":"bst-delete/bstDeleteExercise.html"},{"revision":"9dbeb8df6e6c973297d3e9c97a02118c","url":"bst-delete/index.html"},{"revision":"fe8b599d8136feb9f6b4d8c83adada23","url":"bst-delete/overview.html"},{"revision":"7976e49f443f77f25117098807ceabf9","url":"bst-delete/simulation/bstDelete.html"},{"revision":"dcb857e902bb2a0afb2f40442517e35f","url":"bst-delete/simulation/bstDeleteExercise.html"},{"revision":"66e58261c6e5bfb93ad37ca12ef013bb","url":"bst-delete/simulation/css/style_main.css"},{"revision":"d547cd6525595f48db814f996c9605cb","url":"bst-delete/simulation/js/bstDelete.js"},{"revision":"30d9796298116c3f29f3f1eefac7f22d","url":"bst-delete/simulation/js/bstDeleteExercise.js"},{"revision":"c3fbab0e8bf2e1e8bddf4ca9e8a8e195","url":"bst-delete/simulation/js/bstInsert.js"},{"revision":"f5963ef960ab445e6141e48f6c866ef8","url":"bst-delete/simulation/js/bstSearch.js"},{"revision":"c047f7610e9183274d57a3889b3194b0","url":"bst-delete/simulation/js/bstSearchPractice.js"},{"revision":"94be55568dc43c81d82f04c2ac378e93","url":"bst-delete/simulation/js/realization.js"},{"revision":"522a046910b2d5ccd24118df3b4a1b96","url":"bst-delete/simulation/old/BSTconstruction.html"},{"revision":"8c0c58beb83fcd7541b4af28021bfe8a","url":"bst-delete/simulation/old/BSTdelete.html"},{"revision":"51edc9a362f01d591975e2f8bf79c564","url":"bst-delete/simulation/old/BSTsort.html"},{"revision":"02704f579c02a22bd935b2abe3440831","url":"bst-delete/simulation/old/BSTtraversal.html"},{"revision":"f51e667b8233feaaf341560ce32f7525","url":"bst-delete/simulation/static/img/binary.png"},{"revision":"ae93750823f501ca4bb8a79fe4e4a186","url":"bst-delete/simulation/static/img/binaryheap.png"},{"revision":"7efef6fb634499b73dd6f53d0febcb7f","url":"bst-delete/simulation/static/img/hashtable.png"},{"revision":"23ca28f6d62d2a09c1ba0a484384fd43","url":"bst-delete/simulation/static/img/property.png"},{"revision":"1f6eabea2cc05c8fc5b5002d9e455171","url":"bst-delete/simulation/static/img/quizAnswer.png"},{"revision":"fce821ced314eb8d78f36f082c9d3dfa","url":"bst-delete/simulation/static/img/sol1.png"},{"revision":"45ab084f42837109a24e18e9eba83663","url":"bst-delete/simulation/static/img/structure.png"},{"revision":"9bf971e0544a4ed0669db6f83126546e","url":"bst-delete/simulation/static/img/terms.png"},{"revision":"0eae1a34bd478a1db446c45c2d4cfc1d","url":"bst-delete/simulation/static/img/treesort.png"},{"revision":"882f7db74388b571dcfb486e328abcb5","url":"bst-delete/simulation/static/lib/animation/Algorithm.js"},{"revision":"5b4783025138dcd5d0880243d4b064dc","url":"bst-delete/simulation/static/lib/animation/AnimatedBTreeNode.js"},{"revision":"316d6f740f971446f50f2fc66f93ec9d","url":"bst-delete/simulation/static/lib/animation/AnimatedCircle.js"},{"revision":"91aad42a883f4089e8755ba1351b3415","url":"bst-delete/simulation/static/lib/animation/AnimatedLabel.js"},{"revision":"1a8be4f05e4d592cfcc54a97df2ddba9","url":"bst-delete/simulation/static/lib/animation/AnimatedLinkedList.js"},{"revision":"d67bcfb89d4a693c01ef3a344ede48ad","url":"bst-delete/simulation/static/lib/animation/AnimatedObject.js"},{"revision":"b2a6eb9fa19bc7b7a4f010aa3f735fde","url":"bst-delete/simulation/static/lib/animation/AnimatedRectangle.js"},{"revision":"00d1baae1a7edf3eac5c27f733a8fa44","url":"bst-delete/simulation/static/lib/animation/AnimationMain.js"},{"revision":"2380a13b1915f6c74ac94968416d7f02","url":"bst-delete/simulation/static/lib/animation/CustomEvents.js"},{"revision":"f71a815443783db4f63d6303cc8fbe16","url":"bst-delete/simulation/static/lib/animation/HighlightCircle.js"},{"revision":"f19b3eaef44627230a82f666501026e9","url":"bst-delete/simulation/static/lib/animation/Line.js"},{"revision":"31228430325b8a103d34d54fb92b0dd0","url":"bst-delete/simulation/static/lib/animation/ObjectManager.js"},{"revision":"93ddd6ec8b6a87346ebc47a7582c2ff1","url":"bst-delete/simulation/static/lib/animation/UndoFunctions.js"},{"revision":"e85aed5c30d734f1e30646e030d7a817","url":"bst-delete/simulation/static/lib/jquery-1.5.2.min.js"},{"revision":"2d592e4e855916d24c7f12c71d872baf","url":"bst-delete/simulation/static/lib/jquery-ui-1.8.11.custom.css"},{"revision":"f007eb5b3284ccbe87539e4f4cf6a8ee","url":"bst-delete/simulation/static/lib/jquery-ui-1.8.11.custom.min.js"},{"revision":"748370ac4c3477599cbc0206bc5b2f4e","url":"bst-insert/bst-insert-algorithm.html"},{"revision":"74f69ddc778089f74d737ab2734830de","url":"bst-insert/bst-insert-quiz.html"},{"revision":"437ae95305ecd905d3259cef2b3f72ac","url":"bst-insert/bst-insert-quiz.json"},{"revision":"3f060b52535e6356e05c2013a13e1064","url":"bst-insert/bstInsert.html"},{"revision":"6eca198977444d57aec8c22afe27e85d","url":"bst-insert/index.html"},{"revision":"a43e1c8be74ee2fe13c9819609825283","url":"bst-insert/overview.html"},{"revision":"174bb94817d4abd43213e38a5a606de6","url":"bst-insert/simulation/bstInsert.html"},{"revision":"66e58261c6e5bfb93ad37ca12ef013bb","url":"bst-insert/simulation/css/style_main.css"},{"revision":"3a4e2f7e26ba37e42154a939effcd767","url":"bst-insert/simulation/js/bstDelete.js"},{"revision":"30d9796298116c3f29f3f1eefac7f22d","url":"bst-insert/simulation/js/bstDeleteExercise.js"},{"revision":"637e45ac682acdb5ca3a50931ede8533","url":"bst-insert/simulation/js/bstInsert.js"},{"revision":"532e6f55d633f70e98245287046c96b3","url":"bst-insert/simulation/js/bstSearch.js"},{"revision":"c047f7610e9183274d57a3889b3194b0","url":"bst-insert/simulation/js/bstSearchPractice.js"},{"revision":"94be55568dc43c81d82f04c2ac378e93","url":"bst-insert/simulation/js/realization.js"},{"revision":"522a046910b2d5ccd24118df3b4a1b96","url":"bst-insert/simulation/old/BSTconstruction.html"},{"revision":"8c0c58beb83fcd7541b4af28021bfe8a","url":"bst-insert/simulation/old/BSTdelete.html"},{"revision":"51edc9a362f01d591975e2f8bf79c564","url":"bst-insert/simulation/old/BSTsort.html"},{"revision":"02704f579c02a22bd935b2abe3440831","url":"bst-insert/simulation/old/BSTtraversal.html"},{"revision":"f51e667b8233feaaf341560ce32f7525","url":"bst-insert/simulation/static/img/binary.png"},{"revision":"ae93750823f501ca4bb8a79fe4e4a186","url":"bst-insert/simulation/static/img/binaryheap.png"},{"revision":"7efef6fb634499b73dd6f53d0febcb7f","url":"bst-insert/simulation/static/img/hashtable.png"},{"revision":"23ca28f6d62d2a09c1ba0a484384fd43","url":"bst-insert/simulation/static/img/property.png"},{"revision":"1f6eabea2cc05c8fc5b5002d9e455171","url":"bst-insert/simulation/static/img/quizAnswer.png"},{"revision":"fce821ced314eb8d78f36f082c9d3dfa","url":"bst-insert/simulation/static/img/sol1.png"},{"revision":"45ab084f42837109a24e18e9eba83663","url":"bst-insert/simulation/static/img/structure.png"},{"revision":"9bf971e0544a4ed0669db6f83126546e","url":"bst-insert/simulation/static/img/terms.png"},{"revision":"0eae1a34bd478a1db446c45c2d4cfc1d","url":"bst-insert/simulation/static/img/treesort.png"},{"revision":"882f7db74388b571dcfb486e328abcb5","url":"bst-insert/simulation/static/lib/animation/Algorithm.js"},{"revision":"5b4783025138dcd5d0880243d4b064dc","url":"bst-insert/simulation/static/lib/animation/AnimatedBTreeNode.js"},{"revision":"316d6f740f971446f50f2fc66f93ec9d","url":"bst-insert/simulation/static/lib/animation/AnimatedCircle.js"},{"revision":"91aad42a883f4089e8755ba1351b3415","url":"bst-insert/simulation/static/lib/animation/AnimatedLabel.js"},{"revision":"1a8be4f05e4d592cfcc54a97df2ddba9","url":"bst-insert/simulation/static/lib/animation/AnimatedLinkedList.js"},{"revision":"d67bcfb89d4a693c01ef3a344ede48ad","url":"bst-insert/simulation/static/lib/animation/AnimatedObject.js"},{"revision":"b2a6eb9fa19bc7b7a4f010aa3f735fde","url":"bst-insert/simulation/static/lib/animation/AnimatedRectangle.js"},{"revision":"00d1baae1a7edf3eac5c27f733a8fa44","url":"bst-insert/simulation/static/lib/animation/AnimationMain.js"},{"revision":"2380a13b1915f6c74ac94968416d7f02","url":"bst-insert/simulation/static/lib/animation/CustomEvents.js"},{"revision":"f71a815443783db4f63d6303cc8fbe16","url":"bst-insert/simulation/static/lib/animation/HighlightCircle.js"},{"revision":"f19b3eaef44627230a82f666501026e9","url":"bst-insert/simulation/static/lib/animation/Line.js"},{"revision":"31228430325b8a103d34d54fb92b0dd0","url":"bst-insert/simulation/static/lib/animation/ObjectManager.js"},{"revision":"93ddd6ec8b6a87346ebc47a7582c2ff1","url":"bst-insert/simulation/static/lib/animation/UndoFunctions.js"},{"revision":"e85aed5c30d734f1e30646e030d7a817","url":"bst-insert/simulation/static/lib/jquery-1.5.2.min.js"},{"revision":"2d592e4e855916d24c7f12c71d872baf","url":"bst-insert/simulation/static/lib/jquery-ui-1.8.11.custom.css"},{"revision":"f007eb5b3284ccbe87539e4f4cf6a8ee","url":"bst-insert/simulation/static/lib/jquery-ui-1.8.11.custom.min.js"},{"revision":"fde528abd5f8b67fca70992cf1f14a7a","url":"bst-search/bst-search-algorithm.html"},{"revision":"00a9cad0cc2589dccc6874e391e5955e","url":"bst-search/bst-search-quiz.html"},{"revision":"1c1aa50642fd89fbcea546ab0e27504f","url":"bst-search/bst-search-quiz.json"},{"revision":"79bc6bce9e7dc649b5384cb3fc410db7","url":"bst-search/bstSearch.html"},{"revision":"20adccdcd8db8acff1d95371e1bcdc69","url":"bst-search/bstSearchPractice.html"},{"revision":"673fc7c0d67663ea6a931e970c46eb5b","url":"bst-search/images/quiz_q1.png"},{"revision":"8ee5305ecbdfc284d4136edb53585e77","url":"bst-search/index.html"},{"revision":"7163844c50b73b2595c81f502bf39f25","url":"bst-search/simulation/bstSearch.html"},{"revision":"8f44ecd9d8b68b8488e9e5ca65760e88","url":"bst-search/simulation/bstSearchPractice.html"},{"revision":"66e58261c6e5bfb93ad37ca12ef013bb","url":"bst-search/simulation/css/style_main.css"},{"revision":"2ba33826422139b42cdd4d30dcb7d530","url":"bst-search/simulation/docs/index.html"},{"revision":"9109b47e48e2a295c0186d09d8b7e165","url":"bst-search/simulation/docs/org-templates/level-0.html"},{"revision":"35a006daf04bd4cf1b5a6ce4c2078113","url":"bst-search/simulation/docs/org-templates/level-1.html"},{"revision":"87886f1e47be2e1a1bdc401297ff0050","url":"bst-search/simulation/docs/org-templates/level-2.html"},{"revision":"39241554e13109b1ebca9fd60feadc09","url":"bst-search/simulation/docs/org-templates/level-3.html"},{"revision":"2ae5fbf29403036735b6d78fc94b3931","url":"bst-search/simulation/docs/org-templates/level-4.html"},{"revision":"7cad95e90913ca88f070abd97ed4712f","url":"bst-search/simulation/docs/org-templates/level-5.html"},{"revision":"cd9161ad836012572820da00f1651839","url":"bst-search/simulation/docs/org-templates/tex-macros.html"},{"revision":"d2cb61a57fedf4d37affac24a2244cc2","url":"bst-search/simulation/docs/runtime/css/styles.html"},{"revision":"56b081e5c240bc6b958d7d59adee3b3c","url":"bst-search/simulation/docs/runtime/html/bstDelete.html"},{"revision":"4ccbc22cae839b461f3a123971250fd3","url":"bst-search/simulation/docs/runtime/html/bstDeleteExercise.html"},{"revision":"4892b2f9721e4c4e43c34272044a417d","url":"bst-search/simulation/docs/runtime/html/bstInsert.html"},{"revision":"88c99805cc1d0cfa17966ed4987d9710","url":"bst-search/simulation/docs/runtime/html/bstSearch.html"},{"revision":"3bdf91b38f3e02d75552f87a3f80b68c","url":"bst-search/simulation/docs/runtime/html/bstSearchPractice.html"},{"revision":"509cc7583145786374cff383d1e02f09","url":"bst-search/simulation/docs/runtime/html/old/BSTconstruction.html"},{"revision":"0da4dc8f5d34b18c4597848e0710c78c","url":"bst-search/simulation/docs/runtime/html/old/BSTdelete.html"},{"revision":"70f53551165a78faa2decbbedbf86ada","url":"bst-search/simulation/docs/runtime/html/old/BSTsort.html"},{"revision":"8777071c489b461e3830e8788270b959","url":"bst-search/simulation/docs/runtime/html/old/BSTtraversal.html"},{"revision":"3d2e235d06338cda33667ddf37594507","url":"bst-search/simulation/docs/runtime/js/bstDelete_js.html"},{"revision":"7286ab9fad8b7d5e93937ffb9f192d7c","url":"bst-search/simulation/docs/runtime/js/bstDeleteExercise_js.html"},{"revision":"3839f662bf71040b1087cbe135b7b372","url":"bst-search/simulation/docs/runtime/js/bstInsert_js.html"},{"revision":"0bac5261457837f2b266f0d817f65b5b","url":"bst-search/simulation/docs/runtime/js/bstSearch_js.html"},{"revision":"28dac4737365887c4f5c86a8f3bac086","url":"bst-search/simulation/docs/runtime/js/bstSearchPractice_js.html"},{"revision":"152405c3772b16c22a45a1d371a2b1f4","url":"bst-search/simulation/docs/runtime/js/realization-catalog.html"},{"revision":"0217e23a96e539d2c0328a3f8f2d7168","url":"bst-search/simulation/docs/sitemap.html"},{"revision":"f51e667b8233feaaf341560ce32f7525","url":"bst-search/simulation/docs/static/img/binary.png"},{"revision":"ae93750823f501ca4bb8a79fe4e4a186","url":"bst-search/simulation/docs/static/img/binaryheap.png"},{"revision":"7efef6fb634499b73dd6f53d0febcb7f","url":"bst-search/simulation/docs/static/img/hashtable.png"},{"revision":"23ca28f6d62d2a09c1ba0a484384fd43","url":"bst-search/simulation/docs/static/img/property.png"},{"revision":"1f6eabea2cc05c8fc5b5002d9e455171","url":"bst-search/simulation/docs/static/img/quizAnswer.png"},{"revision":"fce821ced314eb8d78f36f082c9d3dfa","url":"bst-search/simulation/docs/static/img/sol1.png"},{"revision":"45ab084f42837109a24e18e9eba83663","url":"bst-search/simulation/docs/static/img/structure.png"},{"revision":"9bf971e0544a4ed0669db6f83126546e","url":"bst-search/simulation/docs/static/img/terms.png"},{"revision":"0eae1a34bd478a1db446c45c2d4cfc1d","url":"bst-search/simulation/docs/static/img/treesort.png"},{"revision":"882f7db74388b571dcfb486e328abcb5","url":"bst-search/simulation/docs/static/lib/animation/Algorithm.js"},{"revision":"5b4783025138dcd5d0880243d4b064dc","url":"bst-search/simulation/docs/static/lib/animation/AnimatedBTreeNode.js"},{"revision":"316d6f740f971446f50f2fc66f93ec9d","url":"bst-search/simulation/docs/static/lib/animation/AnimatedCircle.js"},{"revision":"91aad42a883f4089e8755ba1351b3415","url":"bst-search/simulation/docs/static/lib/animation/AnimatedLabel.js"},{"revision":"1a8be4f05e4d592cfcc54a97df2ddba9","url":"bst-search/simulation/docs/static/lib/animation/AnimatedLinkedList.js"},{"revision":"d67bcfb89d4a693c01ef3a344ede48ad","url":"bst-search/simulation/docs/static/lib/animation/AnimatedObject.js"},{"revision":"b2a6eb9fa19bc7b7a4f010aa3f735fde","url":"bst-search/simulation/docs/static/lib/animation/AnimatedRectangle.js"},{"revision":"00d1baae1a7edf3eac5c27f733a8fa44","url":"bst-search/simulation/docs/static/lib/animation/AnimationMain.js"},{"revision":"2380a13b1915f6c74ac94968416d7f02","url":"bst-search/simulation/docs/static/lib/animation/CustomEvents.js"},{"revision":"f71a815443783db4f63d6303cc8fbe16","url":"bst-search/simulation/docs/static/lib/animation/HighlightCircle.js"},{"revision":"f19b3eaef44627230a82f666501026e9","url":"bst-search/simulation/docs/static/lib/animation/Line.js"},{"revision":"31228430325b8a103d34d54fb92b0dd0","url":"bst-search/simulation/docs/static/lib/animation/ObjectManager.js"},{"revision":"93ddd6ec8b6a87346ebc47a7582c2ff1","url":"bst-search/simulation/docs/static/lib/animation/UndoFunctions.js"},{"revision":"e85aed5c30d734f1e30646e030d7a817","url":"bst-search/simulation/docs/static/lib/jquery-1.5.2.min.js"},{"revision":"2d592e4e855916d24c7f12c71d872baf","url":"bst-search/simulation/docs/static/lib/jquery-ui-1.8.11.custom.css"},{"revision":"f007eb5b3284ccbe87539e4f4cf6a8ee","url":"bst-search/simulation/docs/static/lib/jquery-ui-1.8.11.custom.min.js"},{"revision":"ec3bb52a00e176a7181d454dffaea219","url":"bst-search/simulation/docs/style/css/bootstrap.min.css"},{"revision":"2f624089c65f12185e79925bc5a7fc42","url":"bst-search/simulation/docs/style/css/bootstrap.mini.css"},{"revision":"00fbdf4f3b48ca47fb9b99335efcb717","url":"bst-search/simulation/docs/style/css/experiment.css"},{"revision":"4fc0e3e0ea748e7c4499eddae8b2f41e","url":"bst-search/simulation/docs/style/css/htmlize.css"},{"revision":"6fab54b8d9c60e1aa524c6141ea4bfd7","url":"bst-search/simulation/docs/style/css/labtheme.css"},{"revision":"b34f82b854eca06e1e16e198d30c2ecc","url":"bst-search/simulation/docs/style/css/override.css"},{"revision":"d876155eda8ce8cb3ebc8044b8698387","url":"bst-search/simulation/docs/style/css/readtheorg.css"},{"revision":"d2e22c037cebc36426711ef199ffa8bc","url":"bst-search/simulation/docs/style/css/rtd-full.css"},{"revision":"43ac51e639eb4c349d05d5fe94b31550","url":"bst-search/simulation/docs/style/css/worg-style.css"},{"revision":"ea4463d09be14f6611ab4f5544731d89","url":"bst-search/simulation/docs/style/img/favicon/popl.png"},{"revision":"2afe2c71a8d4a45134a4f854fd2b60db","url":"bst-search/simulation/docs/style/img/favicon/popl.svg"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"bst-search/simulation/docs/style/img/logo-new.png"},{"revision":"5869c96cc8f19086aee625d670d741f9","url":"bst-search/simulation/docs/style/js/bootstrap.min.js"},{"revision":"f8fc05490ffabc3441036d0276f5f105","url":"bst-search/simulation/docs/style/js/catalog.js"},{"revision":"977fbd48ff1693b6fe38bbad68b891d3","url":"bst-search/simulation/docs/style/js/experiment.js"},{"revision":"b43fd124e1055358a541965218fa3ece","url":"bst-search/simulation/docs/style/js/get.resource.js"},{"revision":"a09e13ee94d51c524b7e2a728c7d4039","url":"bst-search/simulation/docs/style/js/jquery.min.js"},{"revision":"275bf87e54e84f7e6ce84c9d7dd30a48","url":"bst-search/simulation/docs/style/js/labtheme.js"},{"revision":"64974f6e7e322e2950aa42c04082a857","url":"bst-search/simulation/docs/style/js/org-info.js"},{"revision":"4f897161a41760f536452b150f175575","url":"bst-search/simulation/docs/style/js/parser.js"},{"revision":"1d367d0e653491af01fbad165dcf3a40","url":"bst-search/simulation/docs/style/js/readtheorg.js"},{"revision":"a3e228e7e64013f1cb7ec7093e4bdd79","url":"bst-search/simulation/docs/style/js/router.js"},{"revision":"e068393cead7419aa9bee846e3a7923c","url":"bst-search/simulation/docs/style/lib/js/jquery.stickytableheaders.min.js"},{"revision":"f71c73c8ffd3738ab4003126ea784f14","url":"bst-search/simulation/js/bstDelete.js"},{"revision":"0b5b262c9a9e7d608f3e8cc48ce2ecce","url":"bst-search/simulation/js/bstDeleteExercise.js"},{"revision":"c3fbab0e8bf2e1e8bddf4ca9e8a8e195","url":"bst-search/simulation/js/bstInsert.js"},{"revision":"080f7be54167234d54a6a156935fc5a1","url":"bst-search/simulation/js/bstSearch.js"},{"revision":"c047f7610e9183274d57a3889b3194b0","url":"bst-search/simulation/js/bstSearchPractice.js"},{"revision":"94be55568dc43c81d82f04c2ac378e93","url":"bst-search/simulation/js/realization.js"},{"revision":"522a046910b2d5ccd24118df3b4a1b96","url":"bst-search/simulation/old/BSTconstruction.html"},{"revision":"8c0c58beb83fcd7541b4af28021bfe8a","url":"bst-search/simulation/old/BSTdelete.html"},{"revision":"51edc9a362f01d591975e2f8bf79c564","url":"bst-search/simulation/old/BSTsort.html"},{"revision":"02704f579c02a22bd935b2abe3440831","url":"bst-search/simulation/old/BSTtraversal.html"},{"revision":"f51e667b8233feaaf341560ce32f7525","url":"bst-search/simulation/static/img/binary.png"},{"revision":"ae93750823f501ca4bb8a79fe4e4a186","url":"bst-search/simulation/static/img/binaryheap.png"},{"revision":"7efef6fb634499b73dd6f53d0febcb7f","url":"bst-search/simulation/static/img/hashtable.png"},{"revision":"23ca28f6d62d2a09c1ba0a484384fd43","url":"bst-search/simulation/static/img/property.png"},{"revision":"1f6eabea2cc05c8fc5b5002d9e455171","url":"bst-search/simulation/static/img/quizAnswer.png"},{"revision":"fce821ced314eb8d78f36f082c9d3dfa","url":"bst-search/simulation/static/img/sol1.png"},{"revision":"45ab084f42837109a24e18e9eba83663","url":"bst-search/simulation/static/img/structure.png"},{"revision":"9bf971e0544a4ed0669db6f83126546e","url":"bst-search/simulation/static/img/terms.png"},{"revision":"0eae1a34bd478a1db446c45c2d4cfc1d","url":"bst-search/simulation/static/img/treesort.png"},{"revision":"882f7db74388b571dcfb486e328abcb5","url":"bst-search/simulation/static/lib/animation/Algorithm.js"},{"revision":"5b4783025138dcd5d0880243d4b064dc","url":"bst-search/simulation/static/lib/animation/AnimatedBTreeNode.js"},{"revision":"316d6f740f971446f50f2fc66f93ec9d","url":"bst-search/simulation/static/lib/animation/AnimatedCircle.js"},{"revision":"91aad42a883f4089e8755ba1351b3415","url":"bst-search/simulation/static/lib/animation/AnimatedLabel.js"},{"revision":"1a8be4f05e4d592cfcc54a97df2ddba9","url":"bst-search/simulation/static/lib/animation/AnimatedLinkedList.js"},{"revision":"d67bcfb89d4a693c01ef3a344ede48ad","url":"bst-search/simulation/static/lib/animation/AnimatedObject.js"},{"revision":"b2a6eb9fa19bc7b7a4f010aa3f735fde","url":"bst-search/simulation/static/lib/animation/AnimatedRectangle.js"},{"revision":"00d1baae1a7edf3eac5c27f733a8fa44","url":"bst-search/simulation/static/lib/animation/AnimationMain.js"},{"revision":"2380a13b1915f6c74ac94968416d7f02","url":"bst-search/simulation/static/lib/animation/CustomEvents.js"},{"revision":"f71a815443783db4f63d6303cc8fbe16","url":"bst-search/simulation/static/lib/animation/HighlightCircle.js"},{"revision":"f19b3eaef44627230a82f666501026e9","url":"bst-search/simulation/static/lib/animation/Line.js"},{"revision":"31228430325b8a103d34d54fb92b0dd0","url":"bst-search/simulation/static/lib/animation/ObjectManager.js"},{"revision":"93ddd6ec8b6a87346ebc47a7582c2ff1","url":"bst-search/simulation/static/lib/animation/UndoFunctions.js"},{"revision":"e85aed5c30d734f1e30646e030d7a817","url":"bst-search/simulation/static/lib/jquery-1.5.2.min.js"},{"revision":"2d592e4e855916d24c7f12c71d872baf","url":"bst-search/simulation/static/lib/jquery-ui-1.8.11.custom.css"},{"revision":"f007eb5b3284ccbe87539e4f4cf6a8ee","url":"bst-search/simulation/static/lib/jquery-ui-1.8.11.custom.min.js"},{"revision":"1bafed2fd4cbe71d726545a9ce9c48c0","url":"bst/binary-search-tree-quiz.html"},{"revision":"b0436c443bde9ffc0bce887a542a2f97","url":"bst/binary-search-tree-quiz.json"},{"revision":"1485adb878258682a405c2891a99cd28","url":"bst/bst-concept.html"},{"revision":"6a80513a6ebb6f7818b59a08e1945b8a","url":"bst/bst-properties.html"},{"revision":"23ca28f6d62d2a09c1ba0a484384fd43","url":"bst/images/property.png"},{"revision":"1f6eabea2cc05c8fc5b5002d9e455171","url":"bst/images/quizAnswer.png"},{"revision":"45ab084f42837109a24e18e9eba83663","url":"bst/images/structure.png"},{"revision":"9bf971e0544a4ed0669db6f83126546e","url":"bst/images/terms.png"},{"revision":"aa5bdf96bfb08f9370d0c92126afecef","url":"bst/index.html"},{"revision":"520f303d4e0300275aed0f87e5c7f357","url":"code-assessment.html"},{"revision":"d9d9e6b33749452e1ce93f93b98f4708","url":"code-assessment.json"},{"revision":"c19c62c1301d58544e2dca7d0b57a6e4","url":"feedback.html"},{"revision":"a2b9d12a72ff2c5f3b281b3760a2f3aa","url":"further-reading-and-references.html"},{"revision":"7e6f9cbfbdf65215e77d2f0dd296c575","url":"images/quiz_q3_a.png"},{"revision":"5cc2b0595967a1464c5eddb797bbe87e","url":"images/quiz_q3_b.png"},{"revision":"f0c0f58e7f1294c151173735eba7be08","url":"images/quiz_q3_c.png"},{"revision":"49153a70e458fa64f45448f178d2076f","url":"images/quiz_q3_d.png"},{"revision":"9527deab34aa598f712545edfa3671f6","url":"index.html"},{"revision":"b9db646a87807a537fb6db5a91986220","url":"overview.html"},{"revision":"44c32ba466068734c0f447cdc4095a1f","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"1e83e089b769516fe734cfb3a8d84503","url":"posttest.html"},{"revision":"30a6eadf3a216985741efce40960972c","url":"posttest.js"},{"revision":"efeec1326baac8ed8fe7db935f0f61e0","url":"posttest.json"},{"revision":"bb28df7bf00986b58622bbb86dc9e2c6","url":"pretest.html"},{"revision":"7f25b903112f5ac554803818282c5b63","url":"pretest.json"},{"revision":"688c32d4821020bab7dc8b64cb75c0c1","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );