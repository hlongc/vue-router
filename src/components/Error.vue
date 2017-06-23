<template>
    <div class="error">{{msg}}</div>
</template>
<script>
    export default{
        name:'Error',
        data(){
            return{
                msg:'页面不存在404!'
            }
        }
    }
</script>
<style scoped="true">
    .error{
        color:red;
    }
</style>