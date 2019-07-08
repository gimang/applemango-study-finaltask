import VueRouter from 'vue-router';
import WPerformance from '../views/performance';
import WSettings from '../views/settings';

const ROUTER = new VueRouter({
  routes: [
    { path: '/performance', name: 'performance', component: WPerformance },
    { path: '/settings', name: 'setting', component: WSettings },
  ],
});

export default ROUTER;
