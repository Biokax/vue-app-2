<template>
  <div class="latask">
    <task-list :tasks="tasks"></task-list>
    <creer-task @creer-task="CreerTask"></creer-task>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskList from "@/components/TaskList";
import CreerTask from "@/components/CreerTask";

export default {
  name: 'latask',
  components: {
    TaskList,
    CreerTask,
  },
  data() {
    return {
      tasks: [
        {
          title: "Sortir le chat",
          done: false,
        },
        {
          title: "Nourrir le chat",
          done: false,
        },
        {
          title: "Tondre la pelouse",
          done: false,
        },
        {
          title: "Vider le lave vaisselle",
          done: false,
        },
      ],
    };
  },
  methods: {
    CreerTask(newTask) {
      this.tasks.push(newTask);
    },
  },
}
</script>