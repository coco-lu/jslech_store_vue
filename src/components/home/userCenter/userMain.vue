<template>
    <div id="userCenter" class="mui-content">
		<!-- 绑定支付宝 -->
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-btn-link mui-pull-left">取消</a>
		    <a class="mui-btn mui-btn-blue mui-btn-link mui-pull-right">完成</a>
		    <h1 class="mui-title">标题</h1>
		</header>
		<div class="mui-content">
			<div class="mui-input-group mui-margin-top-sm mui-text-align">
				<div class="mui-input-row">
					<label>姓名</label>
					<input type="text" placeholder="姓名" v-model="real_name">
				</div>
				<div class="mui-input-row">
					<label>支付宝帐号</label>
					<input type="text" placeholder="新手机号码" v-model="alipay_account">
				</div>
				<div class="mui-input-row verifybox">
					<label>输入验证码</label>
					<input type="text" placeholder="5位验证码">
					<a class="mui-text-xs" @tap="bindPayAccount()">获取验证码</a>
				</div>
			</div>
		</div>





		<!-- 修改密码 -->
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">找回密码</h1>
		</header>
		<div class="mui-content">
		    <div class="mui-input-group mui-text-align">
		    	<div class="mui-input-row">
					<label>手机号码</label>
					<input type="text" class="mui-input-clear" placeholder="请输入注册时的手机号码">
				</div>
				<div class="mui-input-row mui-password">
					<label>输入新密码</label>
					<input type="password" class="mui-input-password" v-model="newPassword">
				</div>
				<div class="mui-input-row mui-password">
					<label>再输一次</label>
					<input type="password" class="mui-input-password" v-model="newPassword2">
				</div>
				<div class="mui-input-row verifybox">
					<label>输入验证码</label>
					<input type="text" placeholder="5位验证码" v-model="validataCode">
					<a class="mui-text-xs">获取验证码</a>
				</div>
		    </div>
		    <div class="mui-margin">
		    	<button type="button" class="mui-btn mui-btn-blue mui-btn-block mui-padding-sm" @tap="findPassword()">确认修改</button>
		    </div>
		</div>





		<!-- 提现明细 -->
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <h1 class="mui-title">提现记录</h1>
		</header>
		<!--下拉刷新容器-->
		<div id="pullrefresh" class="mui-content">
		    <div class="mui-card" v-for='(item,i) in depositListData' :key='i'>
				<div class="mui-card-header mui-text-xs">
					<span>{{item.serialnumber}}</span>
					<span>用户自提</span>
					<span v-show="item.ischuli==0">{{item.reason}}</span>
					<span class="mui-text-success" v-show="item.ischuli==1">{{item.reason}}</span>
					<span class="mui-text-danger" v-show="item.ischuli==2">{{item.reason}}</span>
				</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="mui-row mui-text-align">
							<div class="mui-col-sm-12 mui-col-xs-12">金额：&yen;{{item.amount}}</div>
							<div class="mui-col-sm-12 mui-col-xs-12">收款帐号：{{item.account}}</div>
							<div class="mui-col-sm-12 mui-col-xs-12">申请时间：{{item.addtime}}</div>
							<div class="mui-col-sm-12 mui-col-xs-12">完成时间：{{item.finishedtime}}</div>
						</div>
					</div>
				</div>
		  	</div>
		</div>




		<!-- 收支明细 -->
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">收支明细</h1>
		</header>
		<div id="pullrefresh" class="mui-content">
			<ul class="mui-table-view">
				<li class="mui-table-view-cell">
					<div class="mui-row mui-text-xs">
						<div class="mui-col-sm-2 mui-col-xs-2">金额</div>
						<div class="mui-col-sm-7 mui-col-xs-7">备注/时间</div>
						<div class="mui-col-sm-3 mui-col-xs-3 mui-text-center">类型</div>
					</div>
				</li>
				<li class="mui-table-view-cell" v-for='(item,i) in walletListData' :key='i'>
					<div class="mui-row mui-text-xs">
						<div class="mui-col-sm-2 mui-col-xs-2 mui-text-jd">{{item.amount}}</div>	
						<div class="mui-col-sm-7 mui-col-xs-7">[备注]{{item.beizhu}}<br />[时间]{{item.addtime}}</div>
						<div class="mui-col-sm-3 mui-col-xs-3 mui-text-center">{{item.beizhu}}</div>
					</div>
				</li>
			</ul>

		</div>






		<!-- 提现 -->
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <a class="mui-btn mui-btn-blue mui-btn-link mui-pull-right" id="depositList">提现记录</a>
		    <h1 class="mui-title">提现申请</h1>
		</header>
		<div class="mui-content">
			<div class="mui-padding-sm mui-margin-top mui-text-align">
				<div class="mui-row mui-margin-bottom">
					<div class="mui-col-sm-5 mui-col-xs-5">可提现金额</div>
					<div class="mui-col-sm-7 mui-col-xs-7 mui-text-jd">&yen;{{userData.wallet}}</div>
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
						<input type="text" placeholder="支付宝帐号" readonly="readonly"  :value=userData.alipay_account>
						<p class="mui-margin-0">尚未绑定支付宝，<a id="payAccount">点击绑定</a></p>
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





		<!-- 我的钱包 -->
		<header class="mui-bar mui-bar-nav">
		    <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
		    <a class="mui-btn mui-btn-blue mui-btn-link mui-pull-right" id="walletList">明细</a>
		    <h1 class="mui-title">我的钱包</h1>
		</header>
		<!--下拉刷新容器-->
		<div id="pullrefresh" class="mui-content">
			<div class="mui-bg-warning mui-padding mui-text-fff">
				<p class="mui-padding-sm mui-text-fff">我的钱包(元)<a href="" class="mui-pull-right mui-text-fff" id="deposit">提现</a></p>
				<p class="mui-text-xxxl mui-text-center mui-text-fff"><span class="mui-text-xl">&yen;</span> {{userData.wallet}}</p>
			</div>
			<ul class="mui-table-view mui-grid-view mui-grid-9 sub-nav">
				<li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
					<a href="#" class="mui-padding-0">
						<div class="mui-media-body">{{userData.wallet}}</div>
						<div class="mui-text-xs mui-margin-top-xs">提现余额(元)</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6">
					<a href="#"  class="mui-padding-0">
						<div class="mui-media-body">{{userData.wallet}}</div>
						<div class="mui-text-xs mui-margin-top-xs">专有余额(元)</div>
					</a>
				</li>
			</ul> 
		</div>



		<!-- 基本信息 -->
		<!-- <div class="mui-page-content">
			<div class="mui-scroll-wrapper"> -->
				<ul class="mui-table-view">
					<div class="mui-navbar-inner mui-bar mui-bar-nav">
						<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left">
							<span class="mui-icon mui-icon-left-nav"></span>
						</button>
						<h1 class="mui-center mui-title">基本信息</h1>
					</div>
					<ul class="mui-table-view mui-text-align">
						<li class="mui-table-view-cell" id="headImage">
							<a id="head" class="mui-navigate-right">头像
							<span class="mui-pull-right head">
							<img class="head-img mui-action-preview" id="head-img1" :src="'/baseInfo'+userData.portrait"/>
							</span>
						</a>
						</li>
						<li class="mui-table-view-cell">
							<a>用户名 <span class="mui-pull-right mui-margin-right-lg">{{userData.user_name}}</span></a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right" href="#realname">姓名 <span class="mui-pull-right mui-margin-right-lg">{{userData.real_name}}</span></a>
						</li>
						<li class="mui-table-view-cell" id="sex">
							<a class="mui-navigate-right">性别 <span id='userResult' class="mui-pull-right mui-margin-right-lg">男</span></a>
						</li>
						<li class="mui-table-view-cell">
							<a href="#email"  class="mui-navigate-right">邮箱地址<span class="mui-pull-right  mui-margin-right-lg">{{userData.email}}</span></a>
						</li>
					</ul>
				</ul>
			<!-- </div>
		</div> -->

		<!-- 用户中心 -->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-padding-vertical-lg">
				<div class="mui-text-center" @tap="editAccount()">
					<div><img class="mui-media-object head-img" :src="'/baseInfo'+userData.portrait"></div>
					<div class="mui-media-body">账号:{{userData.user_name}} <span class="mui-icon mui-icon-compose mui-icon-xs mui-text-8e8e8e"></span></div>
				</div>
			</li>
		</ul>
		<ul class="mui-table-view mui-text-align">
			<li class="mui-table-view-cell" @tap="myWallet()">
				<a class="mui-navigate-right">我的钱包</a>
			</li>
			<li class="mui-table-view-cell" id="payAccount">
				<a class="mui-navigate-right">支付宝帐号</a>
			</li>
			<li class="mui-table-view-cell" @tap="openShopManage()">
				<a class="mui-navigate-right">店铺管理</a>
			</li>
			<li class="mui-table-view-cell" @tap="openContactUs()">
				<a id="tel" class="mui-navigate-right">联系客服</a>
			</li>
			<li class="mui-table-view-cell" @tap="openAboutlech()">
				<a class="mui-navigate-right">关于乐成</a>
			</li>
			<li class="mui-table-view-cell">
				<a id="update" class="mui-navigate-right">版本更新<span class="mui-pull-right mui-margin-right-lg">v3.1.0</span></a>
			</li>
		</ul>
		<div class="mui-margin" @tap="loginOut()">
			<button type="button" class="mui-btn mui-btn-danger mui-btn-block mui-padding-xs">退出当前帐号</button>
		</div>
	</div>
