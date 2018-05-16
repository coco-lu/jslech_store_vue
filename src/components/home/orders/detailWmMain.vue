<template>
    <div class="mui-content detail">
        <!--订单状态-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner mui-text-center mui-text-xl">
                    <span class="mui-icon iconfont icon-finished mui-icon-lg mui-text-success"></span> 订单完成<br /><br />
                    <span class="mui-icon iconfont icon-waiting mui-icon-lg mui-text-warning"></span> 待付款<br /><br />
                    <span class="mui-icon iconfont icon-ing mui-icon-lg mui-text-danger"></span> 配送中<br /><br />
                    <span class="mui-icon iconfont icon-cancel mui-icon-lg mui-text-jd"></span> 订单取消<br /><br />
                </div>
            </div>
        </div>
        <!--订单详情-->
        <div class="mui-card">
            <div class="mui-card-header mui-text-sm"><span class="mui-text-truncate"><span class="mui-icon mui-icon-person"></span>用户名用户名用户名用用户名</span>
            </div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner goodsList">
                    <div class="mui-row">
                        <div class="mui-col-sm-1 mui-col-xs-1"><img src="../images/logo.png" width="100%" /></div>
                        <div class="mui-col-sm-7 mui-col-xs-7 mui-padding-left-sm">商品名称商品称商品名称商品名称商品名称商品名称商品名称商品名称商品名称</div>
                        <div class="mui-col-sm-4 mui-col-xs-4 mui-text-right">&yen;88.88 x 1</div>
                    </div>
                    <div class="mui-row">
                        <div class="mui-col-sm-1 mui-col-xs-1"><img src="../images/logo.png" width="100%" /></div>
                        <div class="mui-col-sm-7 mui-col-xs-7 mui-padding-left-sm"><span class="mui-badge mui-badge-danger">优惠购</span> 商品名称商品名称商品名称商品名称</div>
                        <div class="mui-col-sm-4 mui-col-xs-4 mui-text-right">&yen;88.88 x 1</div>
                    </div>
                </div>
                <div class="mui-row mui-padding mui-bg-f9f9f9 mui-text-xs">
                    <div class="mui-col-sm-6 mui-col-xs-6">商品总价</div>
                    <div class="mui-col-sm-6 mui-col-xs-6 mui-text-right">&yen;888.00</div>
                    <div class="mui-col-sm-6 mui-col-xs-6">餐盒费</div>
                    <div class="mui-col-sm-6 mui-col-xs-6 mui-text-right">&yen;2.00</div>
                    <div class="mui-col-sm-6 mui-col-xs-6">满减优惠 <span class="badgebox">满</span></div>
                    <div class="mui-col-sm-6 mui-col-xs-6 mui-text-right">-&yen;2.00</div>
                    <div class="mui-col-sm-6 mui-col-xs-6">特价优惠 <span class="badgebox">特</span></div>
                    <div class="mui-col-sm-6 mui-col-xs-6 mui-text-right">-&yen;2.00</div>
                    <div class="mui-col-sm-6 mui-col-xs-6">平台佣金（10%）</div>
                    <div class="mui-col-sm-6 mui-col-xs-6 mui-text-right">-&yen;1.00</div>
                </div>
                <div class="mui-padding mui-text-right">
                    商家实际收款：<span class="mui-text-default mui-text-jd">&yen;888.00</span>
                </div>
            </div>
            <div class="mui-card-footer mui-text-center">
                <div class="mui-text-lg mui-padding-vertical-sm"><span class="mui-icon mui-icon-phone mui-text-jd"></span>联系买家</div>
            </div>
        </div>
    </div>
</template>

<script>
    import detailWmTop from './detailWmTop.vue'
    import detailWmMain from './detailWmMain.vue'
    export default{
        components:{
            detailWmTop,
            detailWmMain
        }
    }
 
</script>
<style>

</style>
