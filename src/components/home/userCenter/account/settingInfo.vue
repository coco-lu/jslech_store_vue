<template>
    <div id="app" class="mui-views">
        <div id="setting" class="mui-page">
			<div class="mui-navbar-inner mui-bar mui-bar-nav">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left"><span class="mui-icon mui-icon-left-nav"></span></button>
				<h1 class="mui-center mui-title">设置</h1>
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell" @tap="openAccount()">
					<a class="mui-navigate-right">基本信息</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right" href="#password">修改密码</a>
				</li>
				<li class="mui-table-view-cell">
					<a class="mui-navigate-right" href="#mobile">修改手机号码</a>
				</li>
				<li class="mui-table-view-cell">
					注册时间 <span class="mui-pull-right mui-margin-right-lg mui-text-xs">2017-10-17</span>
				</li>
			</ul>
		</div>
    </div>
</template>

<script>
 
</script>
<style>

</style>
