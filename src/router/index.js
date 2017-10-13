import Vue from 'vue'
import Router from 'vue-router'
import mainlct from '@/components/mainlct'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainlct',
      component: mainlct
    }
  ]
})
