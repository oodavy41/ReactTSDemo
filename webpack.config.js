const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const publicPathName = "static";
const outPutPathName = "js";
const outResoucePathName = "js";

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 7000;
const HOST = process.env.HOST || "localhost";

module.exports = {
  entry: "./src/index.tsx",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: `${publicPathName}/${outPutPathName}/[name].js`
    // chunkFilename: "[name].min.js"
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM"
  },
  stats: {
    children: false
  },
  devServer: {
    contentBase: "./",
    host: HOST,
    port: DEFAULT_PORT,
    hot: true,
    inline: true,
    compress: true,
    open: true
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@utils": path.resolve(__dirname, "src/utils")
    }
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: [/\.jsx$/, /\.js$/],
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(bmp|gif|jpe?g|png|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 2048,
              name: `${publicPathName}/${outResoucePathName}/[name].[hash:8].[ext]`
            }
          }
        ]
      },
      {
        test: /\.(mp4|webm)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              name: `${publicPathName}/${outResoucePathName}/[name].[hash:8].[ext]`
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development",
      filename: "index.html",
      template: resolveApp("public/index.html"),
      inject: true
    })
  ]
};
