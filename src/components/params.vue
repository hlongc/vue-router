<template>
    <div>
        <p>{{msg}}</p>
        <p>姓名:{{$route.params.infoXM}}</p>
        <p>性别:{{$route.params.infoSex}}</p>
    </div>
</template>
<script>
    export default{
        name:'params',
        data(){
            return{
                msg:'params页面'
            }
        }
    }
</script>
<style>

</style>
