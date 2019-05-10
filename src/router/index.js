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
      path: '/sign-in',
      name: 'signIn',
      component: () => import('../public/sign-in/sign-in'),
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('access_token') || null
        let exp = localStorage.getItem('expiry_date')
        if (token === null) {
          next()
        } else {
          if (Date.now() > exp) {
            localStorage.removeItem('access_token')
            next()
          } else {
            next('/dashboard')
          }
        }
      }
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
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../dashboard/dashboard'),
      beforeEnter: (to, from, next) => {
        let token = localStorage.getItem('access_token') || null
        let exp = localStorage.getItem('expiry_date')
        if (token === null) {
          next(false)
        } else {
          if (Date.now() > exp) {
            localStorage.removeItem('access_token')
            next(false)
          } else {
            next()
          }
        }
      },
      children: [
        {
          path: '/',
          name: 'portfolio',
          component: () => import('../dashboard/pages/portfolio/portfolio')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('../dashboard/pages/profile/profile')
        },
        {
          path: 'wallets',
          name: 'wallets',
          component: () => import('../dashboard/pages/wallets/wallets')
        },
        {
          path: 'available-farms',
          name: 'available-farms',
          component: () => import('../shared/available-farms/available-farms')
        },
        // This wildcard route takes care of any misspelling of routes or careless navigation
        {
          path: '*',
          redirect: '/dashboard'
        }
      ]
    },
    // This wildcard route takes care of any misspelling of routes or careless navigation
    {
      path: '*',
      redirect: '/'
    }
  ]
})
