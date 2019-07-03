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

// components
import App from './App';


Vue.use(ElementUI, {
  size: 'mini',
  locale,
});

Vue.config.productionTip = false;

const app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
});
app();
