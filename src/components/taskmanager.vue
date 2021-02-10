<template>
  <div class="card">
    <div v-show="!isEditing">
      {{ task.title + " (" + task.project + ") " }}

      <button @click="showForm">
        Edit
      </button>
      <button @click="deleteTask(task)">
        Delete
      </button>
    </div>
    <div v-show="isEditing">
      <div class="form">
        <label>Title</label>

        <input type="text" v-model="task.title" />
      </div>
      <div class="form">
        <label>Project</label>

        <input type="text" v-model="task.project" />
      </div>
      <div>
        <button @click="hideForm">
          Close
        </button>
      </div>
    </div>
    <div v-show="!isEditing && task.done">
      Completed
    </div>
    <div @click="completeTask(task)" v-show="!isEditing && !task.done">
      Pending
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    completeTask(task) {
      this.$emit("complete-task", task);
    },
    deleteTask(task) {
      this.$emit("delete-task", task);
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
  },
};