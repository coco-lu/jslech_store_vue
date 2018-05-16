<template>
    <div class="depositList" ref="depositList">
        <depositListTop></depositListTop>
        <depositListMain></depositListMain>
    </div>
</template>

<script>
    import depositListTop from './depositListTop.vue'
    import depositListMain from './depositListMain.vue'
    export default{
        components:{
            depositListTop,
            depositListMain
        }
    }
 
</script>
<style>

</style>
