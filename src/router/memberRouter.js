import Member from '@/views/Member';
import AccountDetails from '@/views/Member/AccountDetails';
import AddressManagement from '@/views/Member/AddressManagement';
import CommentManagement from '@/views/Member/CommentManagement';
import MyOrders from '@/views/Member/MyOrders';


const memberRouter = [{
	path: "/member",
	name: "Member",
	component: Member,
	children: [{
		path: "/member/accountDetails",
		name: "AccountDetails",
		component: AccountDetails,
		meta: {
			title: "账号信息"
		}
	}, {
		path: "/member/addressManagement",
		name: "AddressManagement",
		component: AddressManagement,
		meta: {
			title: "地址管理"
		}
	}, {
		path: "/member/commentManagement",
		name: "CommentManagement",
		component: CommentManagement,
		meta: {
			title: "评论管理"
		}
	},
	{
		path: "/member/myOrders",
		name: "MyOrders",
		component: MyOrders,
		meta: {
			title: "我的订单"
		}
	}
	],
	meta: {
		title: "会员中心"
	}
}];

export default memberRouter;