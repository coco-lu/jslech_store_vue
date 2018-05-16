<template>
    <nav class="mui-bar mui-bar-tab mui-footer">
		<div id="defaultTab" class="items mui-active">
			<router-link to="/">
				<span class="mui-icon mui-icon-home icon"></span>
				<span class="label">首页</span>
			</router-link>
		</div>
		<div class="items">
			<router-link to="/account">
				<span class="mui-icon iconfont icon-product icon"><span class="mui-badge">9</span></span>
				<span class="label">商品管理</span>
			</router-link>
		</div>
		<div class="items">
			<router-link to="/orders">
				<span class="mui-icon iconfont icon-product icon"></span>
				<span class="label">订单管理</span>
			</router-link>
		</div>
		<div class="items">
			<router-link to="/userCenter">
				<span class="mui-icon mui-icon-contact icon"></span>
				<span class="label">用户中心</span>
			</router-link>
		</div>
	</nav>
</template>

<script>
 
</script>
<style>
	.items{
		display: table-cell;
		overflow: hidden;
		width: 1%;
		height: 50px;
		text-align: center;
		vertical-align: middle;
		white-space: nowrap;
		text-overflow: ellipsis;
		color: #929292;
	}
	.items .icon {
		top: 3px;
		width: 24px;
		height: 24px;
		padding-top: 0;
		padding-bottom: 0;
	}
	.icon~.label {
		font-size: 11px;
		display: block;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
