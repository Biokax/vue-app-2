<template>
  <div>
    <div class="header">
      <p>
        Completed Tasks:
        {{
          tasks.filter((task) => {
            return task.done === true;
          }).length
        }}
      </p>
      <p>
        Pending Tasks:
        {{
          tasks.filter((task) => {
            return task.done === false;
          }).length
        }}
      </p>
    </div>
    <div>
      <task
        @delete-task="deleteTask"
        @complete-task="completeTask"
        v-for="(task, index) in tasks"
        :key="index"
        :task="task"
      ></task>
    </div>
  </div>
</template>

<script>
import Task from "./TaskManager";

export default {
  name: "TaskList",
  props: ["tasks"],
  components: {
    Task,
  },
  methods: {
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
    },
    completeTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks[taskIndex].done = true;
    },
  },
};
</script>
