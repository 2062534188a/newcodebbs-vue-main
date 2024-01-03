import { reqCode, reqLogin } from '@/api/api'
import { setItem } from '@/utils/storage'
export default {
    namespaced:true,
    actions: {
        // 获取验证码
       async getCode({commit},email) {
            const result = await reqCode({ 'mail':email })
            
            if (result.code == 200) {
                //获取验证码成功
                //清除本地存储的一次性验证码标识
                window.sessionStorage.removeItem('reqMsg')
            } 
        },
        async Login({ commit }, data) {
            
            //异步发送登录请求
            const result = await reqLogin( data )
            
            if (result.code == 200) {
                //设置token到浏览器
                setItem('Authorization', result.data)
                //提交登录状态到vue全局共享
                commit('Login', { isLogin: false, Authorization: result.data })
                return 'ok'
            }
            else {
                //返回错误信息
                return Promise.reject(new Error(result.msg))
            }
            
        }
    },
    mutations:{
        Login(state , data) {
            //登录状态设置为 true
            state.isLogin = true
            //设置token到全局vuex
            state.Authorization=data.Authorization
        }
    },
    state: {
        //是否需要设置密码
        isLogin: false,
        //登录凭证
        Authorization:''
    },
    getters:{
        
    }
}