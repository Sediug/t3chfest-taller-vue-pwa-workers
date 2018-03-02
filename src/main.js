import Vue from 'vue'
import * as firebase from 'firebase'
import 'firebase/firestore'

import App from './App'
import router from './router'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDyvZvOZcwvQXf8ShOyTJLE52sXgjK7hN8',
  authDomain: 'pwa-learning-8da5e.firebaseapp.com',
  databaseURL: 'https://pwa-learning-8da5e.firebaseio.com',
  projectId: 'pwa-learning-8da5e',
  storageBucket: 'pwa-learning-8da5e.appspot.com',
  messagingSenderId: '377296301602'
}
firebase.initializeApp(config)

firebase.firestore().enablePersistence()
  .then(() => {
    console.log('persistance enabled')
  })
  .catch(err => {
    console.error(err)
    if (err.code === 'failed-precondition') {
      console.log('Multiple tabs open, persistence can only be enabled in one tab at a a time.')
    } else if (err.code === 'unimplemented') {
      console.log('The current browser does not support all of the features required to enable persistence')
    }
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
