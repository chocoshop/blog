const path = require('path');
const glob = require('glob');

module.exports = {
    mode: 'development',
    entry: Object.fromEntries(glob.sync('./pages/**/index.tsx').map(pathInfo => [path.dirname(pathInfo), path.resolve('.', pathInfo)])),
    output: {
        path: path.join(__dirname, 'public'),
        // 本番はhashした値にする
        // filename: "[name]/[hash].js",
        filename: "[name]/bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    }
}