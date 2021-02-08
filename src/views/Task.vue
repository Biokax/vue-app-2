<template>
  <div class="task">
    <img alt="Vue logo" src="../assets/logo.png">
    <Taskmanager msg="Planifier une tâche"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Taskmanager from '@/components/taskmanager.vue'

export default {
  name: 'Task',
  components: {
    Taskmanager
  }
}
</script>