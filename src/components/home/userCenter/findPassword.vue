<template>
    <div class="findPassword" ref="findPassword">
        <findPasswordTop></findPasswordTop>
        <findPasswordMain></findPasswordMain>
    </div>
</template>

<script>
    import findPasswordTop from './findPasswordTop.vue'
    import findPasswordMain from './findPasswordMain.vue'
    export default{
        components:{
            findPasswordTop,
            findPasswordMain
        }
    }
 
</script>
<style>

</style>
