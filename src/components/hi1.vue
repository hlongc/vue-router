<template>
  <div class="hi">{{msg}}--分数{{$route.params.score}}</div>
</template>

<script>
export default {
  name: 'hi1',
  data () {
    return {
      msg: 'hi1.vue'
    }
  }
}
</script>


<style scoped>
    .hi{
        font-size:20px;
        color:red;
        text-decoration:underline;
    }
</style>
