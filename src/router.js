import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  saveScrollPosition: true,
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return {selector: to.hash}
    }
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home')
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: () => import('./views/privacy')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('./views/contact')
    },
    // This wildcard route takes care of any misspelling of routes or careless navigation
    {
      path: '*',
      redirect: '/'
    }
  ]
})
