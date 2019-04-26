import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../public/landing-page/landing-page'

// Lazy loading

const PrivacyPolicy = resolve => {
  require.ensure(['../public/privacy-policy/privacy'], () => {
    resolve(require('../public/privacy-policy/privacy'))
  })
}

const Contact = resolve => {
  require.ensure(['../public/contact/contact'], () => {
    resolve(require('../public/contact/contact'))
  })
}

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
      component: LandingPage
    },
    {
      path: '/privacy-policy',
      name: 'privacy',
      component: PrivacyPolicy
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: Contact
    },
    // This wildcard route takes care of any misspelling of routes or careless navigation
    {
      path: '*',
      redirect: '/'
    }
  ]
})
