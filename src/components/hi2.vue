<template>
  <div class="hi">{{msg}}--年龄:{{$route.params.age}}</div>
</template>

<script>
export default {
  name: 'hi2',
  data () {
    return {
      msg: 'hi2.vue'
    }
  }
}
</script>


<style scoped>
    .hi{
        font-size:20px;
        color:green;
        text-decoration:underline;
    }
</style>