</template>

<script>
export default {
	name:'userCenter',
	data () {
		return {
			userData:{},
			walletListData:[],
			depositListData:[],
			newPassword:'',
			newPassword2:'',
			validataCode:'',
			alipay_account:'',
			real_name:localStorage.getItem("real_name")
		}
	},
	mounted(){
		this.userInit();
		this.myWalletInit();
		this.walletListInit();
		this.depositListInit();
	},
	methods:{
		//用户中心请求默认数据
		userInit(){
			this.$global.signAjax({
				url:this.$global.serverUrl+'/StoreApi/baseInfo',
				type: 'POST',
				async: false,
				data: {
					userId: localStorage.getItem("userId")
				},
				success: (response)=>{
					if(response.code===0){	
						this.userData=response.data;
						localStorage.setItem('real_name',this.userData.real_name);
						console.log(JSON.stringify(this.userData));
					}else{
						mui.toast(response.msg);
					}
				}
			});
		},
		//我的钱包请求默认数据
		myWalletInit(){
			this.$global.signAjax({
				url:this.$global.serverUrl+'/StoreApi/iniDeposit',
				type: 'POST',
				async: false,
				data: {
					userId: localStorage.getItem("userId")
				},
				success: (response)=>{
					if(response.code===0){	
						this.userData=response.data;
						console.log(JSON.stringify(this.userData));
					}else{
						mui.toast(response.msg);
					}
				}
			});
		},

		// 提现初始化
		editAccount(){
			// this.$global.openNewPage('./account');
			this.$router.push('/account');
		},

		// 余额明细
		walletListInit(){
			this.$global.signAjax({
				url:this.$global.serverUrl+'/StoreApi/walletLogs',
				type: 'POST',
				async: false,
				data: {
					userId: localStorage.getItem("userId"),
					page:1
				},
				success: (response)=>{
					if(response.code===0){	
						this.walletListData=response.data;
						console.log(JSON.stringify(this.walletListData));
					}else{
						mui.toast(response.msg);
					}
				}
			});
		},
		// 提现明细
		depositListInit(){
			this.$global.signAjax({
				url:this.$global.serverUrl+'/StoreApi/depositLogs',
				type: 'POST',
				async: false,
				data: {
					userId: localStorage.getItem("userId"),
					page:1
				},
				success: (response)=>{
					if(response.code===0){	
						this.depositListData=response.data;
						console.log(JSON.stringify(this.depositListData));
					}else{
						mui.toast(response.msg);
					}
				}
			});
		},
		// 修改密码
		findPassword(){
			console.log('1212121212121');
			this.$global.signAjax({
				url:this.$global.serverUrl+'/StoreApi/modifyPassword',
				type: 'POST',
				async: false,
				data: {
					userId: localStorage.getItem("userId"),
					password: this.newPassword
				},
				success: (response)=>{
					if(response.code===0){
						mui.toast(response.msg);
					}else{
						mui.toast(response.msg);
					}
				},
				error: (xhr, type, errorThrown)=> {
                    //异常处理
                    console.log(JSON.stringify(xhr));
                }
			});
		},
		bindPayAccount(){
			this.$global.signAjax({
				url:this.$global.serverUrl+'/StoreApi/bindAlipay',
				type: 'POST',
				async: false,
				data: {
					real_name:this.real_name,
					alipay_account: this.alipay_account,
					userId: localStorage.getItem("userId"),
				},
				success: (response)=>{
					if(response.code===0){
						mui.toast(response.msg);
					}else{
						mui.toast(response.msg);
					}
				}
			});
		}


	}
}
</script>
<style>

</style>
