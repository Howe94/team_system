import { fetchData } from './ajax'
//登录页面
export function interOutnetConfig(data, type, callFunc) {
    var msg = data
    if(callFunc && (callFunc.constructor === Function)){
        return fetchData('/ApprNetInterface/api/sys/outnetConfig/query.v', msg, type, callFunc)
    }
    return fetchData('/ApprNetInterface/api/sys/outnetConfig/query.v', msg, type)
}
