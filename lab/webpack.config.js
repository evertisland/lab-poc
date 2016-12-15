var LiveReloadPlugin = require('webpack-livereload-plugin');
module.exports = {
	entry: './lab.js',
	output: {
		filename: 'lab.js',
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
