import Vue from 'vue'
import Router from 'vue-router'

import administrator from '@/components/Login/Administrator/Administrator'
import login from "../components/Login/Login";
import vet from '@/components/Login/Vet'
import builder from '@/components/Login/Builder'
import cleaner from '@/components/Login/Cleaner'
import trainer from '@/components/Login/Trainer'

import animals from '@/components/Login/Administrator/Animals/Animals'
import employees from '@/components/Login/Administrator/Employees/Employees'
import supplies from '@/components/Login/Administrator/Supplies'
import exchanges from '@/components/Login/Administrator/Exchanges/Exchanges'

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
