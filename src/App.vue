<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <router-link to="/">主页</router-link>|
        <router-link :to="{name:'Hi',params:{username:'胡龙超',pwd:'xfdd'}}">Hi</router-link>
        <router-link to="/params/胡龙超/男">params</router-link>
        <router-link to="/re">redirect</router-link>
        <router-link to="/other">other</router-link>
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
  name: 'app'
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
