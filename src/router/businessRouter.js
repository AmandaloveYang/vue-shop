import Customization from '@/views/Business/Customization'
import Teabreak from '@/views/Business/Teabreak'
import Welfare from '@/views/Business/Welfare'


const businessRouter = [{
	path: "/business/customization",
	name: "Customization",
	component: Customization,
	meta: {
		title: "专属定制"
	}
}, {
	path: "/business/teabreak",
	name: "Teabreak",
	component: Teabreak,
	meta: {
		title: "茶歇服务"
	}
}, {
	path: "/business/welfare", 
	name: "Welfare",
	component: Welfare,
	meta: {
		title: "员工福利"
	}
}]

export default businessRouter