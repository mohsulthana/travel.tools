import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';
import store from './store/index';
// import Landing from './views/LandingPage.vue';
// import Blog from './views/Blog.vue';
// import Artikel from './views/Artikel.vue';
// import Detail from './views/DetailArtikel.vue';
// import Gallery from './views/Gallery.vue';

// Admin
// import Dashboard from './views/admin/Dashboard.vue';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: routes.map(route => ({
    path: route.path,
    name: route.name,
    component: route.component,
    beforeEnter(to, from, next) {
      store.dispatch('commonModule/updateLayout', route.layout);
      next();
    },
  })),
});

// export default new Router({
//   base: '/',
//   mode: 'history',
//   routes: [
//     {
//       path: '/admin',
//       name: 'Admin',
//       redirect: { name: 'Dashboard' },
//       children: [
//         {
//           path: 'dashboard',
//           name: 'Dashboard',
//           layout: 'adminLayout',
//           component: Dashboard,
//         },
//       ],
//     },
//     {
//       path: '/',
//       name: 'Landing',
//       component: Landing,
//     },
//     {
//       path: '/blog',
//       name: 'Blog',
//       component: Blog,
//     },
//     {
//       path: '/artikel',
//       name: 'Artikel',
//       component: Artikel,
//     },
//     {
//       path: '/detail/artikel',
//       name: 'Detail-artikel',
//       component: Detail,
//     },
//     {
//       path: '/home/gallery',
//       name: 'Gallery',
//       component: Gallery,
//     },
//   ],
// });
