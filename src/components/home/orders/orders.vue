<template>
    <div class="orders" ref="orders">
        <ordersTop></ordersTop>
        <ordersMain></ordersMain>
    </div>
</template>

<script>
    import ordersTop from './ordersTop.vue'
    import ordersMain from './ordersMain.vue'
    export default{
        components:{
            ordersTop,
            ordersMain
        }
    }
 
</script>
<style>

</style>
