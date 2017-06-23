<template>
    <p class="right">{{msg}}</p>
</template>

<script>
    export default{
        name:'right',
        data(){
            return{
                msg:'我是right视图'
            }
        }
    }
</script>
<style scoped="true">
    .right{
        float:left;
        height:200px;
        width:70%;
        background-color:pink;
        font-size:35px;
        color:green;
    }
</style>