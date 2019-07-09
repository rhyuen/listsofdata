const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");


module.exports = {
    entry: {
        "index": path.join(__dirname, "src/Index.tsx")
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [
            "*", ".js", ".ts", ".jsx", ".tsx"
        ]
    },
    module: {
        rules: [{
            test: /\.(tsx|ts|js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader",
        }, {
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: "file-loader"
            }
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, "src/templates/index.html"),
            filename: "index.html",
            inject: "body",
            title: "Just Counting"
        }),
        new CopyWebpackPlugin([{
            from: "./src/images/*.ico",
            flatten: true,
            test: /\.(ico)$/,
            ignore: ["*.jsx"],
            toType: "file"

        }], {
            debug: "debug",
            copyUnmodified: true
        }),
        new ForkTsCheckerWebpackPlugin()
    ]
};