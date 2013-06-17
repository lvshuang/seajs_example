seajs.config({
  // 配置插件
  plugins: ['shim'],

  // 配置别名
  alias: {
    // 配置 jquery 的 shim 配置，这样我们就可以通过 require('jquery') 来获取 jQuery
    'jquery': {
      src: 'libs/jquery/1.9.1/jquery.js',
      exports: 'jQuery'
    }
  }
});