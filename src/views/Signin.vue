<template>
  <div class="signin">
    <h2>Sign in</h2>
    <p>You don't have an account?
      <router-link to="/signup">create account now!!</router-link>
    </p>
  <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'


export default {
  name: 'Signin',
  mounted() {
    var uiConfig = {
      signInSuccessUrl: '/about',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      ]
    }
    let ui = firebaseui.auth.AuthUI.getInstance()
    if (!ui) {
      ui = new firebaseui.auth.AuthUI(firebase.auth())
    }
    ui.start('#firebaseui-auth-container', uiConfig)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signin {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>
