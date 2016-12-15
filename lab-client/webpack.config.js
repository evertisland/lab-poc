var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'app.js',
		path: './dist'
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}]
	},
	plugins: [
    new LiveReloadPlugin()
  ]
}
