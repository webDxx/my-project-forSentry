import Vue from 'vue';
import App from './index.vue';

Vue.config.productionTip = false;

import rIcon from 'components/rIcon';
import rSelect from 'components/rSelect';
import rInput from 'components/rInput';
import rButton from 'components/rButton';
import rTitlebar from 'components/rTitlebar';
import Toast from 'components/toast';
import rNumber from 'components/rNumber';

let components = [rIcon, rSelect, rInput, rButton, rTitlebar, Toast, rNumber];

components.forEach(component => {
  Vue.use(component);
});

var app = new Vue({
  render: h => h(App),
}).$mount('#app');
