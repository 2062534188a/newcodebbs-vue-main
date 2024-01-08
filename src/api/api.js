import requests from './requests'

//用户端api接口
//用户登录
export const reqLogin = (data) => {
    return requests({
        url: '/user/login',
        method: 'post',
        params: {
            loginMsg: data['loginMsg'],
            password: data['password'],
            loginMethod:data['loginMethod']
        }
        
    })
}
//用户注册
export const reqRegister=(data)=>{
    return requests({
        url: 'user/register',
        method: 'post',
        data
    })
}
//查询我的用户信息
export const queryMyUserData=()=>{
    return requests({
        url: 'queryUserData/queryMyUserData',
        method: 'post',
    })
}
//查询我的订单
export const queryMyOrder=()=>{
    return requests({
        url: 'order/queryMyOrder',
        method: 'post',
    })
}
//查询我的车票
export const queryMyTicket=()=>{
    return requests({
        url: 'ticket/queryMyTicket',
        method: 'post',
    })
}
//查询我的会员信息
export const queryMyVipInformation=()=>{
    return requests({
        url: 'queryUserData/queryMyVipInformation',
        method: 'post',
    })
}

// 管理端api接口
//查询用户数据
export const queryUserData=()=>{
    return requests({
        url: 'queryUserData/queryUserData',
        method: 'post',
    })
}
//查询列车类型
export const queryTrainType=()=>{
    return requests({
        url: 'trainData/queryTrainType',
        method: 'post',
    })
}
//查询列车信息
export const queryTrainInformation=()=>{
    return requests({
        url: 'trainData/queryTrainInformation',
        method: 'post',
    })
}
//查询订单
export const queryOrder=()=>{
    return requests({
        url: 'order/queryOrder',
        method: 'post',
    })
}
//查询预售车票
export const queryTicket=()=>{
    return requests({
        url: 'ticket/queryTicket',
        method: 'post',
    })
}
//查询退票信息
export const queryTicketRefund=()=>{
    return requests({
        url: 'ticket/queryTicketRefund',
        method: 'post',
    })
}