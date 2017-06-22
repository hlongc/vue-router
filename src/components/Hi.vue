<template>
  <div class="hi">
  <p>{{msg}}--名字:{{$route.params.username}}--密码:{{$route.params.pwd}}</p>
  <router-link :to="{name:'hi1',params:{score:99}}">子路由1</router-link>|
  <router-link :to="{name:'hi2',params:{age:'22岁'}}">子路由2</router-link>
  <router-view></router-view>
  </div>
  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是新建的Hi页面'
    }
  }
}
</script>


<style scoped>
    .hi{
        font-size:20px;
        color:skyblue;
        text-decoration:underline;
    }
</style>
