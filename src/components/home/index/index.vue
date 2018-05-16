<template>
    <div class="index" ref="index">
        <top></top>
        <lists></lists>
        <rightTopMenu></rightTopMenu>
    </div>
</template>

<script>
    import top from './top.vue'
    import lists from './lists.vue'
    import rightTopMenu from './rightTopMenu.vue'
    export default{
        components:{
            top,
            lists,
            rightTopMenu
        }
    }
 
</script>
<style>

</style>
