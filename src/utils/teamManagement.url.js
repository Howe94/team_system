import { fetchData } from './ajax'
//登录页面
export function interOutnetConfig(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetInterface/api/sys/outnetConfig/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetInterface/api/sys/outnetConfig/query.v', msg, type)
}
//队伍列表
export function getTeamProInfo(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getTeamProInfo', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getTeamProInfo', msg, type)
}
//队伍查看数修改
export function changeTeamSeeNum(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getTeamProInfo', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getTeamProInfo', msg, type)
}
//获取学校列表

export function getUniversity(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getUniversity', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getUniversity', msg, type)
}
//获取项目类型
export function getProType(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getProType', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getProType', msg, type)
}
//获取我的团队列表

export function getMyTeamList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getMyTeamList', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getMyTeamList', msg, type)
}
//获取项目信息

export function getMyProList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getMyProList', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getMyProList', msg, type)
}
//获取任务列表getMyTaskList
export function getMyTaskList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getMyTaskList', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getMyTaskList', msg, type)
}
//获取项目的任务列表getTaskList
export function getTaskList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getTaskList', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getTaskList', msg, type)
}
//获取团队的成员列表 
export function getMemberList(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getMemberList', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getMemberList', msg, type)
}