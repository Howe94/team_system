//区分身份证位数及验证
function isTrueValidateCodeBy18IdCard(a_idCard) {
    var sum = 0; // 声明加权求和变量
    var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子;
    var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值，10代表X;
    if (a_idCard[17] == "X") {
        a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
    }
    for (var i = 0; i < 17; i++) {
        sum += Wi[i] * a_idCard[i]; // 加权求和
    }
    var valCodePosition = sum % 11; // 得到验证码所位置
    if (a_idCard[17] == ValideCode[valCodePosition]) {
        return true;
    }
    return false;
}

function isValidityBrithBy18IdCard(idCard18) {
    var year = idCard18.substring(6, 10);
    var month = idCard18.substring(10, 12);
    var day = idCard18.substring(12, 14);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 这里用getFullYear()获取年份，避免千年虫问题
    if (
        temp_date.getFullYear() != parseFloat(year) ||
        temp_date.getMonth() != parseFloat(month) - 1 ||
        temp_date.getDate() != parseFloat(day)
    ) {
        return false;
    }
    return true;
}

function isValidityBrithBy15IdCard(idCard15) {
    var year = idCard15.substring(6, 8);
    var month = idCard15.substring(8, 10);
    var day = idCard15.substring(10, 12);
    var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
    // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
    if (
        temp_date.getYear() != parseFloat(year) ||
        temp_date.getMonth() != parseFloat(month) - 1 ||
        temp_date.getDate() != parseFloat(day)
    ) {
        return false;
    }
    return true;
}
/**
 *  正则校验证件类型
 * n: 证件类型
 * value: 证件数值
 * callback: 回调函数
 * errors:错误提示
 */
export function getCardType(n, value, callback, errors) {
    switch (n) {
        case "10":
            var ret = false;
            if (value.length == 15) {
                ret = isValidityBrithBy15IdCard(value);
            } else if (value.length == 18) {
                var a_idCard = value.split(""); // 得到身份证数组
                if (
                    isValidityBrithBy18IdCard(value) &&
                    isTrueValidateCodeBy18IdCard(a_idCard)
                ) {
                    ret = true;
                }
            }
            if (ret == false) {
                errors.push("请填写正确的身份证！");
            }
            break;
        case "11":
            var rel11 = /^[0-9a-zA-Z]{4,15}$/;
            if (rel11.test(value) == false) {
                errors.push("请填写正确的军官证！");
            }
            break;
        case "12":
            var rel12 = /^[0-9a-zA-Z]{4,15}$/;
            if (rel12.test(value) == false) {
                errors.push("请填写正确的士兵证！");
            }
            break;
        case "13":
            var rel13 = /^[0-9a-zA-Z]{8,9}$/;
            if (rel13.test(value) == false) {
                errors.push("请填写正确的警官证！");
            }
            break;
        case '14':
            var rel14 = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
            if (rel14.test(value) == false) {
                errors.push("请填写正确的港澳居民来往内地通行证！");
            }
            break;
        case "15":
            var rel15 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (rel15.test(value) == false) {
                errors.push("请填写正确的台湾居民来往大陆通行证！");
            }
            break;
        case '16':
            var rel16 = /^((\s?[A-Za-z])|([A-Za-z]{2}))\d{6}((\([0−9aA]\))|(\([0-9aA]\)))$/;
            if (rel16.test(value) == false) {
                errors.push("请填写正确的香港身份证！");
            }
            break;
        case "17":
            var rel17 = /^[1|5|7][0-9]{6}\([0-9Aa]\)$/;
            if (rel17.test(value) == false) {
                errors.push("请填写正确的澳门身份证！");
            }
            break;
        case "18":
            var rel18 = /^[A-KM-QT-XZ]{1}[0-9]{9}$/;
            if (rel18.test(value) == false) {
                errors.push("请填写正确的台湾身份证！");
            }
            break;
        case "19":
            var rel19 = /^[0-9a-zA-Z]{4,20}$/;
            if (rel19.test(value) == false) {
                errors.push("请填写正确的退伍证！");
            }
            break;
        case "20":
            var rel20 = /^[0-9a-zA-Z]{4,20}$/;
            if (rel20.test(value) == false) {
                errors.push("请填写正确的护照！");
            }
            break;
        case "21":
            var rel21 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (rel21.test(value) == false) {
                errors.push("请填写正确的驾照！");
            }
            break;
        case "90":
            var rel90 = /^[0-9a-zA-Z]{4,20}$/;
            if (rel90.test(value) == false) {
                errors.push("请填写正确的证件号码！");
            }
            break;
    }
    if (errors.length) {
        callback(errors);
    }
}

/**
 * 获取链接上参数值
 * name ：链接上相关的参数名
 */
