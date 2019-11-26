import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import animate1 from '@/components/animate1'
import test from '@/components/test/index.vue'
import study from '@/components/study/index.vue'
import svgDemo from '@/components/svg/index.vue'
import svgDemo2 from '@/components/svg/index2.vue'
import table from '@/components/table/index.vue'
import iviewtable from '@/components/table/iview.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/animate1',
      name: 'animate1',
      component: animate1
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/svgDemo',
      name: 'svgDemo',
      component: svgDemo
    },
    {
      path: '/svgDemo2',
      name: 'svgDemo2',
      component: svgDemo2
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/iviewtable',
      name: 'iviewtable',
      component: iviewtable
    }
  ]
})
