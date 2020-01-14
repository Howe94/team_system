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
//获取学院列表

export function getUniversity(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('http://localhost:3000/getUniversity', msg, type, callFunc)
    }
    return fetchData('http://localhost:3000/getUniversity', msg, type)
}