export function getParams(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg)
    if (r != null) return unescape(r[2])
    return null
}

// 验证手机号
export function isPhone (value) {
    var reg = /^1[34578]\d{9}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
}

// 验证固定电话
export function isTelPhone (value) {
    var reg = /^([0-9]{3,4}-)?[0-9]{7,8}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
}

// 验证邮政编码
export function isPostCode (value) {
    var reg =  /^[1-9][0-9]{5}$/
    if (reg.test(value)) {
      return true
    } else {
      return false
    }
}

// 验证统一社会信用代码
export function isCreditCode (credNum) {
    let ret = false;
    if (credNum.length === 18) {
      var reg = /^([0-9ABCDEFGHJKLMNPQRTUWXY]{2})([0-9]{6})([0-9A-Z]{8})([0-9|X]{1})([0-9ABCDEFGHJKLMNPQRTUWXY]{1})$/;
      if (reg.test(credNum)) {
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY'
        var ws = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
        let sum = 0
        for (let i = 0; i < 17; i++) {
          sum += str.indexOf(credNum.charAt(i)) * ws[i]
        }
        let c18 = 31 - (sum % 31)
        if (c18 === 31) {
          c18 = '0'
        }
  
        if (str.charAt(c18) === credNum.charAt(17)) {
          ret = true
        }
      }
    }
    return ret;
}


// 组织机构代码 true为真，false为假
export function isValidOrgCode (orgCode) {
    var ret=false;
    if(orgCode){
        //为了便于人工识别，应使用一个连接符“-”分隔本体代码与校验码。机读时，连接符省略。
        var reg = /^([0-9A-Z]){8}[0-9|X]$/;
        if (reg.test(orgCode) && orgCode.length == 9) {
            var ws = [3, 7, 9, 10, 5, 8, 4, 2];
            var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var sum = 0;
            for (var i = 0; i < 8; i++) {
                sum += str.indexOf(orgCode.charAt(i)) * ws[i];
            }
            var c9 = 11 - (sum % 11);
            if(c9 == 10){
                c9 = 'X';
            }else if(c9 == 11){
                c9 = '0'
            }
            if(c9 == orgCode.charAt(8)){
                ret = true;
            }
        }
    }
    return ret;
}

// 营业执照号
export function isRegNum (gets) {
    var ret = false;
    if (gets.length == 15) {
        var sum = 0;
        var s = [];
        var p = [];
        var a = [];
        var m = 10;
        p[0] = m;
        for (var i = 0; i < gets.length; i++) {
            a[i] = parseInt(gets.substring(i, i + 1), m);
            s[i] = (p[i] % (m + 1)) + a[i];
            if (0 == s[i] % m) {
                p[i + 1] = 10 * 2;
            } else {
                p[i + 1] = (s[i] % m) * 2;
            }
        }
        if (1 == (s[14] % m)) {
            //营业执照编号正确!
            ret = true;
            //alert("营业执照编号正确!");
        } else {
            //营业执照编号错误!
            ret = false;
            //alert("营业执照编号错误!");
        }
    } //如果营业执照为空
    else if ("" == gets) {
        ret = false;
    } else {
        ret = false;
        //alert("营业执照格式不对，必须是15位数的！");
    }
    return ret;
}

// 税务登记编号验证 
export function isTaxPayer (gets) {
    var ret = false;
    if (gets.length == '15') {
        var re1 = /^[0-9A-Z]{15}$/;
        if (re1.test(gets)) {
            ret = true;
        } else {
            ret = false;
        }
    } else if (gets.length == '20') {
        var re2 = /^[0-9A-Z]{20}$/;
        if (re2.test(gets)) {
            ret = true;
        } else {
            ret = false;
        }
    } else {
        ret = false;
    }
    return ret
}

//获取cookie
export function getCookie(name) {
  var arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if ((arr = document.cookie.match(reg))){
    return decodeURI(arr[2]);
  }else{
    return null;
  }
}


// 设置cookie
export function setCookie(c_name, value, expiredays) {
  var exdate = new Date()
  exdate.setDate(exdate.getDate() + expiredays)
  document.cookie = c_name + "=" + value +
    ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString())+ ";path=/"
}

export function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if(keys) {
        for(var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}

export function funcUrlDel(name){
    var loca = window.location;
    var baseUrl = loca.origin + loca.pathname + "?";
    var query = loca.search.substr(1);
    if (query.indexOf(name)>-1) {
        var obj = {}
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
            arr[i] = arr[i].split("=");
            obj[arr[i][0]] = arr[i][1];
        };
        delete obj[name];
        var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
        return url
    }else{
        return window.location.href;
    };
}