const pluginConf = require('./config/pluginConf')
const themeConf = require('./config/themeConf')
const mathjax3 = require('markdown-it-mathjax3');
const encode = require('markdown-it-disable-url-encode')


require('vuepress-plugin-mermaidjs')
module.exports = {
  base: '',
  dest: '',
  theme: 'reco',
  title: 'GaoSen',
  // description: '海压竹枝低复举，风吹山脚晦还明。',
  themeConfig: themeConf,
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      /*百度统计*/
    ['script',{},`
      var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?f79d18380f8a25883838c41126b8eaf8";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
    `],
    ['link', {rel: 'icon', href: '/img/avatar.png'}],//这是配置网站头像
    ["link", { rel: "stylesheet", href: "https://unpkg.com/katex@0.11.1/dist/katex.min.css" }],

    ['script',{src: '/js/jquery-3.6.0.min.js'}],
    ['script',{src: '/js/echarts.js'}],
    // ['script',{src: '/js/RemoveRecoDark.js'}],
    // ['script',{src: "https://cdn.bootcss.com/echarts/3.7.2/echarts.min.js"}],

      /*waline*/
    ['script',{src: 'https://unpkg.com/@waline/client@v2/dist/waline.js'}],
    ['link',{rel: "stylesheet", href: 'https://unpkg.com/@waline/client@v2/dist/waline.css'}],

    /*mermaid*/
    ['script',{src: 'https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js'}],
    ['script',{},``],

  ],
  markdown: {
    lineNumbers: true,
    plugins: {
      // 'markdown-it-katex': {},
    },
    extendMarkdown: md => {
      md.use(mathjax3);
      md.use(encode);
    }
  },
  plugins: pluginConf,
  extraWatchFiles: [
    './config/sidebar.js'
  ],
}