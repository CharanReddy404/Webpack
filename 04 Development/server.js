const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compailer = webpack(config);

app.use(
  webpackDevMiddleware(compailer, {
    publicPath: config.output.publicPath,
  })
);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}.....`);
});
