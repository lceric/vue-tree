import Vue from 'vue'
import Router from 'vue-router'
import ExampleTree from '../pages/ex-tree.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ExampleTree',
      component: ExampleTree
    }
  ]
})
