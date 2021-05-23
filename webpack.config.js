const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "development",
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
		assetModuleFilename: "images/[name][ext]",
		publicPath: "",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s?css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.js$/i,
				use: ["babel-loader"],
			},
			{
				test: /\.(png|jpg|svg)$/i,
				type: "asset",
			},
		],
	},
	devtool: "source-map",
	plugins: [
		new HtmlWebPackPlugin({
			title: "Doob",
			inject: "body",
			template: "./index.html",
		}),
		new MiniCssExtractPlugin(),
	],
};
