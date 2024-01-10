import Vue from 'vue'
import vueRouter from 'vue-router'
import routers from './router'
Vue.use(vueRouter)

// 重写编程路由
let originPush=vueRouter.prototype.push
let originReplace=vueRouter.prototype.replace

vueRouter.prototype.push=function(location,reslove,reject){
    if(reslove&&reject){
        originPush.call(this,location,reslove,reject)
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
vueRouter.prototype.replace=function(location,reslove,reject){
    if(reslove&&reject){
        originReplace.call(this,location,reslove,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}

const router= new vueRouter({
    routes:routers
})
//设置前置路由守卫 对没有登录的用户进行限制
router.beforeEach((to, from, next) => {
    
    if (to.path === '/login' || to.path === '/register') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');
        if (token === null || token === '') {
            next('/login');
        } else {
            // 获取JWT的payload部分（第二部分）
              const jwtPayload = token.split(".")[1];
              const user_permissions = JSON.parse(atob(jwtPayload))["user_permissions"];
                console.log(user_permissions)
            if (to.meta.type == user_permissions) { 
                //用户权限为管理员 放行
                
                next();
            } else {
                next('/login');
            }
            
            
        }
    }
})

export default router