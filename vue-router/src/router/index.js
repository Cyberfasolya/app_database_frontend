import Vue from 'vue'
import Router from 'vue-router'

import administrator from '@/components/Administrator'
import login from "../components/Login";
import vet from '@/components/Vet'
import builder from '@/components/Builder'
import cleaner from '@/components/Cleaner'
import trainer from '@/components/Trainer'

import animals from '@/components/Animals'
import employees from '@/components/Employees'
import supplies from '@/components/Supplies'
import exchanges from '@/components/Exchanges'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', //компонент по умолчанию
      name: 'login',
      component: login
    },
    {
      path: '/administrator',
      name: 'administrator',
      component: administrator
    },
    {
      path: '/vet',
      name: 'vet',
      component: vet
    },
    {
      path: '/builder',
      name: 'builder',
      component: builder
    },
    {
      path: '/cleaner',
      name: 'cleaner',
      component: cleaner
    },

    {
      path: '/trainer',
      name: 'trainer',
      component: trainer
    },

    {
      path: '/administrator/animals',
      name: 'animals',
      component: animals
    },

    {
      path: '/administrator/employees',
      name: 'employees',
      component: employees
    },

    {
      path: '/administrator/supplies',
      name: 'supplies',
      component: supplies
    },

    {
      path: '/administrator/exchanges',
      name: 'exchanges',
      component: exchanges
    },

  ]
})
