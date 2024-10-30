const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
    const mode = env.mode || "development";
    const port = env.port || 3000;

    return {
        mode,
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
            clean: true,
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.css$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public', 'index.html'),
            }),
        ],
        devServer: {
            static: path.join(__dirname, 'dist'),
            port,
            proxy: [
                {
                    context: ['/api'],
                    target: 'http://localhost:5050',
                },
            ],
        },
    };
}