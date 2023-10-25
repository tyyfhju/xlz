import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

//解决重复点击导航，控制台路由报错的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

const routes = [{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/dynamic',
		name: 'dynamic',
		component: () => import('../views/DynamicView.vue')
	},
	{
		path: '/Introduce',
		name: 'Introduce',
		component: () => import('../views/IntroduceView.vue')
	},
	{
		path: '/recommend',
		name: 'recommend',
		component: () => import('../views/RecommendView.vue')
	},
	{
		path: '/serve',
		name: 'serve',
		component: () => import('../views/ServeView.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../login/login.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../login/register.vue')
	},
]


const router = new VueRouter({
	routes
})


export default router
