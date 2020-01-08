<template>
  <div id="app"></div>
</template>


<script>
import { interOutnetConfig } from "../../utils/appointment.url.js";
import { Base64 } from "js-base64";
export default {
  name: "entering",
  data() {
    return {};
  },
  methods: {
    getOutnetConfig() {
      interOutnetConfig(
        {
          key: "PROVINCE_AUTH"
        },
        "get"
      )
        .then(res => {
          if (Number(res.status) === 200) {
            const value = JSON.parse(res.data.value);
            sessionStorage.setItem("auth_url", value.auth_url);
            sessionStorage.setItem("auth_logout_url", value.auth_logout_url);
            sessionStorage.setItem(
              "redirect_logout_url",
              value.redirect_logout_url
            );
            const client_id = value.client_id;
            const client_secret = value.client_secret;
            const service = value.service;
            const scope = value.scope;
            const response_type = value.response_type;
            const auth_url = value.auth_url;
            const authorize_url = value.authorize_url;
            let pattern = /#\/[\w]{1,}\?access_token=[\w\-%]{1,}/;
            let logout =  this.$route.query.logout;
            // 退出登录之后再次登录回跳到首页
            if(logout=='true'){
                window.location.href = `${process.env.BASE_URL}managerCenter.html#/index`;
            }
            let rURL = this.$route.query.rURL.replace(pattern, "");

            const redirect_url =
              value.redirect_url + "?rURL=" + Base64.btoa(rURL);
            console.log("---redirect_url--", redirect_url);
            // 因为统一认证有问题 增加了本地登录 该字段authorize_url是配置跳转统一认证登录还是本地登录
            const AuthRedirect = `${auth_url}${authorize_url}?service=initService&response_type=${response_type}&client_id=${client_id}&scope=${scope}&client_secret=${client_secret}&redirect_uri=${redirect_url}`;
            window.location.href = AuthRedirect;
          } else {
            console.log(res.desc);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.$loading({
      fullscreen: true,
      background: "rgba(0, 0, 0, 0.8)",
      text: "正在跳转,请稍后..."
    });
    this.getOutnetConfig();
  }
};
</script>
<style lang="scss" scoped>
</style>


