<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
        <router-link to="/">主页</router-link>|
        <router-link :to="{name:'Hi',params:{username:'胡龙超',pwd:'xfdd'}}">Hi</router-link>
    </div>
    <router-view></router-view>
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
</style>
