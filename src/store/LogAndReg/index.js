import { setItem } from '@/utils/storage'
export default {
    namespaced:true,
    actions: {
       
        async Login({ commit }, data) {
            
            //异步发送登录请求
            const result = await reqLogin( data )
            
            if (result.code == 200) {
                //设置token到浏览器
                setItem('Authorization', result.data)
                //提交登录状态到vue全局共享
                commit('Login', { isLogin: false, Authorization: result.data })
                return result
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
        //查询登录状态
        isLogin: false,
        //登录凭证
        Authorization:''
    },
    getters:{
        
    }
}