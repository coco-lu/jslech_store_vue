import Vue from "vue";

/*
 * 功能描述：封装一些常用的方法
 * createTime：2017-08-23
 * updateTime：2017-08-23
 * createAuthor：小蚂蚁
 * updateAuthor：小蚂蚁
 */
export default {

    // [file:///var/mobile/Containers/Data/Application/0DF978B8-E16A-4860-BBDE-F758381591E3/Documents/Pandora/apps/HBuilder/www/]
    appUrl: '',
    serverUrl: "https://demo.jslech.com/d/admin.php", //测试环境接口地址
    //  serverUrl: "https://www.jslech.com/d/admin.php", //正式环境接口地址
    errorUrl: "https://www.jslech.com/d/admin.php/RiderApi/logRequestError",
    aniShow: {},
    activeTab: '',
    outer: {
        top: '0px',
        bottom: '50px'
    },
    inner: {
        top: '100px',
        bottom: '0px'
    },
    nostyle: {
        top: '0px',
        bottom: '0px'
    },
    //判断token是否过期
    isOverdue: function(data) {
        if (data.code == 303) {
            openNewPage('./login.html')
            return true
        } else {
            return false
        }
    },
    //AJAX请求方法
    ErrorData: function(url, type, async, param) {
        mui.ajax(url, {
            async: async,
            data: param,
            dataType: 'json', //服务器返回json格式数据
            type: type, //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {

            },
            error: function(xhr, type, errorThrown) {}
        });
    },
    ServiceData: function(url, type, async, param, callback) {
        var _self = this;
        mui.ajax(url, {
            async: async,
            data: param,
            dataType: 'json', //服务器返回json格式数据
            type: type, //HTTP请求类型
            timeout: 10000, //超时时间设置为10秒；
            success: function(data) {
                //服务器返回响应
                if (data.code === 303) {
                    mui.openWindow({
                        url: '../login.html',
                        id: 'login.html'
                    });
                } else {
                    callback && callback(data);
                }
            },
            error: function(xhr, type, errorThrown) {
                //异常处理
                _self.ErrorData(_self.errorUrl, "POST", false, {
                    userId: localStorage.getItem('userId'),
                    xhr: JSON.stringify(xhr),
                    type: type,
                    errorThrown: JSON.stringify(errorThrown),
                    url: url
                });
            }
        });
    },

    /**
     * 发送带签名ajax请求
     * @Author ping.lu
     * @Date 2018/04/13
     * @Description 根据签名key组装参数后自动生成签名，并将原参数进行处理后发送ajax请求
     * @param settings
     *      settings用法同标准ajax基本用法，并对部分参数做了如下优化：
     *          1、添加如下字段默认值
     *          type: 'GET',
     *          async: true,
     *          dataType: 'json'
     *          2、为data添加默认值signKey
     *          3、自动为data添加时间戳 ts
     *          4、自动为data添加sign，其中sign根据原data参数和data.signKey生成
     * @Version 1.0.0
     */
    signAjax: function(settings) {
        var _self = this;
        if (settings != null) {
            if (settings.url == null || settings.url === '') {
                console.error('请求url不能为空');
                return;
            }
            setObjectDefault(settings, {
                type: 'GET',
                async: true,
                dataType: 'json'
            });

            if (settings.data != null) {
                var data = settings.data;
                data.ts = Math.round(new Date().getTime() / 1000).toString();
                var urlArr = settings.url.split('/');
                setObjectDefault(data, {
                    signKey: urlArr[urlArr.length - 1]
                });

                data.sign = _self.getSign(data, settings.type, data.signKey);
                if (settings.error == null) {
                    settings.error = function(xhr, type, errorThrown) {
                        _self.ErrorData(_self.errorUrl, "POST", false, {
                            userId: localStorage.getItem('userId'),
                            xhr: JSON.stringify(xhr),
                            type: type,
                            errorThrown: JSON.stringify(errorThrown),
                            url: settings.url
                        });
                    };
                }
                mui.ajax(settings.url, settings);
            }
        }
        var exampleSignAjax = function() {
            signAjax({
                url: '',
                type: 'POST',
                async: true,
                dataType: 'json', //服务器返回json格式数据
                data: {
                    signKey: ''
                },
                timeout: 10000, //超时时间设置为10秒；
                success: function(data) {

                },
                error: function(xhr, type, errorThrown) {
                    //异常处理
                    alert("请求发送失败");
                }
            });
        };

        function setObjectDefault(obj, defaultObj) {
            if (typeof(obj) === 'object' && typeof(defaultObj) === 'object') {
                for (var key in defaultObj) {
                    if (obj[key] == null) {
                        obj[key] = defaultObj[key];
                    }
                }
            }
            return obj;
        }
    },
    //rsa公钥加密
    rsaEncrypt: function(pubKey, str) {
        var crypt = new JSEncrypt();
        crypt.setKey(pubKey);
        return crypt.encrypt(str);
    },
    //Aes解密
    aesDecrypt: function(encrypted, key, vi) { //公钥和密码加密后后台返回来的密文生成的token，公钥和密码加密后的后16位，公钥和密码加密后的后16位
        key = CryptoJS.enc.Utf8.parse(key);
        var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
            iv: CryptoJS.enc.Utf8.parse(vi)
        });
        decrypted = CryptoJS.enc.Utf8.stringify(decrypted); // 转换为 utf8 字符串
        return decrypted;
    },
    //Aes加密
    aesEncrypt: function(encryptText, key, iv) { //公钥和密码加密后后台返回来的密文生成的token，公钥和密码加密后的后16位，公钥和密码加密后的后16位
        var key = CryptoJS.enc.Utf8.parse(key);
        var iv = CryptoJS.enc.Utf8.parse(iv);
        var encrypted = CryptoJS.AES.encrypt(encryptText, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted;
    },
    //生成签名
    getSign: function(params, method, action) {
        var str_assign = '';
        //params转化数组
        var arrKeyParams = [];
        for (var key in params) {
            arrKeyParams.push(key);
        }
        //按照键值名从高到低排序
        arrKeyParams.sort().reverse();
        //拼接键值名_键值
        for (var index in arrKeyParams) {
            var sKey = arrKeyParams[index];
            str_assign += (sKey + '_' + params[sKey]);
        }
        //拼接其他
        str_assign += method.toLowerCase();
        str_assign += action.toLowerCase();
        str_assign += localStorage.getItem("token");
        return CryptoJS.MD5(str_assign).toString();
    },
    createPage: function(subpages, subpage_style, isFresh, ele) {
        console.log('ele:' + JSON.stringify(ele));
        console.log("subpage_style:" + JSON.stringify(subpage_style));
        var isFresh = isFresh || 0;
        var ele = ele || null;
        var _self = this;
        var subpage_style = eval('_self.' + subpage_style);
        console.log('subpage_style12121:' + JSON.stringify(subpage_style));
        console.log('subpages:' + subpages);
        if (ele == null) {
            var ele = plus.webview.getLaunchWebview();
            console.log(' elenull:' + JSON.stringify(ele));
        }
        //console.log( "窗口标识: "+ele.id );
        if (subpages == _self.activeTab) {
            return;
        }

        plus.webview.hide(_self.activeTab);
        console.log('activeTab:' + _self.activeTab);
        if (_self.aniShow[subpages] && isFresh == 0) { //判断aniShow对象里面是否有要打开的目标页面
            plus.webview.show(subpages); //以窗口形式显示当前打开页面
        } else {
            if (_self.aniShow[subpages]) {
                plus.webview.close(subpages); //关闭页面
            }
            var sub = plus.webview.create(subpages, subpages, subpage_style); //创建新窗口，存放页面需要的属性路径、id、样式
            var temp = {}; //定义另一个新对象
            temp[subpages] = "true"; //将页面放到新对象里面，赋一个布尔类型值
            mui.extend(_self.aniShow, temp); //将两个对象合并
            //获取当前选中的页面
            ele.append(sub); //并将此页面追加到sub创建的数组窗口里面
        }
        _self.activeTab = subpages;
    },
    //打开新窗口页面
    openNewPage: function(fileName) {
        mui.openWindow({
            url: fileName + '.html',
            id: fileName + '.html',
            show: {
                aniShow: 'fade-right-out' //页面显示动画；
            }
        });
    },
};


//监听网络状态
function onNetChange() {
    //获取当前网络类型
    var nt = plus.networkinfo.getCurrentType();
    switch (nt) {
        case plus.networkinfo.CONNECTION_ETHERNET:
        case plus.networkinfo.CONNECTION_WIFI:
            mui.toast("当前网络为WiFi");
            break;
        case plus.networkinfo.CONNECTION_CELL2G:
        case plus.networkinfo.CONNECTION_CELL3G:
        case plus.networkinfo.CONNECTION_CELL4G:
            mui.toast("当前网络为非WiFi");
            break;
        default:
            btnArray = ["设置网络", "重试"];
            mui.confirm('网络异常，请稍后重试？', '', btnArray, function(e) {
                if (e.index == 0) {

                    if (plus.os.name == "Android") {
                        var main = plus.android.runtimeMainActivity();
                        var Intent = plus.android.importClass("android.content.Intent");
                        var mIntent = new Intent('android.settings.SETTINGS');
                        main.startActivity(mIntent);
                    } else {
                        plus.runtime.launchApplication({
                            action: 'prefs:root=MOBILE_DATA_SETTINGS_ID'
                        }, function(e) {}); //WIFI
                    }
                } else {
                    location.reload();
                }
            });
            break;
    }

};