<template>
    <div class="myWallet" ref="myWallet">
        <myWalletTop></myWalletTop>
        <myWalletMain></myWalletMain>
    </div>
</template>

<script>
    import myWalletTop from './myWalletTop.vue'
    import myWalletMain from './myWalletMain.vue'
    export default{
        components:{
            myWalletTop,
            myWalletMain
        }
    }
 
</script>
<style>

</style>
