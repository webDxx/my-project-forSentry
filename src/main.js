// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import './mock/api.js'
import App from './App'
import router from './router'
import VueDND from 'awe-dnd'
// element
// import { Table, TableColumn } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// iview
// import ViewUI from 'view-design'
import { Button, Table } from 'view-design'

// import style
import 'view-design/dist/styles/iview.css'

// 监控
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'
Vue.component('Button', Button)
Vue.component('Table', Table) // 使用 CSS

// Vue.use(ViewUI)

Vue.use(Table)
// Vue.use(TableColumn)
Vue.use(VueDND)
Sentry.init({
  dsn: 'https://0d677eff2a204ecdab03f758d0d96985@sentry.rong360.com/18',
  integrations: [
    new Integrations.Vue({
      Vue,
      attachProps: true,
      logErrors: true
    })
  ]
})

window.onerror = function (e) {
  console.log('window.onerror')
  Sentry.captureException(e)
}
window.addEventListener(
  'error',
  function (event) {
    console.log('window.error')
    Sentry.captureException(event)
    Sentry.configureScope(scope => {
      scope.setLevel('fatal')
      scope.setExtra('element', event.srcElement)
    })
  },
  true
)
Vue.config.errorHandler = (err, vm, info) => {
  console.log('Vue.config.errorHandler')
  Sentry.configureScope(scope => {
    scope.setTag('error_type', 'error_handler')
    scope.setUser({
      id: '1',
      username: '小红',
      ip_address: '127.0.0.1',
      email: 'xiaohong@example.com'
    })
    scope.setLevel('warning')
  })
  Sentry.captureException(err)
}

axios.interceptors.response.use(
  data => {
    return data
  },
  error => {
    console.log('axios.error')
    Sentry.configureScope(scope => {
      scope.setTag('error_type', 'error_axios')
    })
    Sentry.captureException(error)
  }
)

Vue.config.productionTip = false
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
