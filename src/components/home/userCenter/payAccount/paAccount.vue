<template>
    <div class="paAccount" ref="paAccount">
        <paAccountTop></paAccountTop>
        <paAccountMain></paAccountMain>
    </div>
</template>

<script>
    import paAccountTop from './paAccountTop.vue'
    import paAccountMain from './paAccountMain.vue'
    export default{
        components:{
            paAccountTop,
            paAccountMain
        }
    }
 
</script>
<style>

</style>
