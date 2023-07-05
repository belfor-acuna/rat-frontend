import {createRouter, createWebHashHistory} from 'vue-router';

import Landing from './views/Landing';
import Login from './views/Login';
import Home from './views/Home.vue';
import Register from './views/Register.vue';

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

];

const router= createRouter(
    {
        routes,
        history:createWebHashHistory()
    
    }
)

export default router;