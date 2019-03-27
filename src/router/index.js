import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '../public/landing-page/landing-page'
import SignInPage from '../public/sign-in/sign-in'
import PrivacyPolicy from '../public/privacy-policy/privacy'
import Contact from '../public/contact/contact'
import AboutUs from '../public/about/about'
import AvailableFarms from '../shared/available-farms/available-farms'
import Dashboard from '../dashboard/dashboard'
import Portfolio from '../dashboard/pages/portfolio/portfolio'
import Profile from '../dashboard/pages/profile/profile'
import Wallets from '../dashboard/pages/wallets/wallets'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/sign-in',
      name: 'signIn',
      component: SignInPage
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
      path: '/about-us',
      name: 'about',
      component: AboutUs
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
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
        }
      ]
    }
  ]
})
