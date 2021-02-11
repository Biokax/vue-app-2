<template>
  <div class="liste">
    <div class="col">
      <div class="card shadow-sm">
        <div v-show="!isEditing" class="card-body">
              <p class="card-text">
          {{ task.title }}
              </p>
          <button @click="showForm" class="btn btn-sm btn-outline-secondary">
            Editer
          </button>
          <button @click="deleteTask" class="btn btn-sm btn-outline-secondary">
            Supprimer
          </button>
          <button @click="completeTask" class="btn btn-sm btn-outline-secondary">
            Status
          </button>
            </div>
        <div v-show="isEditing" class="card-body">
          <div class="form">
            <label>Titre</label>

            <input type="text" v-model="task.title" />
          </div>
          <div>
            <button @click="hideForm" class="btn btn-sm btn-outline-secondary">
              Fermer
            </button>
          </div>
        </div>
        <div v-show="!isEditing && task.done">
          Terminé
        </div>
        <div @click="completeTask" v-show="!isEditing && !task.done">
          En cours
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    completeTask() {
      this.$emit("complete-task", this.task);
    },
    deleteTask() {
      this.$emit("delete-task", this.task);
    },
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
  },
};
</script>

<style scoped>
.liste {
  padding-left: 30%;
  padding-right: 30%;
}
</style>