import Vue from 'vue'
import Router from 'vue-router'

import Manga  from '../component/Manga.vue'
import Episode from '../component/Episode.vue'


Vue.use(Router)


var router = new Router({
    mode: 'history',
  routes: [
    {
      path: '/',
      component: Manga
    },
    {
        path:  '/episode/:mangaId',
        component: Episode,
        name : 'episode',
        props :true
      },
    {
        path: '/manga/:searchWord',
        component: Manga,
        name:'searchManga',
        props: true 
      }

 
  ]
})

export default router