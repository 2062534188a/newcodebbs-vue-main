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
export default[
    
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'Register',
        path:'/register',
        component:Register
    },
    {
        name:'Home',
        path:'/home',
        component: Home,
        children: [
            {
                name:'Homepage',
                path:'homepage',
                component: Homepage,
            },{
                name:'Search',
                path:'search',
                component: Search,
            }
        ]
    },
    {
        name: 'Admin',
        path: '/admin',
        component: Admin,
        children: [
      
            {
                name: 'UserManagement',
                path: 'userManagement',
                component:UserManagement
            },
            {
                name: 'TicketPre',
                path: 'ticketPre',
                component:TicketPre
            },
            {
                name: 'TicketRefund',
                path: 'ticketRefund',
                component:TicketRefund
            },
            {
                name: 'TrainInformation',
                path: 'trainInformation',
                component:TrainInformation
            },
            {
                name: 'TrainType',
                path: 'trainType',
                component:TrainType
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


