module.exports = {
  publicPath: '/dist',
  outputDir: '../dist/',
  filenameHashing: false,
  chainWebpack: config => {
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  }
};
