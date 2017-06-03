var path = require('path');
var APP_DIR = path.resolve(__dirname, 'src/client');

module.exports = {
    entry: "./src/client/public/index.jsx",
    output: {
        filename: './src/client/app/bundle.js'
    },
    module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP_DIR,
        loader : 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react']
                }
      }
    ]
  }
};
