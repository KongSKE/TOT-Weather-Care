// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store'
import { AUTO_LOGIN } from '@/store/actions.type'
import firebase from '@/config/firebaseConfig'

Vue.use(Vuetify)
Vue.config.productionTip = false


/* eslint-disable no-new */
const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
  new Vue({
    el: '#app',
    router,
    components: { App },
    store,
    template: '<App/>',
    created() {
      if (firebaseUser) {
        store.dispatch(AUTO_LOGIN, firebaseUser)
        if (this.$route.path == '/register' || this.$route.path == '/login') {
          unsubscribe()
          router.push('/')
        }
      }
      else {
        if (this.$route.path == '/register' || this.$route.path == '/login') {
          //do nothing
        }
        else {
          console.log(this.$route.path)
          unsubscribe()
          router.push('/login')
        }
      }
    }
  })
  unsubscribe()
})
