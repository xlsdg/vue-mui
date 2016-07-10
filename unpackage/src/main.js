import Vue from 'vue';
import VueAsyncData from 'vue-async-data';
import VueLazyloadImg from 'vue-lazyload-img';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueX from 'vuex';

Vue.use(VueAsyncData);
Vue.use(VueResource);
Vue.use(VueRouter);

import routerInit from './router';

var router = new VueRouter({
    hashbang: false,
    history: true,
    abstract: true,
    saveScrollPosition: true
});

routerInit(router);

router.start(require('./app'), 'app');