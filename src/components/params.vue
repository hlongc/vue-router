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
        },
        beforeRouteEnter:(to,from,next)=>{
            console.log("准备进入params");
            next();
        },
        beforeRouteLeave:(to,from,next)=>{
            console.log("准备离开params");
            next();
        }
    }
</script>
<style>

</style>
