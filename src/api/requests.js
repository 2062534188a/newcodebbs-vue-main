import store from '@/store'
import axios from 'axios'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import { getItem } from '@/utils/storage'

const requests=axios.create({
    baseURL:'/api',
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json; charset=UTF-8'
    }
})
//请求拦截器
requests.interceptors.request.use((config) => {
    //加载进度条
    nprogress.start()
    //从localStorage获取Authorization
    let Authorization = getItem("Authorization")
    if (Authorization) {
        //将获取的Authorization存入请求头
        config.headers['Authorization'] = Authorization
    } else { 
        //从vuex中获取Authorization 存入请求头
        Authorization= store.state.LogAndReg.Authorization
        config.headers['Authorization']=Authorization
    }
    
    console.log(Authorization)
    return config
})
//返回值拦截器
requests.interceptors.response.use((res)=>{
    nprogress.done()


    return res.data
},(error)=>{
     return Promise.reject(error)
})

export default requests