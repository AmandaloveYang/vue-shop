import Fozoon from '@/views/About/Fozoon'
import Notice from '@/views/About/Notice'
import Shopping from '@/views/About/Shopping'
import Delivery from '@/views/About/Delivery'
import Recruit from '@/views/About/Recruit'
import Message from '@/views/About/Message'


const aboutRouter = [{
		path: "/about",
		redirect: "/about/fozoon",
	}, {
		path: "/about/fozoon",
		name: "Fozoon",
		component: Fozoon,
		meta: {
			title: "关于法颂"
		}
	}, {
		path: "/about/notice",
		name: "Notice",
		component: Notice,
		meta: {
			title: "会员须知"
		}
	}, {
		path: "/about/shopping",
		name: "Shopping",
		component: Shopping,
		meta: {
			title: "购物指南"
		}
	},
	{
		path: "/about/delivery",
		name: "Delivery",
		component: Delivery,
		meta: {
			title: "配送说明"
		}
	},
	{
		path: "/about/recruit",
		name: "Recruit",
		component: Recruit,
		meta: {
			title: "最新招聘"
		}
	},
	{
		path: "/about/message",
		name: "Message",
		component: Message,
		meta: {
			title: "在线留言"
		}
	}
]

export default aboutRouter