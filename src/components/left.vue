<template>
    <p class="left">{{msg}}</p>
</template>

<script>
    export default{
        name:'left',
        data(){
            return{
                msg:'我是left视图'
            }
        }
    }
</script>

<style scoped>
    .left{
        float:left;
        height:200px;
        width:30%;
        background-color:skyblue;
        color:#000;
        font-size:35px;
    }
</style>