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
          title: "Task A",
          project: "Project A",
          done: false,
        },
        {
          title: "Task B",
          project: "Project B",
          done: true,
        },
        {
          title: "Task C",
          project: "Project C",
          done: false,
        },
        {
          title: "Task D",
          project: "Project D",
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