<template>
    <div class="detailWm" ref="detailWm">
        <detailWmTop></detailWmTop>
        <detailWmMain></detailWmMain>
        <detailWmBottom></detailWmBottom>
    </div>
</template>

<script>
    import detailWmTop from './detailWmTop.vue'
    import detailWmMain from './detailWmMain.vue'
    import detailWmBottom from './detailWmBottom.vue'
    export default{
        components:{
            detailWmTop,
            detailWmMain,
            detailWmBottom
        }
    }
 
</script>
<style>

</style>
