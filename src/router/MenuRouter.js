import VueRouter from 'vue-router';
import WPerformance from '../views/performance';
import WSettings from '../views/settings';

const ROUTER = new VueRouter({
  routes: [
    { path: '/performance', name: 'performance', component: WPerformance },
    { path: '/performance/:treekey', name: 'performanceTreekey', component: WPerformance },
    { path: '/settings', name: 'settings', component: WSettings },
  ],
});

export default ROUTER;
