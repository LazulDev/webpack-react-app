
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const ruleForJSX = 
{
	test: /\.js$/, // Regex: archivos que terminan en js
	loader: 'babel-loader',
	options: { // Configuración de babel
		"presets": [
			[
					"@babel/preset-react", // Configuración preestablecida
				{ // Opciones de la config
					runtime: "automatic" // 'classic'
				}
			]
		]
	}
}
const ruleForStyles = {
	test: /\.css$/,
	use: [
		'style-loader', // Entiende el css y lo carga en la página
		'css-loader' // Entiende las rutas relativas al projecto (imports y required en el css)
	]
}
const rules = [
	ruleForJSX,
	ruleForStyles
]

//
module.exports = (env, argv) => {
	const {mode} = argv
	const isProduction = mode === 'production'
	return {
		entry: './src/index.js', // Por defecto
		output: { // Por defecto dist
			filename: isProduction
			? '[name].[contenthash].js'
			: '[name].js',
			path: path.resolve(__dirname, 'build') // Ruta absoluta. dirname = directorio del webpack.config.js
		},
		// Plugin: añade funcionalidad a webpack
		plugins: [
			new HtmlWebpackPlugin({ template: 'src/index.html' })// No creamos el html de forma manual, webpack lo genera
		],
		// Loaders como Babel que preprocesan código que webpack no entiende
		// p.e. JSX
		module: { rules },
		devServer: {
			open: true, // Abre el navegador al servirlo
			port: 4200,
			compress: true // Comprime con gzip
		},
		devtool: 'source-map' // Genera código === al de desarrollo. hay diferentes opciones en la web de webpack
	}
}