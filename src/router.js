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
    {
      path: "/",
      name: "signIn",
      component: () => import(/* webpackChunkName: "sign-in" */'./views/sign-in/sign-in.vue')
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: () => import(/* webpackChunkName: "forgot-password" */'./views/forgot-password.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard-shell" */'./views/dashboard/dashboard.vue'),
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
          component: () => import(/* webpackChunkName: "dashboard-portfolio" */ './views/dashboard/pages/portfolio/portfolio.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "dashboard-profile" */ './views/dashboard/pages/profile/profile.vue')
        },
        {
          path: 'wallets',
          name: 'wallets',
          component: () => import(/* webpackChunkName: "dashboard-wallets" */ './views/dashboard/pages/wallets/wallets.vue')
        },
        {
          path: 'available-farms',
          name: 'available-farms',
          component: () => import(/* webpackChunkName: "dashboard-wallets" */ './components/available-farms.vue')
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
});
