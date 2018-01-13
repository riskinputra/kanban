// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import * as firebase from 'firebase'
import Vuetify from 'vuetify'
import('vuetify/dist/vuetify.min.css')

Vue.use(Vuetify, VueFire)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyALoqi2ou3__v-fP_h-Js_zd217GW0VL8c',
      uthDomain: 'kanban-a014c.firebaseapp.com',
      databaseURL: 'https://kanban-a014c.firebaseio.com',
      projectId: 'kanban-a014c',
      storageBucket: 'kanban-a014c.appspot.com',
      messagingSenderId: '720798796186'
    })
  }
})
