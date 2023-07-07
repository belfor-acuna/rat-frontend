import {createRouter, createWebHashHistory} from 'vue-router';

import Landing from './views/Landing';
import Login from './views/Login';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import CreateResume from './views/CreateResume.vue';
import Admin from './views/Admin.vue'
const routes=[
    {
        path:"/",
        name:"landing",
        component:Landing
    },
    {
        path:"/login",
        name:"login",
        component:Login
    },
    {
        path:"/home",
        name:"home",
        component:Home
    },
    {
        path:"/register",
        name:"register",
        component:Register
    },
    {
        path:"/createResume",
        name:"createResume",
        component: CreateResume
    },
    {
        path:"/admin/users",
        name:"admin-users",
        component:Admin
    }

];

const router= createRouter(
    {
        routes,
        history:createWebHashHistory()
    
    }
)

export default router;