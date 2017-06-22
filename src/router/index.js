import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi' 
import hi1 from '@/components/hi1' 
import hi2 from '@/components/hi2' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
        path:'/Hi',
        name:'Hi',
        component:Hi,
        children:[
            {path:'hi1',name:'hi1',component:hi1},
            {path:'hi2',name:'hi2',component:hi2}
        ]
    }
  ]
})
