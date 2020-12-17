export const entry = "./src/index.js";
export const module = {
    loaders: [
        { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' },
        { test: /\.js$/, loader: 'babel-loader', exclude: '/node_modules/' }
    ]
};
export const output = {
    filename: 'bundle.js',
    path: __dirname + '/public'
};