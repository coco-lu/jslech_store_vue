<template>
    <div class="mui-content">
        <div class="mui-padding-sm mui-margin-top">
            <div class="mui-row mui-margin-bottom">
                <div class="mui-col-sm-5 mui-col-xs-5">可提现金额</div>
                <div class="mui-col-sm-7 mui-col-xs-7 mui-text-jd">&yen;888</div>
            </div>
            <div class="mui-row mui-margin-bottom">
                <div class="mui-col-sm-5 mui-col-xs-5">不可提现金额</div>
                <div class="mui-col-sm-7 mui-col-xs-7 mui-text-8e8e8e">&yen;0.00</div>
            </div>
            <div class="mui-row mui-margin-bottom">
                <div class="mui-col-sm-4 mui-col-xs-4 mui-padding-top-sm">提现金额</div>
                <div class="mui-col-sm-8 mui-col-xs-8">
                    <input type="text" placeholder="请输入正整数金额" class="mui-margin-bottom-0">
                </div>
            </div>
            <div class="mui-row mui-margin-bottom">
                <div class="mui-col-sm-4 mui-col-xs-4 mui-padding-top-sm">支付宝帐号</div>
                <div class="mui-col-sm-8 mui-col-xs-8">
                    <input type="text" placeholder="支付宝帐号" readonly="readonly">
                    <p class="mui-margin-0">尚未绑定支付宝，
                        <a id="payAccount">点击绑定</a>
                    </p>
                </div>
            </div>
            <div class="mui-row mui-margin-bottom">
                <div class="mui-col-sm-4 mui-col-xs-4 mui-padding-top-sm">备注</div>
                <div class="mui-col-sm-8 mui-col-xs-8">
                    <textarea id="textarea" rows="2" placeholder="添加备注" class="mui-margin-bottom-0"></textarea>
                </div>
            </div>
            <div class="mui-row mui-margin-bottom">
                <div class="mui-col-sm-4 mui-col-xs-4 mui-padding-top-sm">验证码</div>
                <div class="mui-col-sm-8 mui-col-xs-8 verifybox">
                    <input type="text" placeholder="5位验证码" class="mui-margin-0">
                    <a class="mui-text-xs">获取验证码</a>
                </div>
            </div>
            <div class="mui-margin-sm">
                <button type="button" class="mui-btn mui-btn-warning mui-btn-block mui-padding-sm">提 交</button>
            </div>
        </div>
    </div>
</template>

<script>
 
</script>
<style>

</style>
