import requests from './requests'
//获取验证码
export const reqCode=(params)=>{
    return requests({
        url: '/user/register/code',
        method: 'post',
        params 
    })
}
//验证码登录
export const reqCodeLogin=(data)=>{
    return requests({
        url: 'api/user/login',
        method: 'post',
        data
    })
}
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
export const reqRegister=(data)=>{
    return requests({
        url: 'user/register',
        method: 'post',
        data
    })
}