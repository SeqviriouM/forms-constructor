import express from 'express';
import http from 'http';
import path from 'path';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const isDev = process.env.NODE_ENV === 'development';
const env = process.env.NODE_ENV;
const isDebug = process.env.DEBUG;


if (isDev && isDebug && process.env.DEBUG.indexOf('shrimp:front') === 0) {
  const webpack = require('webpack');
  const makeConfig = require('../make-webpack-config.js');

  const config = makeConfig({
    sourcemaps: false,
    devtool: 'eval',
  });
  const compiler = webpack(config);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use('/static', express.static(path.join(__dirname, '../static')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/app.html'));
});

server.listen(port);
