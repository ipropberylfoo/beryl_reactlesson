var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

module.exports = {
    entry: "./src/client/public/index.jsx",
    output: {
        filename: './src/client/app/bundle.js'
    },
    devServer: {
     inline: true,
     port: 3000
  },
    module : {
      loaders : [
        {
          test : /\.jsx?$/,
          exclude: /node_modules/,
          loader : 'babel-loader',
          query: {
            presets: ['es2015', 'react', 'stage-0']
                  }
        }
      ]
  }
};
