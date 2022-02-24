module.exports = {
	transpileDependencies: [
		'vuetify'
	],
	publicPath: '/',
	devServer: {
		open: true, // 启动服务后是否打开浏览器
		host: '0.0.0.0',
		port: 8081, // 服务端口
		https: false,
		hotOnly: false,
		proxy: {
			'/api': {
				target: 'http://192.168.218.250:8888',
				ws: true,
				changeOrigin: true, //允许跨域
				pathRewrite: {
					'^/api': ''
				}
			}
		},
		overlay: {
			warnings: true,
			errors: true
		},
		before: app => {} 
	},
}