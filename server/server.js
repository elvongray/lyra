import path from 'path';

import express from 'express';
import {json, urlencoded} from 'body-parser';

import webpack from 'webpack';
import config from '../webpack.config.dev';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(json({ limit: '20mb' }));
app.use(urlencoded({ limit: '20mb', extended: false }));


// Routes for react router
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

let port = process.env.PORT || 8000;

// start app
app.listen(port, (error) => {
  if (!error) {
    console.log(`App is running on port ${port}`);
  }
});
