<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button @click="forword">前进</button>
    <button @click="returns">返回</button>
    <button @click="gohome">返回主页</button>
    <div>
        <router-link to="/">主页</router-link>|
        <router-link :to="{name:'Hi',params:{username:'胡龙超',pwd:'xfdd'}}">Hi</router-link>
        <router-link to="/params/胡龙超/男">params</router-link>
        <router-link to="/re">redirect</router-link>
        <router-link to="/other">other</router-link>
        <router-link to="/55465445">404</router-link>
    </div>
    <transition name="fade" mode="out-in">
        <router-view></router-view>
    </transition>
    <router-view name="left"></router-view>
    <router-view name="right"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
      forword(){
          this.$router.go(1);
      },
      returns(){
          this.$router.go(-1);
      },
      gohome(){
          this.$router.push('/');
      }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
    opcity:0;
}
.fade-enter-active{
    opcity:1;
    transition:opacity 0.5s;
}
.fade-leave{
    opacity:1;
}
.fade-leave-active{
    opacity:0;
    transition:opacity .5s;
}
</style>
