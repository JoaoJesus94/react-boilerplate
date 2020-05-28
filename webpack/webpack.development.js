const { HotModuleReplacementPlugin } = require('webpack')

module.exports = () => ({
	devServer: {
		host: 'localhost',
		port: '8000',
		open: true,
		historyApiFallback: true,
		overlay: {
			errors: true,
			warnings: true,
		},
	},
	plugins: [new HotModuleReplacementPlugin({})],
})
