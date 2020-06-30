import Vue from 'vue'
import VueRouter from 'vue-router'
//@代表"src資料夾"的路徑
import home from '@/pages/home.vue'
import member from '@/pages/member.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes:[
        {
            name:"首頁",
            path:"/index",
            component:home
        },
        {
            name:"會員",
            path:"/member",
            component:member
        }
    ]
});