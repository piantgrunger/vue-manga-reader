import Vue from 'vue'
import Router from 'vue-router'

import Manga  from '../component/Manga.vue'
import Chapter from '../component/Chapter.vue'
import DetailChapter from '../component/DetailChapter.vue'


Vue.use(Router)


var router = new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      component: Manga
    },
    {
        path:  '/chapter/:mangaId',
        component: Chapter,
        name : 'chapter',
        props :true
      },
    {
        path: '/chapterlist/:chapterId',
        component: DetailChapter,
        name:'detailChapter',
        props: true 
      }
    

 
  ]
})

export default router