<template>
  <div class="home">
    <img alt="Vue projet" src="../assets/projet.jpg" width="40%" height="40%">
    <HelloWorld msg="App gestion de projets"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
