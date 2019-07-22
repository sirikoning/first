import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import firebase from 'firebase'
import firebaseui from 'firebaseui'

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: "AIzaSyC4QYK3WZOPUedCkvifxy0jsOp6tR_lbi4",
  authDomain: "sksks-40254.firebaseapp.com",
  databaseURL: "https://sksks-40254.firebaseio.com",
  projectId: "sksks-40254",
  storageBucket: "sksks-40254.appspot.com",
  messagingSenderId: "617981863867",

  clientId: "617981863867-mr95ve45lok1idt0utt0qrij4msj6580.apps.googleusercontent.com",
  scopes: [
           "email",
           "profile",
           "https://www.googleapis.com/auth/calendar"
  ],
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  ]
}


//
// // FirebaseUI config.
// var uiConfig = {
//   signInSuccessUrl: '/',
//   signInOptions: [
//     // Leave the lines as is for the providers you want to offer your users.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   ],
//   // Terms of service url.
//   tosUrl: 'https://www.google.com'
// };
//
// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

new Vue({
  router,
  created() {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      console.log('OK')
      if(user) {
        this.$router.push('/about')
        console.log('user is here')
      } else {
        this.$router.push('/signin')
        console.log('user is not here')
      }
     })
    },
  store,
  render: h => h(App)
}).$mount('#app')
