import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi' 
import hi1 from '@/components/hi1' 
import hi2 from '@/components/hi2' 
import left from '@/components/left' 
import right from '@/components/right'
import Params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      components: {
          default:Hello,
          left:left,
          right:right
      }
    },
    {
        path:'/Hi',
        name:'Hi',
        component:Hi,
        children:[
            {path:'hi1',name:'hi1',component:hi1},
            {path:'hi2',name:'hi2',component:hi2}
        ]
    },
    {
        path:'/H1',
        components:{
          default:Hello,
          left:right,
          right:left
        }
    },
    {
        path:'/params/:infoXM/:infoSex',
        component:Params
    },
    {
        path:'/re',
        redirect:'/'
    },
    {
        path:'/hi1',
        component:hi1,
        alias:'/other'
    }
  ]
})
