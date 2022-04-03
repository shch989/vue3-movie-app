import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter({
  // 헤쉬, 히스토리
  history: createWebHashHistory(),
  // 페이지
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/movie/:movieId',
      component: Movie
    }    
  ]
})