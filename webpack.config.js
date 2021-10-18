const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.js"],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|woff|woff2|ttf|eot)$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@/components": path.resolve(__dirname, "src/components"),
      "@/pages": path.resolve(__dirname, "src/pages")
    },
    extensions: [".js", ".jsx"],
    modules: [
      path.resolve(__dirname, "src/"),
      path.resolve(__dirname, "node_modules/")
    ]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  output: {
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  devServer: {
    // contentBase: "./build",
    // compress: true,
    hot: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }
      }
    }
  }
};
