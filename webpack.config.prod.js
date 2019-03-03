const base = require("./webpack.config.base.js");
const {
    BundleAnalyzerPlugin
} = require("webpack-bundle-analyzer");
const merge = require("webpack-merge");

module.exports = merge(base, {
    mode: "production",
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false,
            reportFilename: "bundle_sizes.html"
        })
    ],
    externals: {
        react: "React",
        "react-dom": "ReactDOM"
    }
});