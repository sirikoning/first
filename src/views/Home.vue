<template>
  <div class="home">
    <img src="../assets/logo.jpg">
    <HelloWorld msg="aWelcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
