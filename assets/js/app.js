//
// On your mark
//
let Vue = require('vue'),
    VueRouter = require('vue-router'),
    VueResource = require('vue-resource');

Vue.use(VueRouter);
Vue.use(VueResource);

//
// Get set
//
let App = require('./app/root'),
    Router = new VueRouter(require('./app/config'));

Router.map(require('./app/routes'));
Router.redirect(require('./app/redirects'));

//
// Go
//
Router.start(App, '#app')