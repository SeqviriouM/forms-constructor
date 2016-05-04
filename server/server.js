import express from 'express';
import http from 'http';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import startSocketServer from './socket.js';
import attachRoutes from './router';
import getConfig from './config.js';

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV;
const isDev = process.env.NODE_ENV === 'development';
const isDebug = process.env.DEBUG;
const isMongoConnect = process.env.MONGO_CONNECT;
const appConfig = getConfig();

if (isDev && isDebug && process.env.DEBUG.indexOf('shrimp:front') === 0) {
  const webpack = require('webpack');
  const makeConfig = require('../webpack.config.js');

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

app.use(bodyParser.json());
app.use(cookieParser());

startSocketServer(server);
attachRoutes(app);

if (isMongoConnect === 'yes') {
  mongoose.connect(appConfig.db[env]);
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../app/root.html'));
});

server.listen(port);
