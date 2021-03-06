import Vue from 'vue'
import Router from 'vue-router'

import content from "../components/Content";

import animals from '@/components//Animals/Animals'
import employees from '@/components//Employees/Employees'
import access from '@/components//Employees/Access/Access'
import feed from '@/components/Feed/Feed'
import exchanges from '@/components//Exchanges/Exchanges'

import supplies from '@/components//Feed/Supplies/Supplies'
import assortment from '@/components/Feed/Assortment/Assortment'
import menu from '@/components/Feed/Menu/Menu'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', //компонент по умолчанию
      name: 'content',
      component: content
    },
    {
      path: '/animals',
      name: 'animals',
      component: animals
    },

    {
      path: '/employees',
      name: 'employees',
      component: employees
    },

    {
      path: '/employees/access',
      name: 'access',
      component: access
    },

    {
      path: '/feed',
      name: 'feed',
      component: feed
    },

    {
      path: '/exchanges',
      name: 'exchanges',
      component: exchanges
    },

    {
      path: '/feed/assortment',
      name: 'assortment',
      component: assortment
    },

    {
      path: '/feed/supplies',
      name: 'supplies',
      component: supplies
    },

    {
      path: '/feed/menu',
      name: 'menuComponent',
      component: menu
    },
  ]
})
