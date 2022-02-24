const state = {
	userdata: {},
	cartItems: {},
	totalPrice: 0
};

const getters = {
	user: state => state.userdata,
	cartItems: state => state.cartItems,
	totalPrice: state => state.cartItems.reduce((total, item) => total + (item.basic_price + item.size_add + item.taste_add) * item.amount, 0)
};

const actions = {
	getUserdata(ctx) {
		let userdata = {};
		ctx.commit("getUserdata", userdata);
	}
};

const mutations = {
	getUserdata(state, userdata) {
		state.userdata = userdata;
	},
	getCartItems(state, cartItems) {
		state.cartItems = cartItems;
	}
};

export default {
	state,
	getters,
	actions,
	mutations
};