import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Home from '@/pages/Home'
import Homepage from '@/pages/Home/Homepage'
import Search from '@/pages/Home/search'
import Admin from '@/pages/Admin'
import UserManagement from '@/pages/Admin/UserManagement'
import TicketPre from '@/pages/Admin/TicketPre-sale'
import TicketRefund from '@/pages/Admin/TicketRefund'
import TrainInformation from '@/pages/Admin/TrainInformation'
import TrainType from '@/pages/Admin/TrainType'
import UserOrder from '@/pages/Admin/UserOrder'
import PersonalInformation from '@/pages/Home/PersonalInformation'
import MemberCenter from '@/pages/Home/MemberCenter'
import OrderCenter from '@/pages/Home/OrderCenter'
export default[
    
    {
        name:'Login',
        path:'/login',
        component: Login,
        meta: {
                    tittle:'登录'
                    ,
                    type:0
                }
    },
    {
        name:'Register',
        path:'/register',
        component: Register,
        meta: {
                    tittle:'注册'
                    ,
                    type:0
                }
    },
    {
        name:'Home',
        path:'/home',
        component: Home,
        redirect:'/home/search',
        children: [
            {
                name:'Homepage',
                path:'homepage',
                component: Homepage,
                meta: {
                    tittle:'个人车票'
                    ,
                    type:0
                }
            },{
                name:'Search',
                path:'search',
                component: Search,
                meta: {
                    tittle:'车票检索'
                    ,
                    type:0
                }
            },{
                name:'PersonalInformation',
                path:'personalInformation',
                component: PersonalInformation,
                meta: {
                    tittle:'个人中心'
                    ,
                    type:0
                }
            },
            {
                name:'MemberCenter',
                path:'memberCenter',
                component: MemberCenter,
                meta: {
                    tittle:'会员中心'
                    ,
                    type:0
                }
            },
            {
                name:'OrderCenter',
                path:'orderCenter',
                component: OrderCenter,
                meta: {
                    tittle:'我的订单'
                    ,
                    type:0
                }
            }
        ]
    },
    {
        name: 'Admin',
        path: '/admin',
        component: Admin,
        redirect:'/admin/userManagement',
        children: [
      
            {
                name: 'UserManagement',
                path: 'userManagement',
                component: UserManagement,
                meta: {
                    tittle: '用户管理',
                    type:1
                }
            },
            {
                name: 'TicketPre',
                path: 'ticketPre',
                component: TicketPre,
                meta: {
                    tittle: '车票预售',
                    type:1
                }
            },
            {
                name: 'TicketRefund',
                path: 'ticketRefund',
                component: TicketRefund,
                meta: {
                    tittle: '车票退票',
                    type:1
                }
            },
            {
                name: 'TrainInformation',
                path: 'trainInformation',
                component: TrainInformation,
                meta: {
                    tittle: '火车站点管理',
                    type:1
                }
            },
            {
                name: 'TrainType',
                path: 'trainType',
                component: TrainType,
                meta: {
                    tittle: '火车类型管理',
                    type:1
                }
            },
            {
                name: 'UserOrder',
                path: 'userOrder',
                component: UserOrder,
                meta: {
                    tittle: '用户订单管理',
                    type:1
                }
            }
        ]
    },
    {
        //没写就是任意路由都是定向这个
        path:'*',
        //重定向
        redirect:'/admin'
    }

]


