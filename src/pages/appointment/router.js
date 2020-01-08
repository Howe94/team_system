import Vue from 'vue'
import Router from 'vue-router'
import {
    getCookie,
    setCookie
} from '../../utils/utils.js'
// 选择预约大厅
const chooseHall = () => import('./views/chooseHall/index.vue');
Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/chooseHall',
            meta: {
                requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
            },
        },
        {
            path: '/chooseHall',
            name: 'chooseHall',
            component: chooseHall,
            meta: {
                title: '选择预约大厅', // 页面标题
                requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
            }
        } 
    ]
})

/**
 * @param {string} url url参数
 * @param {string} param 要检测的参数
 * @param {RegExp} reg 要检测的参数的正则
 * @param {string=} routerAdd 路由地址，可选
 * @description 检查参数是否在路由前面
 * */
function checkQuery(url, param, reg, routerAdd) {
    let checkArr = url.split(param)
    let routerParam = /#\/[\w]{1,}/
    if (routerParam.test(checkArr[1]) || !routerParam.test(url)) {
        let query = reg.exec(url)[0]
        location.href = location.origin + location.pathname + '#' + routerAdd + query
    }
}

// 路由拦截
router.beforeEach((to, from, next) => {
    checkQuery(location.href, '?access_token=', /\?access_token=[\w\-@]{1,}/, to.path);
    // 设置全局标题
    document.title = to.meta.title || '统一申办'
    const cookeiToken = location.href.split('access_token=')[1];
    const cookie = getCookie('access-token')
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (cookie) { // 
            next();
        } else {
            if ( cookeiToken) {
                setCookie('access-token', cookeiToken);
                next();
            } else {
                window.location.href = `${process.env.BASE_URL}entering.html?rURL=${encodeURIComponent(window.location.href)}`;
            }

        }
    } else {
        next();
    }
})

export default router