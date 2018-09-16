// Set prod env variable before we import prod config.
process.env.NODE_ENV = 'prod';

const webpack = require('webpack');
const config = require('./webpack.config.prod');
const ora = require('ora');
const chalk = require('chalk');

const spinner = ora('Building for production').start();

webpack(config, function(err, stats) {
  spinner.stop();

  if (err) {
    throw err;
  }

  console.log(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }));

  console.log(chalk.bgGreen('Build complete!'));
})