<template>
    <div class="orderListWm" ref="orderListWm">
        <orderListWmTop></orderListWmTop>
        <orderListWmMain></orderListWmMain>
    </div>
</template>

<script>
    import orderListWmTop from './orderListWmTop.vue'
    import orderListWmMain from './orderListWmMain.vue'
    export default{
        components:{
            orderListWmTop,
            orderListWmMain
        }
    }
 
</script>
<style>

</style>
