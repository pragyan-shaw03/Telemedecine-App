import HomeComponent from '@/components/Home/HomeComponent.vue';
import LoginComponent from '@/components/login-register/LoginComponent.vue';
import RegisterComponent from '@/components/login-register/RegisterComponent.vue';
import DoctorInfo from '@/components/doctor/DoctorInfo.vue';
import DoctorList from '@/components/doctor/DoctorList.vue';
import DoctorApp from '@/components/doctor/DoctorApp.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'HomeComponent',
        component: HomeComponent
    },
    {
        path: '/register',
        name: 'RegisterComponent',
        component: RegisterComponent,
    },
    {
        path: '/login',
        name: 'LoginComponent',
        component: LoginComponent
    },
    {
        path: '/doctors',
        name: 'DoctorApp',
        component: DoctorApp,
        children: [
            {
                path: '',
                name: 'DoctorList',
                component: DoctorList
            },
            {
                path: ":id",
                name: 'DoctorInfo',
                component: DoctorInfo
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;