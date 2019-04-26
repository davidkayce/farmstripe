import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../public/landing-page/landing-page'
import Dashboard from '../dashboard/dashboard'

// Lazy loading
const SignInPage = resolve => {
  require.ensure(['../public/sign-in/sign-in'], () => {
    resolve(require('../public/sign-in/sign-in'))
  })
}

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

const AvailableFarms = resolve => {
  require.ensure(['../shared/available-farms/available-farms'], () => {
    resolve(require('../shared/available-farms/available-farms'))
  })
}

const Portfolio = resolve => {
  require.ensure(['../dashboard/pages/portfolio/portfolio'], () => {
    resolve(require('../dashboard/pages/portfolio/portfolio'))
  })
}

const Profile = resolve => {
  require.ensure(['../dashboard/pages/profile/profile'], () => {
    resolve(require('../dashboard/pages/profile/profile'))
  })
}

const Wallets = resolve => {
  require.ensure(['../dashboard/pages/wallets/wallets'], () => {
    resolve(require('../dashboard/pages/wallets/wallets'))
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
      path: '/sign-in',
      name: 'signIn',
      component: SignInPage,
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
      component: PrivacyPolicy
    },
    {
      path: '/contact-us',
      name: 'contact',
      component: Contact
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
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
          component: Portfolio
        },
        {
          path: 'profile',
          name: 'profile',
          component: Profile
        },
        {
          path: 'wallets',
          name: 'wallets',
          component: Wallets
        },
        {
          path: 'available-farms',
          name: 'available-farms',
          component: AvailableFarms
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
