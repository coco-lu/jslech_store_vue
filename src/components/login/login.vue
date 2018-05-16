<template>
  <div class="mui-content">
			<div class="mui-text-center mui-padding-top-xl"><p><img src="./imgs/logo.png" width=20% ></p><p class="mui-text-fff mui-text-xs">乐成易购商户版v1.0.0</p></div>
			<form id='login-form' class="login-form">
				<div class="mui-input-row">
					<label>账号</label>
					<input id='username' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" v-model="userData.userName">
				</div>
				<div class="mui-input-row">
					<label>密码</label>
					<input id='password' type="password" class="mui-input-clear mui-input" placeholder="请输入密码" v-model="userData.userPassWord">
				</div>
			</form>
			<div class="mui-margin-top-lg">
				<button @tap="loginEvent()" id='login' class="mui-btn mui-btn-block mui-btn-yellow mui-padding-vertical-sm">登录</button>
				<div class="mui-text-right mui-text-xs mui-text-fff mui-margin-top-lg"><span class="mui-icon mui-icon mui-icon-info mui-icon-xs"></span> 遇到问题请咨询客服</div>
			</div>
			<div class="mui-content-padded oauth-area">
				&copy;乐成易购 版权所有<br/>
				江苏乐成网络科技有限公司 jslech.com 2016-2018
			</div>
		</div>
</template>

<script>
export default {
  name: 'login',
  data () {
      return {
          userData:{
              'userName' : '',
              'userPassWord' : ''
          }
      }
  },
  methods: {
    loginEvent() {
        console.log(this.userData);
        // console.log(this.$global);
        for(let key in this.userData) {
                if(this.userData[key] == '') {
                    return mui.toast('账号和密码不可以为空');
                }
        }
        // 请求借口获取签名
        this.$http.post(this.$global.serverUrl + '/StoreApi/startLogin', {}, ).then((data)=> {
            // 请求成功
            console.log(data);
            const dataList = data.body;
            if(dataList.code == 0) {
                const public_key = dataList.data.public_key;
                console.log(public_key);
                const userPassWord = this.userData.userPassWord;
                const str = this.$global.rsaEncrypt(public_key, userPassWord);
                // console.log(str);
                return str;
            }else {

            }

        },(err)=> {
            // 请求失败
            console.log(err);
        }).then(str=>{
            // 成功获取签名，开始登陆操作
            console.log(str);
            const param = {
                'user_name': this.userData.userName,
                'password': str
            }
            console.log(param);
            this.$http.post(this.$global.serverUrl + '/StoreApi/doLogin', param, {
                emulateJSON:true
            }).then(data=> {
                console.log(data);
                const dataList = data.body;
                if(this.$global.isOverdue(dataList)) {
                    return
                }else {
                    if(dataList.code == 0) {
                        //const token = dataList.data.token;
                        const key = param.password.substr(-16);
                        const token = this.$global.aesDecrypt(dataList.data.token, key, key);
                        console.log(token);
                        localStorage.setItem('token', token);
                        localStorage.setItem('userId', dataList.data.userId);
                        this.$global.openNewPage('./index');
                    }else {
                        mui.toast(dataList.data.msg);
                    }
                }
                
            })
        })
    }
  }
}
</script>

<style>
    
</style>
