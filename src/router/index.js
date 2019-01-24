import Vue from 'vue'
import Router from 'vue-router'
import Finance from '@/view/finance'
import Letter from '@/view/letter'
import Guarantee from '@/view/guarantee'
import Investment from '@/view/investment'

Vue.use(Router)

export default new Router({
  base: '/chart',
  routes: [
    {
      path: '/',
      name: 'Finance',
      component: Finance
    },
    {
      path: '/letter',
      name: 'Letter',
      component: Letter
    },
    {
      path: '/guarantee',
      name: 'Guarantee',
      component: Guarantee
    },
    {
      path: '/investment',
      name: 'Investment',
      component: Investment
    }
  ]
})
