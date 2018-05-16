<template>
   <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
	<div id="homePage" class="mui-scroll">
	<!--F1-->
		<ul class="mui-table-view mui-grid-view mui-grid-9 sup-nav">
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="proManage()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-product mui-text-primary mui-icon-xs"></span>
					<div class="mui-media-body">产品管理</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="orderManage()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-order mui-text-warning mui-icon-xs"></span>
					<div class="mui-media-body">订单管理</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="shopManage()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-shop mui-text-danger mui-icon-xs"></span>
					<div class="mui-media-body">店铺管理</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="saomaValidate()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-saoyisao mui-text-primary mui-icon-xs"></span>
					<div class="mui-media-body">扫码验证</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="moneyManage()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-caiwu mui-text-jd mui-icon-xs"></span>
					<div class="mui-media-body">财务管理</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="yanzhRecord()"> 
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-yanzheng mui-text-royal mui-icon-xs"></span>
					<div class="mui-media-body">验证记录</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="buyGoods()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-jiagou mui-text-primary mui-icon-xs"></span>
					<div class="mui-media-body">加购商品</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-3 mui-col-sm-3" @tap="myEwm()">
				<a href="#" class="mui-padding-0">
					<span class="mui-icon iconfont icon-erweima mui-text-warning mui-icon-xs"></span>
					<div class="mui-media-body">我的二维码</div>
				</a>
			</li>
		</ul>
		<!--F2-->
		<ul class="mui-table-view mui-grid-view mui-grid-9 sub-nav">
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#" class="mui-padding-0">
					<div class="mui-media-body">123</div>
					<div class="mui-text-xs mui-margin-top-xs">待付款</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#"  class="mui-padding-0">
					<div class="mui-media-body">123</div>
					<div class="mui-text-xs mui-margin-top-xs">待接单</div>
				</a>
			</li>
			<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				<a href="#"  class="mui-padding-0">
					<div class="mui-media-body">123</div>
					<div class="mui-text-xs mui-margin-top-xs">我的产品</div>
				</a>
			</li>
		</ul> 
		<!--F3-->
		<ul class="mui-table-view mui-grid-view mui-grid-9 my-wallet">
			<li class="mui-table-view-cell mui-media mui-col-xs-12 mui-row">
				<div class="mui-col-xs-4 mui-text-xs">我的钱包</div>
				<div class="mui-col-xs-4 mui-text-jd mui-text-xl">&yen;8888.88</div>
				<div class="mui-col-xs-4 mui-text-xs mui-text-center mui-text-primary">查看</div>
			</li>
		</ul> 
		</div>
	</div>
</template>
<script>
export default {};
</script>
<style>
</style>


