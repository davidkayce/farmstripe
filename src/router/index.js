import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  saveScrollPosition: true,
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'signIn',
      component: () => import('../auth/sign-in/sign-in'),
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
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import('../auth/sign-in/sign-in')
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
