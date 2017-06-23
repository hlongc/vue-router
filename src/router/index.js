import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi' 
import hi1 from '@/components/hi1' 
import hi2 from '@/components/hi2' 
import left from '@/components/left' 
import right from '@/components/right'
import Params from '@/components/params'
import error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',//history是去掉#,hash是加上#
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
        component:Params/*,
        beforeEnter:(to,from,next)=>{
            console.log(to);
            console.log(from);
            next();
        }*/
    },
    {
        path:'/re',
        redirect:'/'
    },
    {
        path:'/hi1',
        component:hi1,
        alias:'/other'
    },
    {
        path:'*',
        component:error
    }
  ]
})
