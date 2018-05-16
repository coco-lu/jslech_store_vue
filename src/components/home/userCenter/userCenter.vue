<template>
    <div class="userCenter" ref="userCenter">
        <userTop></userTop>
        <userMain></userMain>
    </div>
</template>

<script>
    import userTop from './userTop.vue'
    import userMain from './userMain.vue'
    export default{
        components:{
            userTop,
            userMain
        }
    }
</script>
<style>

</style>
