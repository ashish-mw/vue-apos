// This configures the apostrophe-assets module to push a 'site.less'
// stylesheet by default, and to use jQuery 3.x
module.exports = {
  jQuery: 3,
  stylesheets: [
    {
      name: 'site'
    }
  ],
  scripts: [
    { name: 'es6-promise.min' },
    { name: 'es6-promise.auto.min' },
    { name: 'axios.min' },
    {
      name: process.env.ENV === 'development' ? 'vue' : 'vue.min'
    },
    {
      name: 'site'
    }
  ]
};
