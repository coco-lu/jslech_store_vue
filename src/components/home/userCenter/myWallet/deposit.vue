<template>
    <div class="deposit" ref="deposit">
        <depositTop></depositTop>
        <depositMain></depositMain>
    </div>
</template>

<script>
    import depositTop from './depositTop.vue'
    import depositMain from './depositMain.vue'
    export default{
        components:{
            depositTop,
            depositMain
        }
    }
 
</script>
<style>

</style>
