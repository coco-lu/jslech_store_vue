<template>
    <div class="walletList" ref="walletList">
        <walletListTop></walletListTop>
        <walletListMain></walletListMain>
    </div>
</template>

<script>
    import walletListTop from './walletListTop.vue'
    import walletListMain from './walletListMain.vue'
    export default{
        components:{
            walletListTop,
            walletListMain
        }
    }
 
</script>
<style>

</style>
