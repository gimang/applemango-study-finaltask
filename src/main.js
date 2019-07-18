import Vue from 'vue';

// element-ui
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/ko';

// dependencies styles
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import '../theme/index.css';

// custom styles
import './styles/style.css';
import './styles/common.css';
import './styles/menu.css';

// router
import VueRouter from 'vue-router';

// highcharts
import HighchartsVue from 'highcharts-vue';

// components
import App from './App';

// stores
import store from './store';

Vue.use(VueRouter);

Vue.use(ElementUI, {
  size: 'mini',
  locale,
});

Vue.use(HighchartsVue);

Vue.config.productionTip = false;

new Vue({ // eslint-disable-line no-new
  el: '#app',
  store,
  components: { App },
  template: '<App/>',
});
