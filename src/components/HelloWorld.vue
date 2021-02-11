<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Bienvenue dans l'application de gestion de projet.</h2>
    <p>Allez sur
      <router-link to="/task">Planifier une tâche</router-link>
      pour démarrer
    </p>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
