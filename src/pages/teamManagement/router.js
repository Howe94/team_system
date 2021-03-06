import Vue from 'vue'
import Router from 'vue-router'
import {
    getCookie,
    setCookie
} from '../../utils/utils.js'
// 队伍列表
const chooseTeam = () => import('./views/chooseTeam/index.vue');
//队伍详情
const teamInfo = () => import('./views/teamInfo/index.vue');
// 项目进度
const taskSchedule = () => import('./views/taskSchedule/index.vue');
//项目管理
const projectManage = () => import('./views/projectManage/index.vue')
Vue.use(Router)

const router = new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            redirect: '/chooseTeam',
            meta: {
                requireAuth: false, // 添加该字段，表示进入这个路由是需要登录的
            },
        },
        {
            path: '/chooseTeam',
            name: 'chooseTeam',
            component: chooseTeam,
            meta: {
                title: '选择队伍', // 页面标题
                requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/teamInfo',
            name: 'teamInfo',
            component: teamInfo,
            meta: {
                title: '队伍详情', // 页面标题
                requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        {
            path: '/taskSchedule',
            name: 'taskSchedule',
            component: taskSchedule,
            meta: {
                title: '项目详情', // 页面标题
                requireAuth: false // 添加该字段，表示进入这个路由是需要登录的
            }
        },
        //项目管理
        {
            path: '/projectManage',
            name: 'projectManage',
            component: projectManage,
            meta: {
                title: '项目详情', // 页面标题
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
    document.title = to.meta.title || '团队管理系统'
    const cookeiToken = location.href.split('access_token=')[1];
    const cookie = getCookie('access-token')
    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        if (cookie) { // 
            next();
        } else {
            if (cookeiToken) {
                setCookie('access-token', cookeiToken);
                next();
            } else {
                window.location.href = `${process.env.BASE_URL}chooseTeam.html?rURL=${encodeURIComponent(window.location.href)}`;
            }

        }
    } else {
        next();
    }
})

export default router