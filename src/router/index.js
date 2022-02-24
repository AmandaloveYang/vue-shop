import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import aboutRouter from './aboutRouter';
import businessRouter from './businessRouter';
import memberRouter from './memberRouter';

import store from '../store/index';

Vue.use(VueRouter);

const routes = [{
	path: "/",
	redirect: "/home",
	component: () => import('../views/Index.vue'),
	children: [{
		path: "/home",
		name: "Home",
		component: () => import('../views/Home.vue')
	},
	{
		path: "/cake",
		name: "Cake",
		component: () => import('../views/Cake.vue')
	},
	{
		path: "/gift",
		name: "Gift",
		component: () => import('../views/Gift.vue')
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import('../views/Contact.vue')
	},
	{
		path: "/login",
		name: "Login",
		component: () => import('../views/Login.vue'),
		meta: {
			hideFooter: true
		}
	},
	{
		path: "/register",
		name: "Register",
		component: () => import('../views/Register.vue'),
		meta: {
			hideFooter: true
		}
	},
	{
		path: "/buy/:id",
		name: "Buy",
		component: () => import('../views/Buy.vue')
	},
	{
		path: "/business",
		name: "Business",
		component: () => import('../views/Business.vue')
	},
	{
		path: "/order",
		name: "Order",
		component: () => import('../views/Order.vue')
	},
	{
		path: "/test",
		name: "Test",
		component: () => import('../views/Test.vue')
	},
	]
},
...aboutRouter,
...businessRouter,
...memberRouter
];

const router = new VueRouter({
	routes
});

router.afterEach((to, from, next) => {
	window.scrollTo(0, 0);
});

router.beforeEach((to, from, next) => {
	const isLogin = JSON.parse(window.sessionStorage.getItem('userdata'))?.login;
	console.log(store.getters.user);
	console.log(isLogin);
	const paths = ['/order', '/member'];

	if (paths.includes(to.path) && !isLogin) {
		next('/login');
	} else {
		next();
	}
	console.log(to);
	console.log(from);
	if(to.name=="shop222" && to.query.number=="0"){
		next("/buy/D_055")
	}
	if(to.name=="shop222" && to.query.number=="1"){
		next("/business/teabreak")
	}
	if(to.name=="shop222" && to.query.number=="2"){
		next("/cake")
	}
	if(to.name=="shop222" && to.query.number=="3"){
		next("/cake")
	}
	if(to.name=="shop222" && to.query.number=="4"){
		next("/cake")
	}
	if(to.name=="shop222" && to.query.number=="5"){
		next("/buy/D_003")
	}
	
});

export default router;