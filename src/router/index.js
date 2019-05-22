import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  saveScrollPosition: true,
  mode: 'history',
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
      component: () => import('../public/landing-page/landing-page')
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: () => import('../public/privacy-policy/privacy')
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: () => import('../public/contact/contact')
    },
    // This wildcard route takes care of any misspelling of routes or careless navigation
    {
      path: '*',
      redirect: '/'
    }
  ]
})
