<template>
    <div class="account" ref="account">
        <accountMain></accountMain>
        <email></email>
        <realName></realName>
    </div>
</template>

<script>
    // import accountTop from './accountTop.vue'
    import accountMain from './accountMain.vue'
    import email from './email.vue'
    import realName from './realName.vue'
    export default{
        name:'account',
        components:{
            // accountTop,
            accountMain,
            email,
            realName
        }
    }
 
</script>
<style>

</style>
