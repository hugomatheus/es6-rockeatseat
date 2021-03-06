module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    devServer:{
        contentBase: __dirname + '/public'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-async-to-generator','@babel/plugin-transform-runtime']
                      }
                    
                }
            }
        ]
    }
}